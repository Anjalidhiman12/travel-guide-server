const mongoose = require('mongoose')

const dbname = 'mongodb'
const url = `${process.env.DB_SCHEME}://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}${(process.env.DB_PORT!=undefined)?':'+process.env.DB_PORT:''}/${process.env.DB_NAME}`;
// const url = `${dbname}://localhost/TravelDB`

export const connect = async () => {
    console.log('url --------> ', url);
    await mongoose.connect(url, {useNewUrlParser: true})
    return true;
}

export const get = () => {
    connect();
    return mongoose;
}
