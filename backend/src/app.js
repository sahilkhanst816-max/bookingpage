const express = require("express")
const multer = require("multer")
const uploadFile = require('./services/storge.services')
const photoModel = require("./model/model.post")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())
const uplode = multer({ storage: multer.memoryStorage() })


app.post("/notes", uplode.single('image'), async (req, res) => {

    const result = await uploadFile(req.file.buffer)
    console.log(result)
    const post = await photoModel.create({
        image: result.url,
        name: req.body.name,
        email: req.body.email,
        roomType: req.body.roomType,
        suggestions: req.body.suggestions,
        adults: req.body.adults,
        children: req.body.children,
        phone: req.body.phone,

    });
   return res.status(201).json({
        message: "photo upload successfully",
        post: post
    })
})

app.get("/notes", async (req, res) => {
    const data = await photoModel.find()
    res.status(200).json({
        message: "photo upload successfully",
        data: data
    })
})

module.exports = app
