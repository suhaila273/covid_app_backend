const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        name:String,
        phone:String,
        address:String,
        symptom:String,
        status:String
    }
)

module.exports=mongoose.model("patients",patientSchema)