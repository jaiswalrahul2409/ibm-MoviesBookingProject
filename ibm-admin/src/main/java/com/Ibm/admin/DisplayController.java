package com.Ibm.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DisplayController {
	
	@Autowired
	MovieService movieService;
	
	@Autowired
	TheatreService theatreService;
	
	@RequestMapping("/display/movies")
	Iterable<Movie> getAllMovie(){
		return movieService.getAllMovies();
	}
	
	@RequestMapping("/display/theatres")
	Iterable<Theatre> getAllTheatres(){
		return theatreService.getAllTheatres();
	}
	
	

}
