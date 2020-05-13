package com.Ibm.admin;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheatreRepository extends CrudRepository<Theatre, Integer> {

}
