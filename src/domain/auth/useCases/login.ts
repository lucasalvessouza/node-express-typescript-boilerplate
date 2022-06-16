import AuthRepository from '../../../domain/auth/repository'

export default class LoginUseCase {
  private authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    return this.authRepository.login(email, password)
  }
}
