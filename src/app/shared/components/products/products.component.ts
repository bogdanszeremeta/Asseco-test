import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ProductInfo} from "../../interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data: ProductInfo[] = []
  loading!: boolean
  error: string = ''
  toggle: boolean = false

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.dataService.downloadData()
      .subscribe(response => {
        this.data = response
        this.loading = false
      }, error => {
        this.error = error.message
      })
  }

  goToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
