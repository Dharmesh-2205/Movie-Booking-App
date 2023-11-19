package com.MovieProject.Project.Controller;

import com.MovieProject.Project.Models.User;
import com.MovieProject.Project.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping
    public ResponseEntity<List<User>> getDetails(){
        return new ResponseEntity<List<User>>(userService.getDetails(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<User>> addDetails(@RequestBody List<User> users){
        return new ResponseEntity<List<User>>(userService.addDetails(users), HttpStatus.OK);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deletebyId(@PathVariable Integer id){
        return new ResponseEntity<String>(userService.deletebyId(id),HttpStatus.OK);
    }
    @GetMapping("get/{id}")
    public ResponseEntity<Optional<User>> getbyId(@PathVariable Integer id){
        return new ResponseEntity<Optional<User>>(userService.getbyId(id),HttpStatus.OK);
    }
    @PutMapping("edit/{id}")
    public ResponseEntity<User> updDetails(@PathVariable Integer id,@RequestBody User user){
        return new ResponseEntity<User>(userService.updDetails(id,user),HttpStatus.OK);
    }
//
    @PostMapping("registeruser")
    public User userReg( @RequestBody User user) throws Exception {
        String tempEmail = user.getUemail();
        if (tempEmail!=null && !"".equals(tempEmail)){
            User user1 = userService.getByEmail(tempEmail);
            if (user1!=null){
                throw new Exception("Email "+tempEmail+" already exists.");
            }
        }
        User user1 = null;
        user1 = userService.saveUser(user);
        return user1;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("loginuser")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmail = user.getUemail();
        String tempPass = user.getUpass();
        User user2 = null;
        if (tempEmail != null && tempPass != null){
            user2 = userService.loginUser(tempEmail,tempPass);
        }

        if (user2 == null){
            throw new Exception("User not found.Please Signup");
        }
        return user2;
    }
}
