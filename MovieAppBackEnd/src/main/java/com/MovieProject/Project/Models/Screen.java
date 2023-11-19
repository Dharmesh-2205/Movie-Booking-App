package com.MovieProject.Project.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Screen")
public class Screen {
    @Id
    @Column(name="ScreenId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer screenId;

    @Column(name = "screenname")
    String screenName;

    @Column(name="totalnoofseats")
    Integer totalNoOfSeats;

    @Column(name = "seattype")
    String seatType;
}
