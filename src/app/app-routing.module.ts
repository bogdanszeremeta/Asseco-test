import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {DetailComponent} from "./shared/components/detail/detail.component";
import {ProductsComponent} from "./shared/components/products/products.component";
import {ErrorComponent} from "./shared/components/error/error.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: ProductsComponent},
      {path: 'detail/:id', component: DetailComponent},
      {path: 'error', component: ErrorComponent},
      {path: '**', redirectTo: '/error'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
