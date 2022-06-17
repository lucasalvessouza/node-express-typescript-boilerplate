import { Router } from 'express'
import { makeLoginFactory } from './factories'
import AuthControllerValidation from './validators'

const authRouter: Router = Router()

const loginController = makeLoginFactory()

authRouter.post('/login', AuthControllerValidation.login,  (req, res) => loginController.handle(req, res))

export default authRouter
