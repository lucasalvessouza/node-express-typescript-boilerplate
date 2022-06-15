import { Request, Response } from 'express'
import { Controller } from '../../protocols/controller'
import FindAllUsersUseCase from '../../../domain/user/useCases/finderAllUsers'

export default class FindAllUsersController implements Controller {
  private useCase: FindAllUsersUseCase

  constructor(useCase: FindAllUsersUseCase) {
    this.useCase = useCase
  }

  async handle(request: Request, response: Response): Promise<any> {
    try {
      const users = await this.useCase.findAll()
      return response.status(200).json(users)
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
