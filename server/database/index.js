const isDev = process.env.NODE_ENV !== 'production';
const isStaging = process.env.NODE_ENV == "staging";
function getUrl(isStaging)
{
  if (!isStaging)
  {
    return "" + process.env.DB_HOST + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_LINK;
  
  }
  else
  {
    return process.env.MONGODB_URI;
  }
}
let url = getUrl(isStaging);
//Connect to Mongo database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect(url).then(
  () => { 
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
      console.log('Connected to Mongo');   
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
      }
);



module.exports = mongoose.connection;

