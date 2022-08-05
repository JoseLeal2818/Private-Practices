import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/core/models/api';
import { Product } from 'src/app/core/models/product';
import { APIService } from 'src/app/core/services/api.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-release-notes',
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss']
})
export class ReleaseNotesComponent implements OnInit {

  products: Product[];
  first = 0;
  rows = 10;

  cols: any[];

  // public items: Array<any> = []

  constructor(
    private APIService: APIService,
    private productS: ProductService) {
    // this.APIService.getData().subscribe((res: any) => {
    //   console.log(res);
    //   this.items = res
    // })
  }

  ngOnInit(): void {
    this.productS.getProductsSmall().then(data => this.products = data);

    this.cols = [
      { field: 'name', header: 'Title' },
      { field: 'category', header: 'Category/App' },
      { field: 'inventoryStatus', header: 'Author' },
      { field: 'code', header: 'Date created' },
      { field: 'rating', header: 'Lenguage' },
    ];
  }

}
