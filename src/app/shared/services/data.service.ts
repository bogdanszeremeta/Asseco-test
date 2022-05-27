import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {ProductDetailInfo, ProductInfo} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  downloadData(): Observable<ProductInfo[]> {
    return this.http.get<ProductInfo[]>(`${environment.fbDbUrl}`)
      .pipe(
        catchError(error => {
          return throwError(error)
        }))
  }

  getDataById(id: string): Observable<ProductDetailInfo> {
    return this.http.get<ProductDetailInfo>(`${environment.fbDbUrl}${id}`)
      .pipe(
        catchError(error => {
          return throwError(error)
        }))
  }
}
