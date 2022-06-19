import UserRepository from '../../../domain/user/repository'

export interface DeleteUserUseCase {
  delete: (id: string) => Promise<any>
}

export function deleteUserCase(userRepository: UserRepository): DeleteUserUseCase {
  return {
    delete: async (id: string): Promise<void> => {
      return userRepository.delete(id)
    }
  }
}
