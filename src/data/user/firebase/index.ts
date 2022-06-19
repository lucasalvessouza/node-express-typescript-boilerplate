import { getAuth as getAuthAdmin } from 'firebase-admin/auth'

import { User } from '../../../domain/user/model'
import UserRepository from '../../../domain/user/repository'

export default class UserFirebaseRepository implements UserRepository {
  async findById(id: string): Promise<any> {
    try {
      const user = await getAuthAdmin().getUser(id)
      return {
        id: user.uid,
        email: user.email || '',
        name: user.displayName || '',
      }
    } catch (error: any) {
      if (error?.code === 'auth/user-not-found') {
        return null
      }
      return error
    }
  }

  async findAll(): Promise<User[]> {
    const users = await getAuthAdmin().listUsers()
    return users.users.map((user) => ({
      id: user.uid,
      email: user.email || '',
      name: user.displayName || '',
    }))
  }

  async update(id: string, user: User): Promise<any> {
    const userUpdated = await getAuthAdmin().updateUser(id, {
      ...user,
      displayName: user.name,
    })
    return userUpdated
  }

  async delete(id: string): Promise<void> {
    await getAuthAdmin().deleteUser(id)
  }

  async create(user: User): Promise<any> {
    const userCreated = await getAuthAdmin().createUser({
      displayName: user.name,
      email: user.email,
      password: user.password,
      emailVerified: false,
      disabled: false,
    })
    return userCreated
  }
}
