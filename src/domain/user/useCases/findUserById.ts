import UserRepository from '../../../domain/user/repository'

export default class FindUserByIdUseCase {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async findById(id: string): Promise<any> {
    return this.userRepository.findById(id)
  }
}
