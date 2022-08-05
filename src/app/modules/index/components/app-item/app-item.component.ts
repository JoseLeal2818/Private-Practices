import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/core/models/api';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss']
})
export class AppItemComponent implements OnInit {

  public items: Array<any> = []

  constructor(
    private APIService: APIService
  ) { 
    this.APIService.getData().subscribe((res:any) => {
      console.log(res);
      this.items = res
    })

  }
  ngOnInit(): void {
  }

}
