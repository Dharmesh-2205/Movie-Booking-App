package com.MovieProject.Project.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "MovieShow")
public class MovieShow {
    @Id
    @Column(name="ShowId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    Integer showId;

    @Temporal(TemporalType.DATE)
    Date date;

    @Column(name = "starttime")
    @Temporal(TemporalType.TIME)
    Date startTime;

    Double price;

    @OneToOne
    @JoinColumn(name= "screenid" ,referencedColumnName = "screenid")
    Screen screen;

    @ManyToOne
    @JoinColumn(name= "movieid" ,referencedColumnName = "movieid")
    Movie movie;

}
