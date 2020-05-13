package com.Ibm.admin;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserService {

	@Autowired
	UserRepository repo;

	public Iterable<User> getAllUsers() {
		return repo.findAll();
	}
	
	public User createUser(User user) {
		return repo.save(user);
	}
	
	public User updateUser(User users){
		return repo.save(users);
	}
	
	public void removeUser(Integer id) {
		repo.deleteById(id);
	}
	
	public List<User> getUserById(Integer id) {
		return repo.findByUserId(id);
	}
	
	public List<User> getUserByEmail(String email) {
		return repo.findByEmail(email);
	}

	public List<User> getUserByName(String firstName) {
		
		return repo.findByFirstName(firstName);
	}

	

}
