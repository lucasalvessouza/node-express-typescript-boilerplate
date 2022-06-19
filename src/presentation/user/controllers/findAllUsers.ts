import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import { FindAllUsersUseCase } from '../../../domain/user/useCases/finderAllUsers'


export function findAllUsersController(useCase: FindAllUsersUseCase): Controller {
  return {
    handle: async (request: Request, response: Response): Promise<any> => {
      try {
        const users = await useCase.findAll()
        return response.status(200).json(users)
      } catch (error: any) {
        return response.status(400).json({ error: error.message })
      }
    }
  }
}
