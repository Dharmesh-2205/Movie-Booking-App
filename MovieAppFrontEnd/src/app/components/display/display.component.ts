import { Component,OnInit } from '@angular/core';
import { details } from 'src/app/class/details';
import { User } from 'src/app/class/user';
// import { TheatreService } from 'src/app/service/theatre.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  
  currentDetails?:details
  CurrentUser?:User;
  constructor() {}

  ngOnInit(): void {
    const storedData=localStorage.getItem("Current_Data")
    // console.log(storedData)
    if(storedData){
      this.currentDetails = JSON.parse(storedData)
    }
    // console.log(this.currentDetails);

    const getLoginUser = localStorage.getItem("currentUser")
    if(getLoginUser){
      this.CurrentUser = getLoginUser?JSON.parse(getLoginUser):null;
    }
    // console.log(this.CurrentUser);
  }

  
}
