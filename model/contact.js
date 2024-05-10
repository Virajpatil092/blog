const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    id : {
        type:String,
        required : [true,"please"]
    },
    name:{
        type:String,
        required : [true, "please"]
    }
})

module.exports = mongoose.model("contact", contactSchema);