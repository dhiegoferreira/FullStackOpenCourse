require('dotenv').config()

const PORT = process.env.PORT


//an smart way to separate test database in MongoDB Atlas
const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI




module.exports = {
    MONGODB_URI,
    PORT
}