package com.Ibm.admin;

import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Theatre {

	@Id
	Integer theatreId;
	String name;
	String map;
	Integer noOfSeatsInScreen1;
	Integer noOfSeatsInScreen2;
	Time timings;
	Integer movie1Id;
	Integer movie2Id;
	String city;
	Integer theatrePrice;
	public Integer getTheatreId() {
		return theatreId;
	}
	public void setTheatreId(Integer theatreId) {
		this.theatreId = theatreId;
	}
	public Integer getNoOfSeatsInScreen1() {
		return noOfSeatsInScreen1;
	}
	public void setNoOfSeatsInScreen1(Integer noOfSeatsInScreen1) {
		this.noOfSeatsInScreen1 = noOfSeatsInScreen1;
	}
	public Integer getNoOfSeatsInScreen2() {
		return noOfSeatsInScreen2;
	}
	public void setNoOfSeatsInScreen2(Integer noOfSeatsInScreen2) {
		this.noOfSeatsInScreen2 = noOfSeatsInScreen2;
	}
	public Time getTimings() {
		return timings;
	}
	public void setTimings(Time timings) {
		this.timings = timings;
	}
	public Integer getMovie1Id() {
		return movie1Id;
	}
	public void setMovie1Id(Integer movie1Id) {
		this.movie1Id = movie1Id;
	}
	public Integer getMovie2Id() {
		return movie2Id;
	}
	public void setMovie2Id(Integer movie2Id) {
		this.movie2Id = movie2Id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Integer getTheatrePrice() {
		return theatrePrice;
	}
	public void setTheatrePrice(Integer theatrePrice) {
		this.theatrePrice = theatrePrice;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMap() {
		return map;
	}
	public void setMap(String map) {
		this.map = map;
	}



}
