/* eslint-disable no-unused-vars */
import IUserModel from '../models/IUserModel'

export default interface IUserRepository {
    create(user: IUserModel): Promise<any>
    findById(id: string): Promise<any>
    findAll(): Promise<any>
    update(id: string, user: IUserModel): Promise<any>
    delete(id: string): Promise<any>
}
