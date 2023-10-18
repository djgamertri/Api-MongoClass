import mongoose from 'mongoose'

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  topics: {
    type: Array,
    require: true
  },
  averageRating: {
    type: Number,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Bootcamp', bootcampSchema)
