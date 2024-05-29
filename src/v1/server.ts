import { createServer } from 'http'
import app from './app'

const httpServer = createServer(app)
