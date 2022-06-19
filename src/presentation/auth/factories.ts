import LoginUseCase from '../../domain/auth/useCases/login'
import { loginController } from './controllers/login'
import AuthFirebaseRepository from '../../data/auth/firebase'

const makeLoginFactory = (): any => {
  const authRepository = new AuthFirebaseRepository()
  const loginUseCase = new LoginUseCase(authRepository)

  return loginController(loginUseCase)
}


export {
  makeLoginFactory
}
