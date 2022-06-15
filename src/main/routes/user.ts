import { Router } from 'express'
import {
  makeCreateUserFactory,
  makeDeleteUserFactory,
  makeFindAllUsersFactory,
  makeFindUserByIdFactory,
  makeUpdateUserFactory,
} from '../factories/user'

const userRouter: Router = Router()

const createUserController = makeCreateUserFactory()
const findAllUsersController = makeFindAllUsersFactory()
const findUserByIdController = makeFindUserByIdFactory()
const updateUserController = makeUpdateUserFactory()
const deleteUserController = makeDeleteUserFactory()

userRouter.post('/', (req, res) => createUserController.handle(req, res))
userRouter.get('/', (req, res) => findAllUsersController.handle(req, res))
userRouter.get('/:id', (req, res) => findUserByIdController.handle(req, res))
userRouter.patch('/:id', (req, res) => updateUserController.handle(req, res))
userRouter.delete('/:id', (req, res) => deleteUserController.handle(req, res))

export default userRouter
