package com.MovieProject.Project.Controller;

import com.MovieProject.Project.Models.Theatre;
import com.MovieProject.Project.Service.TheatreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("api/theatre")
public class TheatreController {
    @Autowired
    TheatreService theatreService;

    @GetMapping
    public ResponseEntity<List<Theatre>> getTheatre() {
        return new ResponseEntity<List<Theatre>>(theatreService.getTheatre(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<Theatre>> addTheatre(@RequestBody List<Theatre> th) {
        return new ResponseEntity<List<Theatre>>(theatreService.addTheatre(th), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Theatre>> getTheatreById(@PathVariable Integer id) {
        return new ResponseEntity<Optional<Theatre>>(theatreService.getTheatreById(id), HttpStatus.OK);
    }

    @GetMapping("theatrecity/{city}")
    public ResponseEntity<Optional<List<Theatre>>> getTheatreByCity(@PathVariable String city){
        return new ResponseEntity<Optional<List<Theatre>>>(theatreService.getTheatreByCity(city),HttpStatus.OK);
    }


}
