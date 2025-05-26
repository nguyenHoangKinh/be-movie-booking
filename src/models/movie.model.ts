import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: Number,
  releaseDate: Date,
});

export default mongoose.model('Movie', movieSchema);
