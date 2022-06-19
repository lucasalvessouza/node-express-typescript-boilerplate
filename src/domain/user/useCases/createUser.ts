import { User } from '../../../domain/user/model'
import UserRepository from '../../../domain/user/repository'

export interface CreateUserUseCase {
  create: (user: User) => Promise<any>
}

export function createUserUseCase(userRepository: UserRepository): CreateUserUseCase {
  return {
    create: async (user: User): Promise<User> => {
      return userRepository.create(user)
    }
  }
}
