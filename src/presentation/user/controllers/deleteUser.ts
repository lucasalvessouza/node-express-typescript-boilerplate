import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import { DeleteUserUseCase } from '../../../domain/user/useCases/deleteUser'


export function deleteUserController(useCase: DeleteUserUseCase): Controller {
  return {
    handle: async (request: Request, response: Response): Promise<any> => {
      try {
        await useCase.delete(request.params.id)
        return response.status(200).send()
      } catch (error: any) {
        return response.status(400).json({ error: error.message })
      }
    }
  }
}
