import { Router } from 'express'
import { validateRequest } from '../common/middlewares/validation'
import { makeLoginFactory } from './factories'
import { loginBodySchema } from './validation-schema'

const authRouter: Router = Router()

const loginController = makeLoginFactory()

authRouter.post('/login', validateRequest({ body: loginBodySchema }),  (req, res) => loginController.handle(req, res))

export default authRouter
