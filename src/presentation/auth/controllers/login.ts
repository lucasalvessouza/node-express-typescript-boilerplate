import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import { LoginUseCase } from '../../../domain/auth/useCases/login'


export function loginController(useCase: LoginUseCase): Controller {
  return {
    handle: async (request: Request, response: Response): Promise<any> => {
      try {
        const token = await useCase.login(request.body.email, request.body.password)
        return response.status(201).json(token)
      } catch (error: any) {
        return response.status(400).json({ error: error.message })
      }
    }
  }
}