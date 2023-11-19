package com.MovieProject.Project.Service;

import com.MovieProject.Project.Models.Screen;
import com.MovieProject.Project.Repo.ScreenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ScreenService {

    @Autowired
    ScreenRepo screenRepo;

    public List<Screen> getScreenDetails() {
        return screenRepo.findAll();
    }

    public String addScreenDetails(List<Screen> screens) {
        screenRepo.saveAll(screens);
        return "Added successfully";
    }

    public String deleteById(Integer id) {
        screenRepo.deleteById(id);
        return "Deleted Successfully";
    }
}
