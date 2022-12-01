import Student from "../model/Student.js";
import bcrypt from "bcryptjs";

export const getAllStudents = async(req,res,next)=>
{
    let Students;
    try {
        Students = await Student.find();
    } catch (error) {
        return console.log(error);
    }
    if(!Students)
    {
        return res.status(400).json({message:"No Students Found!"});
    }
    return res.status(200).json({Students});
}

export const Signup = async(req,res,next)=>
{
    const {name,email,password} = req.body;
    let existingStudent;

    try
    {
        existingStudent = await Student.findOne({email});
    }
    catch(err)
    {
        console.log(err);
    }
    if(existingStudent)
    {
        res.status(400).json({message : "Student Already Exists!"});
    }
    const hashedPassword = bcrypt.hashSync(password);
    const student = new Student({
        name,
        email,
        password:hashedPassword,

    });
    try
    {
        await student.save();
    } 
    catch(err)
    {
        return res.status(404).json({message:"student Creation Failed!"});
    }
    return res.status(201).json({student});
}
export const login = async(req,res,next)=>
{
    const{email,password} = req.body;

    let existingStudent;

    try {
        existingStudent =await Student.findOne({email});
    } catch (error) {
        return console.log(error);
    }
    if(!existingStudent)
    {
        return res.status(404).json({message:"Student Not Found!"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingStudent.password);

    if(!isPasswordCorrect)
    {
        return res.status(404).json({message:"Incorrect Password!"});

    }
    return res.status(200).json({message:"Login Successfull",student:existingStudent});

}