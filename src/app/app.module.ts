import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {FormsModule} from "@angular/forms";
import {DetailComponent} from './shared/components/detail/detail.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from './shared/components/products/products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UpDirective} from './shared/directives/up.directive';
import {ErrorComponent} from './shared/components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DetailComponent,
    ProductsComponent,
    UpDirective,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
