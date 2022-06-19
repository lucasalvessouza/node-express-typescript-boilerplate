import UserFirebaseRepository from '../../data/user/firebase'
import { createUserController } from './controllers/createUser'
import CreateUserUseCase from '../../domain/user/useCases/createUser'

import FindAllUsersUseCase from '../../domain/user/useCases/finderAllUsers'
import { findAllUsersController } from './controllers/findAllUsers'
import FindUserByIdUseCase from '../../domain/user/useCases/findUserById'
import { findUserByIdController } from './controllers/findUserById'
import UpdateUserUseCase from '../../domain/user/useCases/updateUser'
import { updateUserController } from './controllers/updateUser'
import DeleteUserUseCase from '../../domain/user/useCases/deleteUser'
import { deleteUserController } from './controllers/deleteUser'

const makeCreateUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository)

  return createUserController(createUserUseCase)
}

const makeFindAllUsersFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const findAllUsersUseCase = new FindAllUsersUseCase(userRepository)
  return findAllUsersController(findAllUsersUseCase)
}

const makeFindUserByIdFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const findUserByIdUseCase = new FindUserByIdUseCase(userRepository)
  return findUserByIdController(findUserByIdUseCase)
}

const makeUpdateUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const updateUserUseCase = new UpdateUserUseCase(userRepository)
  return updateUserController(updateUserUseCase)
}

const makeDeleteUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const deleteUserUseCase = new DeleteUserUseCase(userRepository)
  return deleteUserController(deleteUserUseCase)
}

export {
  makeCreateUserFactory,
  makeFindAllUsersFactory,
  makeFindUserByIdFactory,
  makeUpdateUserFactory,
  makeDeleteUserFactory,
}
