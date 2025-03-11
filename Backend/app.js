import express, { urlencoded } from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/project.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

connect();

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // Allow requests from the frontend
app.use(morgan('dev')); // Log requests to the console
app.use(express.json());
app.use(urlencoded({ extended: true }));    // Parse URL-encoded bodies
app.use(cookieParser());    // Parse cookie data

app.use('/users', userRoutes);  // Add the user routes to the app
app.use('/projects', projectRoutes);  // Add the project routes to the app




app.get('/', (req, res) => { 
    res.send('Hello World');
   });
  

export default app;
