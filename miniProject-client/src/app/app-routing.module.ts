import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { StoreCatalogComponent } from './store-catalog/store-catalog.component';
import { AboutComponent } from './about/about.component';
import { WineEncyclopediaComponent } from './wine-encyclopedia/wine-encyclopedia.component';

const routes: Routes = [

  { path: 'productcatalog', component: ProductCatalogComponent },

  { path: 'about', component: AboutComponent },

  { path: 'encyclopedia', component: WineEncyclopediaComponent },
  { path: '**', component: StoreCatalogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
