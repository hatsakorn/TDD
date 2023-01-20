require('dotenv').config()
const express = require('express')
const {db} = require('./model')
const app = express()
const todoRoute = require('./routes/todoRoute')

// db.sync({force:true})
db.authenticate().then(()=>{
    // console.log(`DB Connected in ${MODE} mode`)
})
app.use(express.json())
app.use("/api/v1.0/todos",todoRoute)

// const PORT = process.env.PORT || 8080;
// const MODE = process.env.NODE_ENV;
// app.listen(PORT,()=>console.log(`server is running on port ${PORT} in ${MODE} mode`))

module.exports = app