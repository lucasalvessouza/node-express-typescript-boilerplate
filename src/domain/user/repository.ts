import { User, UserWithPassword } from './model'

export default interface UserRepository {
  create: (user: UserWithPassword) => Promise<User>
  findById: (id: string) => Promise<User | undefined>
  findAll: () => Promise<User[]>
  update: (id: string, user: User) => Promise<User>
  delete: (id: string) => Promise<void>
}
