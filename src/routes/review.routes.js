import { Router } from 'express'
import { GetAll, GetOne, NewReview, DeleteReview, UpdateReview } from '../controllers/review.controller.js'

const router = Router()

router.get('/reviews', GetAll)

router.get('/reviews/:id', GetOne)

router.post('/reviews', NewReview)

router.patch('/reviews/:id', UpdateReview)

router.delete('/reviews/:id', DeleteReview)

export default router
