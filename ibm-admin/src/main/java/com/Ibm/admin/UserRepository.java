package com.Ibm.admin;


import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
	
	List<User> findByEmail(String email);

	List<User> findByUserId(Integer userId);
	
	List<User> findByFirstName(String firstName);
	
}
