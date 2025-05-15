import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-menu',
  templateUrl: './base-menu.component.html',
  styleUrls: ['./base-menu.component.css']
})
export class BaseMenuComponent implements OnInit {

  images: string[] = [
    '/assets/biryani.jpg',
    '/assets/burger.jpg'  
  ];

  constructor(private router: Router) {
   }

   navigateToFoodList(){
    this.router.navigate(['/foodList']);
   }

  ngOnInit(): void {
  }

}
