import { Router } from 'express'
import { makeLoginFactory } from './factories'

const authRouter: Router = Router()

const loginController = makeLoginFactory()

authRouter.post('/login', (req, res) => loginController.handle(req, res))

export default authRouter
