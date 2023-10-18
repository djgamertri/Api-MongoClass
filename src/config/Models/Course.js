import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  weeks: {
    type: Number,
    require: true
  },
  tuition: {
    type: Number,
    require: true
  },
  minimumSkill: {
    type: String,
    enum: ['beginner', 'Intermediate', 'Advance'],
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Course', courseSchema)
