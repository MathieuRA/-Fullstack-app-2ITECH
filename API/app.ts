'user strict'

// Import
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import mongoose, { CallbackError } from 'mongoose'

import dbUser from './db/dbUser'
import projectsRoute from './src/routes/projectsRoute'
import usersRoute from './src/routes/usersRoute'

// Variable declaration
const app = express()

const PORT = process.env.PORT || 3000
const mongoUrl = `mongodb+srv://${dbUser.pseudo}:${dbUser.password}@${dbUser.personalLink}/${dbUser.dbName}?retryWrites=true&w=majority`

// Connection to DB
mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: CallbackError) => {
    if (err) throw err
    console.log('Connected to mongoDB')
  }
)

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// @ts-ignore
app.use(cors())
app.use(express.static('public'))

// Routing
projectsRoute(app)
usersRoute(app)

app.listen(PORT, () =>
  console.log('Listening on port: ' + PORT)
)
