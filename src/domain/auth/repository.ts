import { Login } from "./model"

export default interface AuthRepository {
  login: (email: string, password: string) => Promise<Login>
  sendPasswordResetEmail: (email: string) => Promise<void>
}
