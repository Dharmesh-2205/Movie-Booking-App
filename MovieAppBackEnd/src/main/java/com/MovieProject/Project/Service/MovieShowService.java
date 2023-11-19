package com.MovieProject.Project.Service;

import com.MovieProject.Project.Models.MovieShow;
import com.MovieProject.Project.Repo.MovieShowRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieShowService {
    @Autowired
    MovieShowRepo movieShowRepo;

//    public List<MovieShow> getMovieshow() {
//        return movieShowRepo.findAll();
//    }
}
