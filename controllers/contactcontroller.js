const asynchandler = require("express-async-handler")
const Contact = require("../model/contact")

const getContact = asynchandler(async (req,res)=>{
    const contact = await Contact.find();
    res.status(200).send(contact)
})

const getspecific = asynchandler(async (req,res)=>{
    const {id, name} = req.body;

    if(!name || !id){
        req.status(400);
        throw new Error("Wah modi ji wah")
    }

    const contact = await Contact.create({
        id,name
    })

    res.status(200).send(contact)
})

module.exports = {getContact, getspecific}