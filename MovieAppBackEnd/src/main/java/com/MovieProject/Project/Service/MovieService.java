package com.MovieProject.Project.Service;

import com.MovieProject.Project.Models.Movie;
import com.MovieProject.Project.Repo.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    MovieRepo movieRepo;
    public List<Movie> getMovies(){
        return movieRepo.findAll();
    }

    public List<Movie> addMovies(List<Movie> movies) {
        return movieRepo.saveAll(movies);
    }

    public Optional<Movie> getmovieById(Integer id) {
        return movieRepo.findById(id);
    }

    public String deletebyMovieId(Integer id) {
        movieRepo.deleteById(id);
        return "Sucessfully Deleted";
    }

    public Optional<Movie> searchMovieByName(String title) {
        return movieRepo.findByTitle(title);
    }
}
