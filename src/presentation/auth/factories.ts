import { loginUseCase } from '../../domain/auth/useCases/login'
import { loginController } from './controllers/login'
import AuthFirebaseRepository from '../../data/auth/firebase'

const makeLoginFactory = (): any => {
  const authRepository = new AuthFirebaseRepository()
  const loginUseCaseInstance = loginUseCase(authRepository)

  return loginController(loginUseCaseInstance)
}


export {
  makeLoginFactory
}
