import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  comment: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true
  }
})

export default mongoose.model('Review', ReviewSchema)
