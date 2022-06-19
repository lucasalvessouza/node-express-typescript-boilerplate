import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import FindUserByIdUseCase from '../../../domain/user/useCases/findUserById'


export function findUserByIdController(useCase: FindUserByIdUseCase): Controller {
  return {
    handle: async (request: Request, response: Response): Promise<any> => {
      try {
        const user = await useCase.findById(request.params.id)
        if (!user) {
          return response.status(404).send()
        }
        return response.status(200).json(user)
      } catch (error: any) {
        return response.status(400).json({ error: error.message })
      }
    }
  }
}
