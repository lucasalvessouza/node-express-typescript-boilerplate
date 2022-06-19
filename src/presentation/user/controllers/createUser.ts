import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import { CreateUserUseCase } from '../../../domain/user/useCases/createUser'

export function createUserController(useCase: CreateUserUseCase): Controller {
  return {
    handle: async (request: Request, response: Response): Promise<any> => {
      try {
        await useCase.create(request.body)
        return response.status(201).json()
      } catch (error: any) {
        return response.status(400).json({ error: error.message })
      }
    }
  }
}