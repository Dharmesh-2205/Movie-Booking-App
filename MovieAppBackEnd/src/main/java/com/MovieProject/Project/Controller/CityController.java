package com.MovieProject.Project.Controller;

import com.MovieProject.Project.Models.City;
import com.MovieProject.Project.Service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/city")
public class CityController {
    @Autowired
    CityService cityService;

    @GetMapping
    public ResponseEntity<List<City>> getCity() {
        return new ResponseEntity<List<City>>(cityService.getCity(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<City>> addTheatre(@RequestBody List<City> city) {
        return new ResponseEntity<List<City>>(cityService.addCity(city), HttpStatus.CREATED);
    }

    @GetMapping("state/{state}")
    public List<City> findByState(@PathVariable String state){
        return cityService.findByState(state);
    }
    @GetMapping("{city}")
    public List<City> findByCity(@PathVariable String city){
        return cityService.findByCity(city);
    }

    @DeleteMapping("deletebyid/{id}")
    public String deletebyId(@PathVariable Integer id){
        return cityService.deletebyId(id);
    }

}
