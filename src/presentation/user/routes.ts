import { Router } from 'express'
import {
  makeCreateUserFactory,
  makeDeleteUserFactory,
  makeFindAllUsersFactory,
  makeFindUserByIdFactory,
  makeUpdateUserFactory,
} from './factories'
import { accessTokenAuthentication, validateUserRole } from '../common/middlewares/authentication'
import { validateRequest } from '../common/middlewares/validation'
import {
  userCreateBodySchema,
  userDeleteSchema,
  userFindByIdParamsSchema,
  userUpdateParamsSchema,
  userUpdateBodySchema
} from './validation-schema'
import { UserRole } from '../../domain/user/model'

const userRouter: Router = Router()

const createUserController = makeCreateUserFactory()
const findAllUsersController = makeFindAllUsersFactory()
const findUserByIdController = makeFindUserByIdFactory()
const updateUserController = makeUpdateUserFactory()
const deleteUserController = makeDeleteUserFactory()

userRouter.use(accessTokenAuthentication)

userRouter.post(
  '/',
  validateUserRole(UserRole.ADMIN),
  validateRequest({ body: userCreateBodySchema }),
  (req, res) => createUserController.handle(req, res)
)
userRouter.get(
  '/', 
  (req, res) => findAllUsersController.handle(req, res)
)
userRouter.get(
  '/:id', 
  validateRequest({ params: userFindByIdParamsSchema }),
  (req, res) => findUserByIdController.handle(req, res)
)
userRouter.patch(
  '/:id',
  validateUserRole(UserRole.ADMIN),
  validateRequest({ params: userUpdateParamsSchema, body: userUpdateBodySchema }),
  (req, res) => updateUserController.handle(req, res)
)
userRouter.delete(
  '/:id',
  validateUserRole(UserRole.ADMIN),
  validateRequest({ params: userDeleteSchema }),
  (req, res) => deleteUserController.handle(req, res)
)

export default userRouter
