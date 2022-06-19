import UserRepository from '../../../domain/user/repository'
import { User } from '../model'

export interface FindUserByIdUseCase {
  findById: (id: string) => Promise<User | undefined>
}

export function findUserByIdUseCase(userRepository: UserRepository): FindUserByIdUseCase {
  return {
    findById: async (id: string): Promise<User | undefined> => {
      return userRepository.findById(id)
    }
  }
}
