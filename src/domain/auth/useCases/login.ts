import AuthRepository from '../../../domain/auth/repository'
import { Login } from '../model'

export interface LoginUseCase {
  login: (email: string, password: string) => Promise<Login>
  sendPasswordResetEmail: (email: string) => Promise<void>
}

export function loginUseCase(authRepository: AuthRepository): LoginUseCase {
  return {
    login: async (email: string, password: string): Promise<Login> => {
      return authRepository.login(email, password)
    },
    sendPasswordResetEmail: async (email: string): Promise<void> => {
      return authRepository.sendPasswordResetEmail(email)
    }
  }
}