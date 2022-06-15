const express = require('express')
require('dotenv').config()
const app = express()
const mongoConfig = require('./Config/mongoConfig')
const usersRouter = require('./Routes/usersRoute')
const skyscraperRouter = require('./Routes/skyscraperRoute')
const authRouter = require('./Routes/authRoute')

const morgan = require('morgan')
const helmet = require('helmet')

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

app.use('/skyscrapers', skyscraperRouter)
app.use('/users', usersRouter)
app.use('/login', authRouter)

const PORT = 5001

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})