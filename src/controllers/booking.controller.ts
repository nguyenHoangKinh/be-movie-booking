// controllers/booking.controller.ts
import { Request, Response } from 'express';
import Booking from '../models/booking.model';
import Ticket from '../models/ticket.model';

export const createBooking = async (req: Request, res: Response) => {
  const { ticketId, quantity } = req.body;
  const userId = req.user.id; // cần middleware auth

  const ticket = await Ticket.findById(ticketId);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
  if (ticket.availableSeats < quantity) {
    return res.status(400).json({ message: 'Not enough seats available' });
  }

  ticket.availableSeats -= quantity;
  await ticket.save();

  const booking = new Booking({
    user: userId,
    ticket: ticketId,
    quantity,
    totalPrice: ticket.price * quantity
  });

  await booking.save();
  res.status(201).json(booking);
};

export const getMyBookings = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const bookings = await Booking.find({ user: userId }).populate('ticket');
  res.json(bookings);
};

export const cancelBooking = async (req: Request, res: Response) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: 'Booking not found' });

  // Trả lại ghế
  const ticket = await Ticket.findById(booking.ticket);
  if (ticket) {
    ticket.availableSeats += booking.quantity;
    await ticket.save();
  }

  booking.status = 'cancelled';
  await booking.save();
  res.json({ message: 'Booking cancelled' });
};
