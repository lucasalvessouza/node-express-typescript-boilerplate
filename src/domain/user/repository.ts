import { User } from './model'

/* eslint-disable no-unused-vars */
export default interface UserRepository {
    create(user: User): Promise<any>
    findById(id: string): Promise<any>
    findAll(): Promise<any>
    update(id: string, user: User): Promise<any>
    delete(id: string): Promise<any>
}
