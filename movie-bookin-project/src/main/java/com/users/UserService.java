package com.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

	@Service
	public class UserService {
		
		@Autowired
		UserRepository repo;
		
		public  void register(User user) throws Exception 
		  { 
			 repo.save(user);
		}
		 	
		void updateUser(User user) {
			repo.save(user);
		}
		
		void deleteUser(int userId) {
			repo.deleteById(userId);
		}
		
		
}
	
	
	
	
	
	
	
	
	
	



