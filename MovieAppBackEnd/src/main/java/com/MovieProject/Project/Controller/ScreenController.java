package com.MovieProject.Project.Controller;

import com.MovieProject.Project.Models.Screen;
import com.MovieProject.Project.Service.ScreenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/screen")
public class ScreenController {
    @Autowired
    ScreenService screenService;
    @GetMapping()
    public ResponseEntity<List<Screen>> getScreenDetails(){
        return new ResponseEntity<List<Screen>>(screenService.getScreenDetails(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<String> addScreenDetails(@RequestBody List<Screen> screens){
        return new ResponseEntity<String>(screenService.addScreenDetails(screens),HttpStatus.CREATED);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer id){
        return new ResponseEntity<String>(screenService.deleteById(id),HttpStatus.OK);
    }


}
