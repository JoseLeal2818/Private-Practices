import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  [x: string]: any;

  items: MenuItem[];
  visibleSidebar2;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Documents',
        items: [
          {
            label: 'User manuals',
            url: 'dashboard/userManuals'
          },
          {
            label: 'Release notes',
            url: 'dashboard/releaseNotes'
          },
          {
            label: 'Chapters',
            //url: 'home/manual'
          },
          {
            label: 'Rearrange',
            //url: 'home/manual'
          },
          {
            label: 'Articles',
            url: 'dashboard/articles'
          },
          {
            label: 'Announcements',
            //url: 'home/manual'
          },
          {
            label: 'Rollback',
            //url: 'home/manual'
          },
          { 
            label: 'Copies',
            //url: 'home/manual' 
          },
          { 
            label: 'Erasers',
            //url: 'home/manual' 
          },
        ]
      },
      {
        label: 'Catalogs',
        items: [
          {
            label: 'Categories',
            //url: 'home/categories'
          },
          {
            label: 'Lenguages',
            //url: 'home/categories'
          },
          {
            label: 'Document types',
            //url: 'home/categories'
          },
          {
            label: 'Parameters',
            //url: 'home/categories'
          },
        ]
      },
      {
        label: 'Feedback',
        //url: 'siteMap',
      },
      {
        label: 'Media',
        //url: 'support',
      },

    ];

  }

  

}
