import UserFirebaseRepository from '../../infra/firebase/user'
import CreateUserController from './controllers/createUser'
import CreateUserUseCase from '../../domain/user/useCases/createUser'

import FindAllUsersUseCase from '../../domain/user/useCases/finderAllUsers'
import FindAllUsersController from './controllers/findAllUsers'
import FindUserByIdUseCase from '../../domain/user/useCases/findUserById'
import FindUserByIdController from './controllers/findUserById'
import UpdateUserUseCase from '../../domain/user/useCases/updateUser'
import UpdateUserController from './controllers/updateUser'
import DeleteUserUseCase from '../../domain/user/useCases/deleteUser'
import DeleteUserController from './controllers/deleteUser'

const makeCreateUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository)

  return new CreateUserController(createUserUseCase)
}

const makeFindAllUsersFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const findAllUsersUseCase = new FindAllUsersUseCase(userRepository)
  return new FindAllUsersController(findAllUsersUseCase)
}

const makeFindUserByIdFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const findUserByIdUseCase = new FindUserByIdUseCase(userRepository)
  return new FindUserByIdController(findUserByIdUseCase)
}

const makeUpdateUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const updateUserUseCase = new UpdateUserUseCase(userRepository)
  return new UpdateUserController(updateUserUseCase)
}

const makeDeleteUserFactory = (): any => {
  const userRepository = new UserFirebaseRepository()
  const deleteUserUseCase = new DeleteUserUseCase(userRepository)
  return new DeleteUserController(deleteUserUseCase)
}

export {
  makeCreateUserFactory,
  makeFindAllUsersFactory,
  makeFindUserByIdFactory,
  makeUpdateUserFactory,
  makeDeleteUserFactory,
}
