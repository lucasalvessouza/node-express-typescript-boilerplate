import UserFirebaseRepository from '../../../infra/firebase/user'
import CreateUserController from '../../../services/user/controllers/createUser'
import CreateUserUseCase from '../../../services/user/useCases/createUser'

import FindAllUsersUseCase from '../../../services/user/useCases/finderAllUsers'
import FindAllUsersController from '../../../services/user/controllers/findAllUsers'
import FindUserByIdUseCase from '../../../services/user/useCases/findUserById'
import FindUserByIdController from '../../../services/user/controllers/findUserById'
import UpdateUserUseCase from '../../../services/user/useCases/updateUser'
import UpdateUserController from '../../../services/user/controllers/updateUser'
import DeleteUserUseCase from '../../../services/user/useCases/deleteUser'
import DeleteUserController from '../../../services/user/controllers/deleteUser'

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
