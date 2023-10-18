import { Router } from 'express'
import { GetAll, GetOne, NewUser, DeleteUser, UpdateUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/users', GetAll)

router.get('/users/:id', GetOne)

router.post('/users', NewUser)

router.patch('/users/:id', UpdateUser)

router.delete('/users/:id', DeleteUser)

export default router
