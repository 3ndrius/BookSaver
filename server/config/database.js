const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
};

// mongodb environment variables
const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT,
  MONGO_REMOTE_USER,
  MONGO_REMOTE_PASS,
  MONGO_DB_NAME
} = process.env;

const dbConnectionURL = {
  'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
  //'REMOTE':`mongodb+srv://${MONGO_REMOTE_USER}:${MONGO_REMOTE_PASS}@cluster0.7bkd7.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`
  //'mongodb://mongo:27017/myDB';
};
mongoose.connect(dbConnectionURL.LOCALURL, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
db.once('open', () => {
  // we're connected !
  console.log('###### ======== Mongodb Connection Successful ========= ########');
});
