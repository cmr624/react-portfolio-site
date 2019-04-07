const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
require('dotenv').config()
const path = require('path');
const cluster = require('cluster');
const morgan = require('morgan');
const numCPUs = require('os').cpus().length;
const isDev = process.env.NODE_ENV !== 'production';
const isStaging = process.env.NODE_ENV == "staging";
const PORT = (process.env.PORT || 5000);
const mongoose = require("mongoose");
const user = require('./routes/user');
const passport = require('./passport');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const api = require('./routes/api');

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // MIDDLEWARE
  app.use(morgan('dev'))
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  )
  app.use(bodyParser.json())
  const randomString="cmr123";
    //sessions
  app.use(
    session({
      secret: randomString, //pick a random string to make the hash that is generated secure
      store: new MongoStore({ mongooseConnection: dbConnection}),
      resave: false, //required
      saveUninitialized: false //required
    })
  )

  // Passport
  app.use(passport.initialize())
  app.use(passport.session()) // calls serializeUser and deserializeUser

  //user route
  app.use('/user', user);

  //api route
  app.use('/api', api);

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
  
}

