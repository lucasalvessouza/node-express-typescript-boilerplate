import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { Login } from '../../../domain/auth/model'
import AuthRepository from '../../../domain/auth/repository'


export function authFirebaseRepository(): AuthRepository {
  return {
    login: async (email: string, password: string): Promise<Login> => {
      const {
        user: { stsTokenManager: { accessToken } }
      } = await signInWithEmailAndPassword(getAuth(), email, password) as unknown as any

      return {
        accessToken
      }
    },

    sendPasswordResetEmail: async (email: string) => {
      await sendPasswordResetEmail(getAuth(), email)
      return Promise.resolve()
    },
  }
}