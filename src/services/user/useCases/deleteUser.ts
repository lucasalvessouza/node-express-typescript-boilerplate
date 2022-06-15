import UserRepository from '../../../domain/user/repository'

export default class DeleteUserUseCase {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async delete(id: string): Promise<any> {
    return this.userRepository.delete(id)
  }
}
