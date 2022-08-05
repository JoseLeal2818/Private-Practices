import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.scss']
})
export class PheaderComponent implements OnInit {

  [x: string]: any;

  // MENU OR NAVEGATION
  items: MenuItem[];
  visibleSidebar2;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Apps',
        items: [
          {
            label: 'Create Market',
            url: 'home/manual'
          },
          {
            label: 'Ops Center',
            url: 'home/manual'
          },
          {
            label: 'EDI',
            url: 'home/manual'
          },
          {
            label: 'Create Marker Lite',
            url: 'home/manual'
          },
          {
            label: 'Online Docs',
            url: 'home/manual'
          },
          {
            label: 'Pack on Site',
            url: 'home/manual'
          },
          {
            label: 'Cycle Count',
            url: 'home/manual'
          },
          { label: 'Aplication' },
        ]
      },
      {
        label: 'Categories',
        items: [
          {
            label: 'Sales',
            url: 'home/categories'
          },
        ]
      },
      {
        label: 'Site map',
        url: 'siteMap',
      },
      {
        label: 'Support',
        url: 'support',
      },
      {
        label: 'Sing In',
        url: 'auth'
      }
    ];

  }

}
