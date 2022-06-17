import LoginUseCase from '../../domain/auth/useCases/login'
import LoginController from './controllers/login'
import AuthFirebaseRepository from '../../data/auth/firebase'

const makeLoginFactory = (): any => {
  const authRepository = new AuthFirebaseRepository()
  const loginUseCase = new LoginUseCase(authRepository)

  return new LoginController(loginUseCase)
}


export {
  makeLoginFactory
}
