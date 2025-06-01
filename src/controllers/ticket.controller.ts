// controllers/ticket.controller.ts
import { Request, Response } from 'express';
import Ticket from '../models/ticket.model';

export const getAllTickets = async (req: Request, res: Response) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

export const getTicketById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // giả sử bạn lấy từ DB
    const ticket = { id, name: 'Test Ticket' };
    res.status(200).json(ticket);
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

