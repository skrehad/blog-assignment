import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

// application route
app.use('/api/', router);

// Test route
const test = async (req: Request, res: Response) => {
  const a = 10; // Example data
  res.status(200).send({ value: a }); // Respond with a valid status and data
};

app.get('/', test);

// Error handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
