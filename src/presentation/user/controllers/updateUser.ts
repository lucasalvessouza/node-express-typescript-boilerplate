import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import { UpdateUserUseCase } from '../../../domain/user/useCases/updateUser'


export function updateUserController(useCase: UpdateUserUseCase): Controller {
  return {
    handle: async (request: Request, response: Response): Promise<any> => {
      try {
        await useCase.update(request.params.id, request.body)
        return response.status(204).json()
      } catch (error: any) {
        return response.status(400).json({ error: error.message })
      }
    }
  }
}
