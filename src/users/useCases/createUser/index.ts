/* eslint-disable import/prefer-default-export */
import UserRepository from '../../repositories/UserRepository'
import CreateUserController from './CreateUserController'

const userRepo = new UserRepository()
const createUserController = new CreateUserController(userRepo)

export { createUserController }
