import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import movieRouter from './routes/movie.route';
import authRoutes from './routes/auth.route';
import ticketRoutes from './routes/ticket.routes';
import bookingRoutes from './routes/booking.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
//
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRouter);
app.use('/api/tickets', ticketRoutes);
app.use('/api/bookings', bookingRoutes);

export default app;
