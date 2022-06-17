import { Router } from 'express'
import { validateRequest } from '../common/middlewares/validation'
import { makeLoginFactory } from './factories'
import { loginSchema } from './validation-schema'

const authRouter: Router = Router()

const loginController = makeLoginFactory()

authRouter.post('/login', validateRequest(loginSchema),  (req, res) => loginController.handle(req, res))

export default authRouter
