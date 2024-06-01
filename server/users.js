import mongoose from "mongoose";

const Users = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("peoples", Users)
export default UserModel