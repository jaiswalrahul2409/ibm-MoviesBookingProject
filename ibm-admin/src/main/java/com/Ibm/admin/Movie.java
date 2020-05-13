package com.Ibm.admin;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Movie {

	@Id
	Integer movieId;
	String name;
	Float ratings;
	String description;
	String cast;
	String genre;
	String language;
	Float duration;
	Integer moviePrice;
	String bannerPath;
	
	public String getBannerPath() {
		return bannerPath;
	}
	public void setBannerPath(String bannerPath) {
		this.bannerPath = bannerPath;
	}
	public String getPosterPath() {
		return posterPath;
	}
	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}
	String posterPath;
	
	public Integer getMovieId() {
		return movieId;
	}
	public void setMovieId(Integer movieId) {
		this.movieId = movieId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Float getRatings() {
		return ratings;
	}
	public void setRatings(Float ratings) {
		this.ratings = ratings;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCast() {
		return cast;
	}
	public void setCast(String cast) {
		this.cast = cast;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public Float getDuration() {
		return duration;
	}
	public void setDuration(Float duration) {
		this.duration = duration;
	}
	public Integer getMoviePrice() {
		return moviePrice;
	}
	public void setMoviePrice(Integer moviePrice) {
		this.moviePrice = moviePrice;
	}

}

