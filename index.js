require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())

// Database connection
mongoose.connect(process.env.DATABASE, {})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// import routes
const loginRoutes = require('./routes/login')
const usersRoutes = require('./routes/users')

// use Routes
app.use('/', loginRoutes)
app.use('/', usersRoutes)

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})

app.listen(port, ()=>{
    console.log(`app listen on PORT ${port}`)
})


