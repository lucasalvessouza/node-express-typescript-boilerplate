import { Router } from 'express'
import { validateRequest } from '../common/middlewares/validation'
import { makeLoginFactory, makeResetPasswordEmailFactory } from './factories'
import { loginBodySchema, resetPasswordEmail } from './validation-schema'

const authRouter: Router = Router()

const loginController = makeLoginFactory()
const resetPasswordEmailController = makeResetPasswordEmailFactory()

authRouter.post(
    '/login',
    validateRequest({ body: loginBodySchema }),
    (req, res) => loginController.handle(req, res)
)
authRouter.post(
    '/reset-password-email',
    validateRequest({ body: resetPasswordEmail }),
    (req, res) => resetPasswordEmailController.handle(req, res)
)

export default authRouter
