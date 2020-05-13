package com.Ibm.admin;

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
public class TheatreController {

	@Autowired
	TheatreService service;
	
	@RequestMapping("/theatres")
	Iterable<Theatre> getAllTheatres(){
		return service.getAllTheatres();
	}
	
	@RequestMapping("/theatre/{id}")
	Optional<Theatre> getTheatreById(@PathVariable int id) {
		return service.getTheatreById(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/theatres/create")
	void createTheatres(@RequestBody Theatre theatre) {
		service.createTheatre(theatre);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/theatres/update")
	Theatre updateTheatre(@RequestBody Theatre theatre) {
		return service.updateTheatre(theatre);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/theatres/remove/{id}")
	void removeTheatre(@PathVariable Integer id){
		service.removeTheatre(id);
	}
	
	
}
