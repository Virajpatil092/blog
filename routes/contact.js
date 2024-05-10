const express = require("express")
const router = express.Router()
const { getContact, getspecific }  = require("../controllers/contactcontroller")

router.route('/').get(getContact).post(getspecific);

module.exports = router;