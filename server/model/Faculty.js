import mongoose from "mongoose";

const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name:{
        type: String,
        required:true
    },
    
    email:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type:String,
        require : true,
        minLength:8
    },

});

export default mongoose.model("Faculty",facultySchema);