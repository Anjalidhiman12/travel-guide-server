
/* eslint-disable guard-for-in */

const mongoose = require('mongoose');
const MONGO_DISCONNECTED = 0;
const MONGO_CONNECTED = 1;
// const db = null;
// mongoose.createConnection('mongodb://admin:password@172.17.0.2/OOTA', {
//   bufferCommands: false,
//   bufferMaxEntries: 0,
//   useNewUrlParser: true,
// }).then((connection)=>{
//   db=connection;
// }).catch((error) =>);

export const connect =
async () => {
   let URL =`${process.env.SCHEME}://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.HOST}${(process.env.PORT!=undefined)?':'+process.env.PORT:''}${process.env.DB_NAME}`;
  // if (ignoreCredentials) {
  //   URL =`${process.env.SCHEME}://${process.env.HOST}:${process.env.PORT}/${databaseName}`;
  // }
  console.log(URL)
 // let URL=`mongodb+srv://admin:vzq2w0aQ5gcaoZWg@cluster0.gldhpbu.mongodb.net/test/TRAVELLER`
  if (mongoose.connection.readyState === MONGO_DISCONNECTED) {
    await mongoose.connect(URL,
        {useNewUrlParser: true,
          // keepAlive: true,
          // serverSelectionTimeoutMS: 45000,
          useUnifiedTopology: true});
    // if (done!=undefined) {
    //   done();
    // }
  }
  return true;
};

// eslint-disable-next-line max-len
export const get = () => {
  connect();
  return mongoose;
};

export const disconnect = async (done:any) => {
  if (mongoose.connection.readyState == MONGO_CONNECTED) {
    await mongoose.disconnect();
    if (done!=undefined) {
      return done();
    }
  } else {
    if (done!=undefined) {
      return done(false);
    }
  }
};

export const clearAllCollections = async () => {
  connect();
  for (const i in mongoose.connection.collections) {
    await mongoose.connection.collections[i].deleteMany({});
  }
};
