import Movie from '../models/movie.model';
import { Request, Response } from 'express';

export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const createMovie = async (req: Request, res: Response) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
};
