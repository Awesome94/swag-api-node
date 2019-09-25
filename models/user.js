import { Mongoose } from "mongoose"



const userSchema = new userSchema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number,
    phoneNumber: Number,
    alias: String,
    profilePicture: String,
    token: String,
    rating: Number
})

const userModel = Mongoose.model('Users', userSchema);