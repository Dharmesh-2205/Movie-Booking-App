package com.MovieProject.Project.Repo;

import com.MovieProject.Project.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    User findByUemail(String email);
    User findByUemailAndUpass(String email, String pass);
    
}

