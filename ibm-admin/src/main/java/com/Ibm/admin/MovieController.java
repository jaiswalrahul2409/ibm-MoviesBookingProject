
package com.Ibm.admin;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class MovieController {

	
	@Autowired
	MovieService movieService;
	
	@RequestMapping("/movies")
	Iterable<Movie> getAllMovie(){
		return movieService.getAllMovies();
	}
	
	@RequestMapping("/movies/{id}")
	Optional<Movie> getMovieById(@PathVariable int id) {
		return movieService.getMovieById(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/movie/create")
	void createMovie(@RequestBody Movie movie) {
		movieService.createMovie(movie);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/movie/update")
	Movie updateMovie(@RequestBody Movie movie) {
		return movieService.updateMovie(movie);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/movie/remove/{id}")
	void removeMovie(@PathVariable Integer id){
		movieService.removeMovie(id);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/movie/s/{name}")
	List<Movie> getMovieLike(@PathVariable String name){
		return movieService.getMovieLike(name);
	}
}
