require('dotenv').config()
const app = require('./src/app')
const mongoDB = require('./src/db/db')


mongoDB()
app.listen(3000, () => {
    console.log("server kam kya kara")
})