import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import rootRouter from './routes/rootRouter';
import cors from "cors"

dotenv.config();
const app: Express = express();
app.use(express.json())
const port = 2323;
app.use(cors());

app.use('/api/v1', rootRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app