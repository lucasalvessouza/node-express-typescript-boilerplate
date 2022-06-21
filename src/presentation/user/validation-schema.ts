import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'
import { UserRole } from '../../domain/user/model'

export const userCreateBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  role: Joi.string().valid(...Object.values(UserRole))
})

export const userUpdateBodySchema = Joi.object({
  email: Joi.string().email().optional(),
  name: Joi.string().optional()
})

export const userUpdateParamsSchema = Joi.object({
  id: Joi.string().required()
})

export const userDeleteSchema = Joi.object({
  id: Joi.string().required()
})

export const userFindByIdParamsSchema = Joi.object({
  id: Joi.string().required()
})