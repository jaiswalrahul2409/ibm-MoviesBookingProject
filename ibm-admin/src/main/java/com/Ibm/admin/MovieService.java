package com.Ibm.admin;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

	
	@Autowired
	MovieRepository repo;
	
	public Iterable<Movie> getAllMovies() {
		return repo.findAll();
	}
	
	public Movie createMovie(Movie movie) {
		return repo.save(movie);
	}
	
	public Movie updateMovie(Movie movies){
		return repo.save(movies);
	}
	
	public void removeMovie(Integer id) {
		repo.deleteById(id);
	}
	
	public Optional<Movie> getMovieById(Integer id) {
		return repo.findById(id);
	}
	
	public List<Movie> getMovieLike(String name) {
		return repo.findByNameContaining(name);
	}
}
