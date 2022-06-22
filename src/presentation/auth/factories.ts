import { loginUseCase } from '../../domain/auth/useCases/login'
import { loginController } from './controllers/login'
import { authFirebaseRepository } from '../../data/auth/firebase'
import { sendPasswordResetEmail } from './controllers/sendPasswordResetEmail'

const makeLoginFactory = (): any => {
  const loginUseCaseInstance = loginUseCase(authFirebaseRepository())

  return loginController(loginUseCaseInstance)
}

const makeResetPasswordEmailFactory = (): any => {
  const loginUseCaseInstance = loginUseCase(authFirebaseRepository())

  return sendPasswordResetEmail(loginUseCaseInstance)
}


export {
  makeLoginFactory,
  makeResetPasswordEmailFactory
}
