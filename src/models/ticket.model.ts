// models/ticket.model.ts
import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true }, // ví dụ: "Xe SG → Đà Lạt"
  description: String,
  price: { type: Number, required: true },
  departureTime: { type: Date, required: true },
  availableSeats: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('Ticket', ticketSchema);
