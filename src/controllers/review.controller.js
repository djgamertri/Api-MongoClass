import Review from '../config/Models/Review.js'

export const GetAll = async (req, res) => {
  try {
    const Reviws = await Review.find()
    res.json(Reviws)
  } catch (error) {
    console.error('Error al obtener los reviws:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const GetOne = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
    res.json(review)
  } catch (error) {
    console.error('Error al obtener los review:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const NewReview = async (req, res) => {
  try {
    const { title, comment, rating } = req.body
    const review = new Review({
      title,
      comment,
      rating
    })
    const newReview = await review.save()
    res.status(201).json(newReview)
  } catch (error) {

  }
}

export const UpdateReview = async (req, res) => {
  try {
    const { title, comment, rating } = req.body
    await Review.findByIdAndUpdate(
      { _id: req.params.id },
      { title, comment, rating },
      { new: true }
    )
    res.json({ message: 'Review Updated' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const DeleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted Review' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
