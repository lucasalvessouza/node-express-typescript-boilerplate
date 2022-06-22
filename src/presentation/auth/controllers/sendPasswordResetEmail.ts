import { Request, Response } from 'express'
import { Controller } from '../../common/interfaces/controller'
import { LoginUseCase } from '../../../domain/auth/useCases/login'


export function sendPasswordResetEmail(useCase: LoginUseCase): Controller {
  return {
    handle: async (request: Request, response: Response): Promise<any> => {
      try {
        await useCase.sendPasswordResetEmail(request.body.email)
        return response.status(200).send()
      } catch (error: any) {
        return response.status(400).json({ error: error.message })
      }
    }
  }
}