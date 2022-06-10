/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'

export default interface IBaseController {
  execute(req: Request, res: Response, next: NextFunction): Promise<void | any>
}
