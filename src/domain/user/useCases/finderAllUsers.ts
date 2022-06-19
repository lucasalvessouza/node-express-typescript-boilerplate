import UserRepository from '../../../domain/user/repository'
import { User } from '../model'

export interface FindAllUsersUseCase {
  findAll: () => Promise<User[]>
}

export function findAllUsersUseCase(userRepository: UserRepository): FindAllUsersUseCase {
  return {
    findAll: async (): Promise<User[]> => {
      return userRepository.findAll()
    }
  }
}
