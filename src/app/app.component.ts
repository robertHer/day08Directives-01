import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  IsHidden = false;
  clicked:boolean;
  logClick = [];


  onSelect(){
    this.IsHidden =!this.IsHidden;
    // if(this.clicked){
    //   this.clicked = false; 
    // }else{
    //   this.clicked = true;
    // }
    console.log(this.IsHidden);
  }

  
}