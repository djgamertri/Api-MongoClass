import Course from '../config/Models/Course.js'

export const GetAll = async (req, res) => {
  try {
    const courses = await Course.find()
    res.json(courses)
  } catch (error) {
    console.error('Error al obtener los courses:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const GetOne = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    res.json(course)
  } catch (error) {
    console.error('Error al obtener los courses:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const NewCourse = async (req, res) => {
  const { name, description, weeks, tuition, minimumSkill } = req.body
  try {
    const course = new Course({
      name,
      description,
      weeks,
      tuition,
      minimumSkill
    })
    const newCourse = await course.save()
    res.status(201).json(newCourse)
  } catch (error) {

  }
}

export const UpdateCourse = async (req, res) => {
  try {
    const { name, description, weeks, tuition, minimumSkill } = req.body

    await Course.findByIdAndUpdate(
      { _id: req.params.id },
      { name, description, weeks, tuition, minimumSkill },
      { new: true }
    )
    res.json({ message: 'Course Updated' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const DeleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted Course' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
