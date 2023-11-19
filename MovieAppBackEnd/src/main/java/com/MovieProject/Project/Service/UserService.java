package com.MovieProject.Project.Service;

import com.MovieProject.Project.Models.User;
import com.MovieProject.Project.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepo  userRepo;
    public List<User> getDetails(){
        return userRepo.findAll();
    }

    public List<User> addDetails(List<User> users){
        return userRepo.saveAll(users);
    }

    public User updDetails(Integer id,User user){
        User u = userRepo.findById(id).get();
        u.setUemail(user.getUemail());
        u.setUpass(user.getUpass());
        u.setUname(user.getUname());
        return userRepo.save(u);
    }


    public User saveUser(User user) {
        return userRepo.save(user);
    }
    public User getByEmail(String email){
        return userRepo.findByUemail(email);
    }
    public String deletebyId(Integer id) {
        userRepo.deleteById(id);
        return "Success";
    }

    public User loginUser(String email,String pass) {
        return userRepo.findByUemailAndUpass(email,pass);
    }

    public Optional<User> getbyId(Integer id) {
        return userRepo.findById(id);
    }
}
