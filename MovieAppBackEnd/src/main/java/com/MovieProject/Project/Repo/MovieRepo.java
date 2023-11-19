package com.MovieProject.Project.Repo;

import com.MovieProject.Project.Models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepo extends JpaRepository<Movie,Integer> {

    Optional<Movie> findByTitle(String title);
}
