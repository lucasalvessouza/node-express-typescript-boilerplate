import UserRepository from '../../../domain/user/repository'
import { User } from '../model'

export interface FindUserByIdUseCase {
  findById: (id: string) => Promise<User>
}

export function findUserByIdUseCase(userRepository: UserRepository): FindUserByIdUseCase {
  return {
    findById: async (id: string): Promise<User> => {
      return userRepository.findById(id)
    }
  }
}
