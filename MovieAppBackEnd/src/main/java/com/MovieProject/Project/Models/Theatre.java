package com.MovieProject.Project.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Theatre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer theatreid;

    @Column(name = "theatrename")
    public String theatreName;

//    @Column(name = "totalscreens")
//    public Integer totalScreens;

    @Column(name = "TheatreImage")
    public String theatreImage;

    @Column(name = "TheatreCity")
    public String theatreCity;
}
