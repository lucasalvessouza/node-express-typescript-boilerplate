import UserRepository from '../../../domain/user/repository'

export default class FindAllUsersUseCase {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async findAll(): Promise<any> {
    return this.userRepository.findAll()
  }
}
