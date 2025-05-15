import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FoodListComponent } from '../food-list/food-list.component';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit, AfterViewInit {

  

  cartItemNumbers: number = 0;
  // currentRoute: string = '';

  constructor( private cartServiceService: CartServiceService , 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartServiceService.itemCount$.subscribe(count => {
      this.cartItemNumbers = count;
    });
  }
  
  navigateToCart()
  {
    this.router.navigate(['/cart']); 
  }

  navigateToHomePage()
  {
    this.router.navigate(['']);
  }

  ngAfterViewInit(): void {
  
  }
}
