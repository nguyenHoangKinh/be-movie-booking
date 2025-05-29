// routes/ticket.routes.ts
import { Router } from 'express';
import { getAllTickets, getTicketById } from '../controllers/ticket.controller';

const router = Router();
router.get('/', getAllTickets);
router.get('/:id', getTicketById);
export default router;
