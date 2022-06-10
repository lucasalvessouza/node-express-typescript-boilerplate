import { Router } from 'express'
import { createUserController } from '../users/useCases/createUser'

const userRouter: Router = Router()

userRouter.post('/', (req, res) => createUserController.execute(req, res))

export default userRouter
