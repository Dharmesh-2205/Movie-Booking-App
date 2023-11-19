package com.MovieProject.Project.Service;

import com.MovieProject.Project.Models.City;
import com.MovieProject.Project.Repo.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {
    @Autowired
    CityRepo cityRepo;

    public List<City> getCity() {
        return cityRepo.findAll();
    }

    public List<City> addCity(List<City> city) {
        return cityRepo.saveAll(city);
    }

    public List<City> findByState(String state) {
        return cityRepo.findAllByState(state);
    }

    public List<City> findByCity(String city) {
        return cityRepo.findAllByCityname(city);
    }

//    public String deletebyState(List<City> state) {
//        cityRepo.deleteAllByState(state);
//        return "Success";
//    }

    public String deletebyId(Integer id) {
        cityRepo.deleteById(id);
        return "Successfully Deleted";
    }
}
