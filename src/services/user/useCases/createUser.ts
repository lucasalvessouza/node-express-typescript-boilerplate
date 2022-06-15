import { User } from '../../../domain/user/model'
import UserRepository from '../../../domain/user/repository'

export default class CreateUserUseCase {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async create(user: User): Promise<any> {
    return this.userRepository.create(user)
  }
}
