const mongoose = require("mongoose")
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
async function connectDB() {
    await mongoose.connect("mongodb+srv://day3backend:doyh7jQAhSaZAkFN@day3backend.hh4xsnm.mongodb.net/halley")

    console.log('server is cont is mongoDB')
}

module.exports = connectDB