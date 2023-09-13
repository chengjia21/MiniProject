
import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import { Wines } from '../models/wines.model';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  private dataSvc = inject(DataService);

  // dataSvc ?: DataService;
  sub !: Subscription;

  allWinesList!: Wines[];
  everyWine: any;


  ngOnInit() {
    this.getAllWines();
    // this.getEveryWine();
  }


  // getAllWines() {

  //   // console.log(this.loginForm.value);
  //   this.dataSvc?.getAllProducts()
  //     // responseData => (responseData as any).orderID

  //     .subscribe(responseData => this.allWinesList = (responseData as any).wine_id);
  //   // this.?.postLoginData(this.loginForm.value).subscribe(responseData => console.log(responseData));
  //   // responseData.orderID to show data from Java ResponseEntity in Controller
  //   // responseData => (responseData as any).orderID
  //   console.log(this.allWinesList);
  //   // this.loginForm.reset();

  // }



  getAllWines() {

    this.sub = this.dataSvc.getAllProducts()

      .subscribe(result => {
        this.allWinesList = result;
        console.log(this.allWinesList);
      }
      );

  }



  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // console.log(this.loginForm.value);
  // responseData => (responseData as any).orderID

  // this.?.postLoginData(this.loginForm.value).subscribe(responseData => console.log(responseData));
  // responseData.orderID to show data from Java ResponseEntity in Controller
  // responseData => (responseData as any).orderID

  // this.loginForm.reset();


  // getEveryWine() {
  //   this.everyWine = this.dataSvc?.getAllProducts().subscribe();

  // }











}
