package com.MovieProject.Project.Repo;

import com.MovieProject.Project.Models.Screen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScreenRepo extends JpaRepository<Screen,Integer> {

}
