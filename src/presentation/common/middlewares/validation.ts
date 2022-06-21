import { Schema } from 'joi'

type ValidationSchema = {
  body?: Schema
  params?: Schema
  query?: Schema
}

type ErrorSchema = {
  body?: string
  params?: string
  query?: string
}

export const validateRequest = (schema: ValidationSchema) => (req: any, res: any, next: any) => {
  const bodyValidation = schema.body?.validate(req.body, { abortEarly: false })
  const paramsValidation = schema.params?.validate(req.params, { abortEarly: false })
  const queryValidation = schema.query?.validate(req.query, { abortEarly: false })

  let validationErrors: ErrorSchema = {}
  if (bodyValidation?.error) {
    validationErrors = {
      ...validationErrors,
      body: bodyValidation.error.details.map(detail => detail.message).join(',')
    }
  }

  if (paramsValidation?.error) {
    validationErrors = {
      ...validationErrors,
      params: paramsValidation.error.details.map(detail => detail.message).join(',')
    }
  }

  if (queryValidation?.error) {
    validationErrors = {
      ...validationErrors,
      query: queryValidation.error.details.map(detail => detail.message).join(',')
    }
  }
    
  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).send(validationErrors)
  }
  next()
}