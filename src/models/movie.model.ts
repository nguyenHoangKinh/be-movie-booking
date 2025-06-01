import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number }, // phút
  releaseDate: { type: Date, required: true },
  image: { type: String }, // URL của hình ảnh
});

export default mongoose.model('Movie', movieSchema);
