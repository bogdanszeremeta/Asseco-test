import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Observable, switchMap} from "rxjs";
import {ProductDetailInfo} from "../../interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  error: string = ''
  loading!: boolean

  productDetail?: ProductDetailInfo


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
  }


  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          const id = params['id']
          return this.dataService.getDataById(id)
        })
      )
      .subscribe((product: any) => {
        this.productDetail = product
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


