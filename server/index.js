const express = require('express');
require('dotenv').config()
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const isDev = process.env.NODE_ENV !== 'production';
const PORT = 5000;
const mongoose = require("mongoose");
let url;

if (isDev)
{
  url= "" + process.env.DB_HOST + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_LINK;
}
else
{
  url = process.env.DB_URI;
}
console.log(url);

var db;
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

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer webdev API request.
  app.get('/api/webdev', function (req, res) {
    db.collection("webdev").find({}).toArray(function(err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get webdev database.");
        } else {
            res.status(200).json(docs);
        }
      });
  });

  app.get('/api/games', function (req, res) {
    db.collection("games").find({}).toArray(function(err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get games database.");
        } else {
            res.status(200).json(docs);
        }
      });
  });


  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  mongoose.connect(url, function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  
    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");
  
    // Initialize the app.
    app.listen(PORT, function () {
        console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
      });
  });
  
}