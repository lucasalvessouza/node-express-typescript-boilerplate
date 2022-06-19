import { userFirebaseRepository } from '../../data/user/firebase'
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
  const createUserUseCaseInstance = createUserUseCase(userFirebaseRepository())

  return createUserController(createUserUseCaseInstance)
}

const makeFindAllUsersFactory = (): any => {
  const findAllUsersUseCaseInstance = findAllUsersUseCase(userFirebaseRepository())
  return findAllUsersController(findAllUsersUseCaseInstance)
}

const makeFindUserByIdFactory = (): any => {
  const findUserByIdUseCaseInstance = findUserByIdUseCase(userFirebaseRepository())
  return findUserByIdController(findUserByIdUseCaseInstance)
}

const makeUpdateUserFactory = (): any => {
  const updateUserUseCaseInstance = updateUserUseCase(userFirebaseRepository())
  return updateUserController(updateUserUseCaseInstance)
}

const makeDeleteUserFactory = (): any => {
  const deleteUserUseCaseInstance = deleteUserCase(userFirebaseRepository())
  return deleteUserController(deleteUserUseCaseInstance)
}

export {
  makeCreateUserFactory,
  makeFindAllUsersFactory,
  makeFindUserByIdFactory,
  makeUpdateUserFactory,
  makeDeleteUserFactory,
}
