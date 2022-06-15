import { Request, Response } from 'express'
import { Controller } from '../../protocols/controller'
import CreateUserUseCase from '../../../domain/user/useCases/createUser'

export default class CreateUserController implements Controller {
  private useCase: CreateUserUseCase

  constructor(useCase: CreateUserUseCase) {
    this.useCase = useCase
  }

  async handle(request: Request, response: Response): Promise<any> {
    try {
      await this.useCase.create(request.body)
      return response.status(201).json()
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
