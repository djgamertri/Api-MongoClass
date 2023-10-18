import { Router } from 'express'
import { GetAll, GetOne, NewCourse, DeleteCourse, UpdateCourse } from '../controllers/course.controller.js'

const router = Router()

router.get('/courses', GetAll)

router.get('/courses/:id', GetOne)

router.post('/courses', NewCourse)

router.patch('/courses/:id', UpdateCourse)

router.delete('/courses/:id', DeleteCourse)

export default router
