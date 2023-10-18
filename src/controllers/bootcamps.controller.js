import Bootcamp from '../config/Models/Bootcamp.js'

export const GetAll = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find()
    res.json(bootcamps)
  } catch (error) {
    console.error('Error al obtener los bootcamps:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const GetOne = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.findById(req.params.id)
    res.json(bootcamps)
  } catch (error) {
    console.error('Error al obtener los bootcamps:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const NewBootcamp = async (req, res) => {
  try {
    const { name, phone, address, topics, averageRating } = req.body
    const bootcamp = new Bootcamp({
      name,
      phone,
      address,
      topics,
      averageRating
    })
    const newbootcamp = await bootcamp.save()
    res.status(201).json(newbootcamp)
  } catch (error) {

  }
}

export const UpdateBootcamp = async (req, res) => {
  const { name, phone, address, topics, averageRating } = req.body
  try {
    await Bootcamp.findByIdAndUpdate(
      { _id: req.params.id },
      { name, phone, address, topics, averageRating },
      { new: true }
    )
    res.json({ message: 'Bootcamp Updated' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const DeleteBootcamp = async (req, res) => {
  try {
    await Bootcamp.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted Subscriber' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
