import { Mongoose } from "mongoose"

const userSchema = new userSchema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    PermissionLevel: Number
})

const userModel = Mongoose.model('Users', userSchema);