import { Router } from 'express'
import { GetAll, GetOne, NewBootcamp, DeleteBootcamp, UpdateBootcamp } from '../controllers/bootcamps.controller.js'

const router = Router()

router.get('/bootcamps', GetAll)

router.get('/bootcamps/:id', GetOne)

router.post('/bootcamps', NewBootcamp)

router.patch('/bootcamps/:id', UpdateBootcamp)

router.delete('/bootcamps/:id', DeleteBootcamp)

export default router
