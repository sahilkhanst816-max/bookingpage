const mongoose = require("mongoose")
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log('server is cont is mongoDB')
}

module.exports = connectDB