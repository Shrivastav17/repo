import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
   
   
});

//model create--> schema bind collection
const userModel = mongoose.model('users', userSchema);
export default userModel;