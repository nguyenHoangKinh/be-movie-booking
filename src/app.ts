import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import movieRouter from './routes/movie.route';
import authRoutes from './routes/auth.route';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
//
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('🎬 Movie Booking API');
});
app.use('/api/movies', movieRouter);

export default app;
