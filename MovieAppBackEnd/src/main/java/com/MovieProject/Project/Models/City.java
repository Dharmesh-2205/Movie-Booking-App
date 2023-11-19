package com.MovieProject.Project.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Cities")
public class City
{

//    @Transient
//    static String staticCity="";
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer cityId;

    @Column(name = "Pin Code")
    public Integer zipcode;

    @Column(name="cityname")
    public String cityname;

    @Column(name = "State")
    public String state;
}

