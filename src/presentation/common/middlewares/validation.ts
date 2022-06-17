import { Schema } from 'joi'


export const validateRequest = (schema: Schema) => (req: any, res: any, next: any) => {
  const { error } = schema.validate(req.body, { abortEarly: false })
    
  if (error) {
    const { details } = error
    const message = details.map(i => i.message).join(',')
    return res.status(400).send({
      error: message
    })
  }
  next()
}