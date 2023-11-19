package com.MovieProject.Project.Repo;

import com.MovieProject.Project.Models.Theatre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TheatreRepo extends JpaRepository<Theatre,Integer> {

    Optional<List<Theatre>> findAllByTheatreCity(String city);
}
