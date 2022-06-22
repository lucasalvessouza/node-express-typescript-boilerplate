import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const loginBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

export const resetPasswordEmail = Joi.object({
  email: Joi.string().email().required()
})