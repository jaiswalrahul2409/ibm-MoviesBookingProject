package com.users;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
@RestController
@CrossOrigin(origins = "*" ,allowedHeaders = "*")
public class UserController {
	
	@Autowired
	UserService service;
	
	@Autowired
	UserRepository repo;
	
	@Autowired
	private MailService mailService;
	
	static int otp1=generateOTP();
	@RequestMapping(method=RequestMethod.POST, value="/register/users")
	public Integer register(@RequestBody User user) throws Exception
	{
		
			mailService.send(user.getEmail(), "Movie Booking!!", "Your OTP is "+otp1);
			service.register(user);
			return otp1;
	}
		
	/*
	 * @RequestMapping(method = RequestMethod.POST, value = "/register/users") void
	 * register(@RequestBody User user) throws Exception { service.register(user);;
	 * System.out.println("successfully created your account with id"+user.getUserId
	 * ()); }
	 */
	
	
	private static int generateOTP() {
		int otp=(int)(Math.random()*1000000);
		return otp;
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/users/{id}")
	void updateUser(@RequestBody User user) {
		service.updateUser(user);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/users/{id}")
	void deleteUser(@PathVariable int id) {
		service.deleteUser(id);
		
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/login")
	public User login(@RequestBody User user)
	{
		return repo.findByEmail(user.email);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/validate/{otp}")
	public String validateOtp(@PathVariable int otp)
	{
		if(otp==otp1)
		{
			System.out.println("otp is valid");
			return "entered otp is valid";
			
		}
		else
		{
			System.out.println("otp is Invalid");
			return "entered otp is not valid";
		}
		}
	}
	

