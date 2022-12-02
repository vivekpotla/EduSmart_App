import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
    classrooms : [{type:mongoose.Types.ObjectId,ref:"Class"}],

});

export default mongoose.model("Student",studentSchema);