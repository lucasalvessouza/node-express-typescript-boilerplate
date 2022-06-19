import UserFirebaseRepository from '../../data/user/firebase'
import { createUserController } from './controllers/createUser'
import { createUserUseCase } from '../../domain/user/useCases/createUser'

import { findAllUsersUseCase } from '../../domain/user/useCases/finderAllUsers'
import { findAllUsersController } from './controllers/findAllUsers'
import { findUserByIdUseCase } from '../../domain/user/useCases/findUserById'
import { findUserByIdController } from './controllers/findUserById'
import { updateUserUseCase } from '../../domain/user/useCases/updateUser'
import { updateUserController } from './controllers/updateUser'
import { deleteUserCase } from '../../domain/user/useCases/deleteUser'
import { deleteUserController } from './controllers/deleteUser'

const makeCreateUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const createUserUseCaseInstance = createUserUseCase(userRepository)

  return createUserController(createUserUseCaseInstance)
}

const makeFindAllUsersFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const findAllUsersUseCaseInstance = findAllUsersUseCase(userRepository)
  return findAllUsersController(findAllUsersUseCaseInstance)
}

const makeFindUserByIdFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const findUserByIdUseCaseInstance = findUserByIdUseCase(userRepository)
  return findUserByIdController(findUserByIdUseCaseInstance)
}

const makeUpdateUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const updateUserUseCaseInstance = updateUserUseCase(userRepository)
  return updateUserController(updateUserUseCaseInstance)
}

const makeDeleteUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const deleteUserUseCaseInstance = deleteUserCase(userRepository)
  return deleteUserController(deleteUserUseCaseInstance)
}

export {
  makeCreateUserFactory,
  makeFindAllUsersFactory,
  makeFindUserByIdFactory,
  makeUpdateUserFactory,
  makeDeleteUserFactory,
}
