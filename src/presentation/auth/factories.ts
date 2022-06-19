import { loginUseCase } from '../../domain/auth/useCases/login'
import { loginController } from './controllers/login'
import { authFirebaseRepository } from '../../data/auth/firebase'

const makeLoginFactory = (): any => {
  const loginUseCaseInstance = loginUseCase(authFirebaseRepository())

  return loginController(loginUseCaseInstance)
}


export {
  makeLoginFactory
}
