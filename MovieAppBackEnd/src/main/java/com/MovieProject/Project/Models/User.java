package com.MovieProject.Project.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int uid;

    @Column(name = "EmailId" ,nullable= false , unique = true)
    public String uemail;

    @Column(name = "Username",nullable = false)
    public String uname;

    @Column(name = "Password",nullable = false)
    public String upass;

}
