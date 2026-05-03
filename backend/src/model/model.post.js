const mongoDB = require("mongoose")

const mongoDBSchema = new mongoDB.Schema({
    image: String,
    name: String,
    email: String,
    roomType: String,
    suggestions: String,
    adults: Number,
    children: Number,
    phone: Number,

    
})

const mongoDBmodel = mongoDB.model("post", mongoDBSchema)

module.exports = mongoDBmodel 