import { Request, Response } from 'express'
import { Controller } from '../../protocols/controller'
import UpdateUserUseCase from '../useCases/updateUser'

export default class UpdateUserController implements Controller {
  private useCase: UpdateUserUseCase

  constructor(useCase: UpdateUserUseCase) {
    this.useCase = useCase
  }

  async handle(request: Request, response: Response): Promise<any> {
    try {
      await this.useCase.update(request.params.id, request.body)
      return response.status(204).json()
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
