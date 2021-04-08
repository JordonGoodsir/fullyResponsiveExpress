import mongoose from "mongoose" 

const Test = new mongoose.Schema( 
    { 
    entry: { 
        type: String
    }    
    }
) 

const Test = Mongoose.model("Test", userSchema) 

module.exports = mongoose.model("Test", Test)