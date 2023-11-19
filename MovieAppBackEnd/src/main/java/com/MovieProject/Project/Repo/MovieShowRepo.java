package com.MovieProject.Project.Repo;

import com.MovieProject.Project.Models.MovieShow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieShowRepo extends JpaRepository<MovieShow,Integer> {

}
