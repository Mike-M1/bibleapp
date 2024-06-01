import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import UserModel from "./users.js";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());


// async function mongo_db_conn(){
//   try{
//     console.log("Before connection")
//     
//     console.log('Mongodb connected')
//   } catch (err){
//     console.error("Error connecting to MongoDB:", err)
//     throw err
//   }
    
//    const users = await UserModel.find()
//    return users
// }
 await mongoose.connect("mongodb+srv://mikalmckeever:password123!@cluster0.0dygfli.mongodb.net/Bible_App?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
app.get('/getusers', async (req, res) =>{
 
  try{
    let users1 = await UserModel.find()
      console.log(users1)
      res.json(users1)
  }catch (err){
    console.log(err)
  }
  
})

app.post('/createuser', async (req,res) => {
  try {
    console.log(req.body.data.email)
    const newPerson = new UserModel({
      name: req.body.data.name,
      email: req.body.data.email,
      password: req.body.data.password,
    });
    newPerson.save()
    .then((doc) => {
      console.log("user created:", doc)
    })
    .catch((err) => {
      console.error('Error creating user:', err)
    })
  } catch (error) {
    console.log(error)
  }
})

app.listen(3001, async () => {
  console.log("app is running")
});
