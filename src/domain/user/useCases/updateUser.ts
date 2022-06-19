import { User } from '../../../domain/user/model'
import UserRepository from '../../../domain/user/repository'

export interface UpdateUserUseCase {
  update: (id: string, user: User) => Promise<any>
}

export function updateUserUseCase(userRepository: UserRepository): UpdateUserUseCase {
  return {
    update: async (id: string, user: User): Promise<any> => {
      return userRepository.update(id, user)
    }
  }
}