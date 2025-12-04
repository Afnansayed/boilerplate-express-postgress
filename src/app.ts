import express, { Request, Response } from 'express';
import initDB from './config/db';
import { userRoutes } from './modules/user/user.routes';

const app = express();

// parser middleware
app.use(express.json());

// initialize database
initDB();

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running ...');
});

//user
app.use('/users', userRoutes);

// handle 404 errors
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
  });
});

export default app;
