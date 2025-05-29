// routes/booking.routes.ts
import { Router } from 'express';
import { createBooking, getMyBookings, cancelBooking } from '../controllers/booking.controller';
import { authenticate } from '../middlewares/auth';

const router = Router();
router.post('/', authenticate, createBooking);
router.get('/me', authenticate, getMyBookings);
router.delete('/:id', authenticate, cancelBooking);
export default router;
