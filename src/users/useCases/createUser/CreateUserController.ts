import { Request, Response } from 'express'

import IBaseController from '../../../common/interfaces/controllers/IBaseController'
import IUserRepository from '../../interfaces/repositories/IUserRepository'

export default class CreateUserController implements IBaseController {
  private userRepository: IUserRepository

  constructor(userRepository: any) {
    this.userRepository = userRepository
  }

  async execute(req: Request, res: Response): Promise<any> {
    const user = await this.userRepository.create(req.body)

    return res.status(201).json(user)
  }
}
