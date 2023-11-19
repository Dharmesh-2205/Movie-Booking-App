package com.MovieProject.Project.Controller;

import com.MovieProject.Project.Models.MovieShow;
import com.MovieProject.Project.Service.MovieShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/movieshow")
public class MovieShowController {
    @Autowired
    MovieShowService movieShowService;
//    @GetMapping
//    public List<MovieShow> getMovieshow(){
//        return movieShowService.getMovieshow();
//    }

//    @PostMapping("/addshow")
//    List<MovieShow> addMovieShow(@RequestBody List<ShowData> showdata)
//    {
//        return showservice.addShow(showdata);
//    }

}
