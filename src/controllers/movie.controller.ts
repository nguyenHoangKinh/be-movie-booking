import Movie from '../models/movie.model';
import { Request, Response } from 'express';

export const getAllMovies = async (req: Request, res: Response) => {
   try {
    const movies = await Movie.find(); // Lấy tất cả phim từ MongoDB
    res.status(200).json(movies);
  } catch {
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch {
    res.status(500).json({ message: 'Failed to create movie'});
  }
};
