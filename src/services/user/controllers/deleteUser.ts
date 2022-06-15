import { Request, Response } from 'express'
import { Controller } from '../../protocols/controller'
import DeleteUserUseCase from '../useCases/deleteUser'

export default class DeleteUserController implements Controller {
  private useCase: DeleteUserUseCase

  constructor(useCase: DeleteUserUseCase) {
    this.useCase = useCase
  }

  async handle(request: Request, response: Response): Promise<any> {
    try {
      await this.useCase.delete(request.params.id)
      return response.status(200).send()
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
