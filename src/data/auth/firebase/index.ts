import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import AuthRepository from '../../../domain/auth/repository'

export default class AuthFirebaseRepository implements AuthRepository {

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const {
        user: { stsTokenManager: { accessToken } }
    } = await signInWithEmailAndPassword(getAuth(), email, password) as unknown as any

    return {
        accessToken
    }
  }
}
