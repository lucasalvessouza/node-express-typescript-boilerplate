import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const userCreateSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required()
})

export const userUpdateSchema = Joi.object({
  email: Joi.string().email().optional(),
  name: Joi.string().optional()
})
