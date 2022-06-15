import { User } from '../../../domain/user/model'
import UserRepository from '../../../domain/user/repository'

export default class UpdateUserUseCase {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async update(id: string, user: User): Promise<any> {
    return this.userRepository.update(id, user)
  }
}
