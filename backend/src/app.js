const express = require("express")
const multer = require("multer")
const uploadFile = require('./services/storge.services')
const photoModel = require("./model/model.post")
const app = express()
const cors = require("cors")

app.use(cors())
app.options(/.*/, cors())

app.use(express.json())
const uplode = multer({ storage: multer.memoryStorage() })

app.get("/", (req, res) => {
    res.status(200).json({
        message: "booking backend is running"
    })
});
app.post("/notes", uplode.single('image'), async (req, res) => {
    try {
        let finalImageUrl = ""; 
        
        // Agar frontend se image aayi hai, toh pehle usko ImageKit par upload karo
        if (req.file) {
            const uploadResult = await uploadFile(req.file.buffer);
            finalImageUrl = uploadResult.url; 
            console.log(finalImageUrl) // Terminal me image URL dekhne ke liye
        }

        // Ab database me save karo
        const post = await photoModel.create({
            name: req.body.name,
            email: req.body.email,
            roomType: req.body.roomType,
            suggestions: req.body.suggestions,
            adults: req.body.adults,
            children: req.body.children,
            phone: req.body.phone,
            image: finalImageUrl, // <--- YAHAN GALTI THI, Ise theek kar diya hai
        });

        return res.status(201).json({
            message: "booking upload successfully",
            post: post
        });
    } catch (error) {
         console.log(finalImageUrl)
        console.log("Upload Error:", error); // Terminal me error dekhne ke liye
        return res.status(500).json({
            message: "upload failed",
            error: error.message
        });
    }
})
app.get("/notes", async (req, res) => {
    try {
        const data = await photoModel.find()
        res.status(200).json({
            message: "photo upload successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "failed to fetch notes",
            error: error.message
        })
    }
})

module.exports = app
