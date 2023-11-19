package com.MovieProject.Project.Controller;

import com.MovieProject.Project.Models.Movie;
import com.MovieProject.Project.Service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/movie")
public class MovieController {
    @Autowired
    MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getMovies(){
        return new ResponseEntity<>(movieService.getMovies(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<List<Movie>> addMovies(@RequestBody List<Movie> movies){
        return new ResponseEntity<List<Movie>>(movieService.addMovies(movies),HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<Optional<Movie>> getmovieById(@PathVariable Integer id){
        return new ResponseEntity<Optional<Movie>>(movieService.getmovieById(id),HttpStatus.OK);
    }
    @DeleteMapping("deletemovie/{id}")
    public ResponseEntity<String> deletebyMovieId(@PathVariable Integer id){
        return new ResponseEntity<String>(movieService.deletebyMovieId(id),HttpStatus.OK);
    }
    @GetMapping("searchmovie/{title}")
    public ResponseEntity<Optional<Movie>> searchMovieByName(@PathVariable String title){
        return new ResponseEntity<Optional<Movie>>(movieService.searchMovieByName(title),HttpStatus.OK);
    }

}
