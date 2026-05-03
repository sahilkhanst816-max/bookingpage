const express = require("express")
const multer = require("multer")
const uploadFile = require('./services/storge.services')
const photoModel = require("./model/model.post")
const app = express()
const cors = require("cors")

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://sahilkhanst816-max.github.io",
]

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true)
        }

        return callback(new Error("Not allowed by CORS"))
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(express.json())
const uplode = multer({ storage: multer.memoryStorage() })

app.get("/", (req, res) => {
    res.status(200).json({
        message: "booking backend is running"
    })
})

app.post("/notes", uplode.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "image file is required"
            })
        }

        const result = await uploadFile(req.file.buffer)
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
    } catch (error) {
        return res.status(500).json({
            message: "photo upload failed",
            error: error.message
        })
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
