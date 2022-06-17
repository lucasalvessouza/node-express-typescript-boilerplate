import Joi from 'joi'

class AuthControllerValidation {
  public static login() {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })

    return ''
  }
}

export default AuthControllerValidation
