import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreCatalogComponent } from './store-catalog/store-catalog.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { WineEncyclopediaComponent } from './wine-encyclopedia/wine-encyclopedia.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoreCatalogComponent,
    LoginPageComponent,
    HeaderBarComponent,
    ProductCatalogComponent,
    AboutComponent,
    WineEncyclopediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
