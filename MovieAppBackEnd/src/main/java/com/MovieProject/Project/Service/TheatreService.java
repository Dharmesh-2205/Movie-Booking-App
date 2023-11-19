package com.MovieProject.Project.Service;

import com.MovieProject.Project.Models.Theatre;
import com.MovieProject.Project.Repo.TheatreRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TheatreService {
    @Autowired
    TheatreRepo theatreRepo;
    public List<Theatre> getTheatre(){
        return theatreRepo.findAll();
    }

    public List<Theatre> addTheatre(List<Theatre> th) {
        return theatreRepo.saveAll(th);
    }

    public Optional<Theatre> getTheatreById(Integer id) {
        return theatreRepo.findById(id);
    }

    public Optional<List<Theatre>> getTheatreByCity(String city) {
        return theatreRepo.findAllByTheatreCity(city);
    }
}

