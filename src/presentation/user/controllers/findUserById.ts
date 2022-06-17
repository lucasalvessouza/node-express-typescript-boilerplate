import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import FindUserByIdUseCase from '../../../domain/user/useCases/findUserById'

export default class FindUserByIdController implements Controller {
  private useCase: FindUserByIdUseCase

  constructor(useCase: FindUserByIdUseCase) {
    this.useCase = useCase
  }

  async handle(request: Request, response: Response): Promise<any> {
    try {
      const user = await this.useCase.findById(request.params.id)
      if (!user) {
        return response.status(404).send()
      }
      return response.status(200).json(user)
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
