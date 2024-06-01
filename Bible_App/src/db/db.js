import {MongoClient} from 'mongodb'


async function connectDB() {
   const conn = new MongoClient(import.meta.env.VITE_REACT_APP_MONGO_URL)
   const data = await conn.db().collection('People').find({}).toArray();
   return data
 }

export default connectDB