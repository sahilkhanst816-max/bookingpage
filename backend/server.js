require('dotenv').config()
const app = require('./src/app')
const mongoDB = require('./src/db/db')


mongoDB()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server kam kya kara on port ${PORT}`)
})
