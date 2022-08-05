import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  constructor(
   
  ) { 
    

  }

  ngOnInit(): void {
  }

  // getAllTasks(){
  //  this.APIService.getAllTasks().subscribe(apis => {
  //   console.log(apis);
  //  })
  // }
  // getTask(){
  //  this.APIService.getTasks('1').subscribe(api => {
  //   console.log(api)
  //  })
  // }
  // createTask(){
  //  this.APIService.getTasks('1').subscribe(api => {
  //   console.log(api)
  //  })
  // }

}
