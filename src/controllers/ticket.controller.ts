// controllers/ticket.controller.ts
import { Request, Response } from 'express';
import Ticket from '../models/ticket.model';

export const getAllTickets = async (req: Request, res: Response) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

export const getTicketById = async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
  res.json(ticket);
};
