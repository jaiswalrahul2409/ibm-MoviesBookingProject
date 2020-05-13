package com.Ibm.admin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TheatreService {

	
	@Autowired
	TheatreRepository repo;

	public Iterable<Theatre> getAllTheatres() {
		return repo.findAll();
	}
	
	public Theatre createTheatre(Theatre theatre) {
		return repo.save(theatre);
	}
	
	public Theatre updateTheatre(Theatre theatres){
		return repo.save(theatres);
	}
	
	public void removeTheatre(Integer id) {
		repo.deleteById(id);
	}
	
	public Optional<Theatre> getTheatreById(Integer id) {
		return repo.findById(id);
	}

}
