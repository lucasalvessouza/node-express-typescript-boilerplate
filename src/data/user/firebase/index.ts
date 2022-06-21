import { getAuth as getAuthAdmin } from 'firebase-admin/auth'

import { User } from '../../../domain/user/model'
import UserRepository from '../../../domain/user/repository'

export function userFirebaseRepository(): UserRepository {
  return {
    findById: async (id: string): Promise<User | undefined> => {
      try {
        const user = await getAuthAdmin().getUser(id)
        return {
          id: user.uid,
          email: user.email || '',
          name: user.displayName || '',
        }
      } catch (error: any) {
        if (error?.code === 'auth/user-not-found') {
          return undefined
        }
        return error
      }
    },

    findAll: async (): Promise<User[]> => {
      const users = await getAuthAdmin().listUsers()
      return users.users.map((user) => ({
        id: user.uid,
        email: user.email || '',
        name: user.displayName || '',
      }))
    },
  
    update: async (id: string, user: User): Promise<User>  => {
      const userUpdated = await getAuthAdmin().updateUser(id, {
        ...user,
        displayName: user.name,
      })
      return {
        id: userUpdated.uid,
        email: userUpdated.email || '',
        name: userUpdated.displayName || '',
      }
    },
  
    delete: async (id: string): Promise<void> => {
      await getAuthAdmin().deleteUser(id)
    },
  
    create: async (user: User): Promise<any> => {
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
}
