import { Request, Response } from 'express'
import { Controller } from '../../interfaces/controller'
import LoginUseCase from '../../../domain/auth/useCases/login'

export default class LoginController implements Controller {
  private useCase: LoginUseCase

  constructor(useCase: LoginUseCase) {
    this.useCase = useCase
  }

  async handle(request: Request, response: Response): Promise<any> {
    try {
      const token = await this.useCase.login(request.body.email, request.body.password)
      return response.status(201).json(token)
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
