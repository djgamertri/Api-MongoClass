import bootcampsRoutes from './routes/bootcamps.routes.js'
import CourseRoutes from './routes/course.routes.js'
import ReviewRoutes from './routes/review.routes.js'
import UserRoutes from './routes/users.routes.js'

import express from 'express'
import cors from 'cors'
import { MongoDB, PORT } from './config/Config.js'
import mongoose from 'mongoose'

const app = express()

mongoose.connect(MongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'))
db.once('open', () => {
  console.log('Conexión a MongoDB exitosa')
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(bootcampsRoutes)
app.use(CourseRoutes)
app.use(ReviewRoutes)
app.use(UserRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'This page not found'
  })
})

app.listen(PORT)
