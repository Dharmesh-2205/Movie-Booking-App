package com.MovieProject.Project.Repo;

import com.MovieProject.Project.Models.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CityRepo extends JpaRepository<City,Integer> {
    public City findByState(String state);

    List<City> findAllByState(String state);

    List<City> findAllByCityname(String city);

//    String deleteAllByState(List<City> state);

//    public List<City> findAllByState(List<String> state);
}
