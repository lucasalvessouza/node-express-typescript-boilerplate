
export type User = {
  id: string
  name: string
  email: string
  role: UserRole
}

export type UserToUpdate = {
  id: string
  name: string
  email: string
}

export type UserWithPassword = User & {
  password?: string
}

export enum UserRole {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  OPERADOR  = 'operador'
}