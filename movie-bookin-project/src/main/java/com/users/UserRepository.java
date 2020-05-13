package com.users;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



	@Repository("userRepository")
	public interface UserRepository extends CrudRepository<User, Integer> {
		
		
		//List<User> findByUserName(String userName);
		//Optional<User> findByEmail(String email);
		
		//User findByEmailAndPassword(String email,String password);
		
		User findByEmail(String email);

		Optional<User> findByEmailAndPassword(String email, String password);
}
