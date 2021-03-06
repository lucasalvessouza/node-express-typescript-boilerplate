import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import userRouter from './presentation/user/routes'
import makeFirebaseSetupFactory from './infra/firebase'
import authRouter from './presentation/auth/routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

makeFirebaseSetupFactory()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/healthy_check', (req: Request, res: Response) => {
  res.send()
})

app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
