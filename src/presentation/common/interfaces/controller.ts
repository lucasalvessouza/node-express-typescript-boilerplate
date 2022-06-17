/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'

export interface Controller {
    handle(request: Request, response: Response, next: NextFunction): Promise<any>
}
