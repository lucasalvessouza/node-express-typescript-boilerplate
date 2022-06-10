import IUserModel from '../interfaces/models/IUserModel'
import IUserRepository from '../interfaces/repositories/IUserRepository'

export default class UserRepository implements IUserRepository {
  findById(id: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  findAll(): Promise<any> {
    throw new Error('Method not implemented.')
  }

  update(id: string, user: IUserModel): Promise<any> {
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async create(user: any): Promise<any> {
    return {}
  }
}
