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
public class UserController {

	@Autowired
	UserService userService;
	
	@RequestMapping("/users")
	Iterable<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/user/id/{id}")
	List<User> getUserById(@PathVariable Integer id) {
		return userService.getUserById(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/users/create")
	void createUsers(@RequestBody User user) {
		userService.createUser(user);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/users/update")
	User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/users/remove/{id}")
	void removeUser(@PathVariable Integer id){
		userService.removeUser(id);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/user/{email}")
	List<User> getUserByEmail(@PathVariable String email) {
		return userService.getUserByEmail(email);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/user/name/{name}")
	List<User> getUserByName(@PathVariable String name) {
		return userService.getUserByName(name);
	}
	
}