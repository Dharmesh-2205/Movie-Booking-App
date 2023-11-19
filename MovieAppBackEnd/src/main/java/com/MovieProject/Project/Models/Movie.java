package com.MovieProject.Project.Models;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Data
public class Movie {
    @Id
    @Column(name = "movieid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer movieId;

    @Column(name = "title", length = 100, nullable = false)
    String title;

    @Column(name = "description", length = 800, nullable = false)
    String description;

    @Column(name = "Duration")
    String duration;

    @Column(length = 50)
    String language;

    @Column(length = 200)
    String type;

    @Column(length = 500)
    String image;


    Double rating;

    @Column(length = 300)
    String trailer;
}
