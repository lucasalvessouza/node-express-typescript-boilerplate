import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/healthy_check', (req: Request, res: Response) => {
  res.send()
})

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
