import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    '/assets/biryani.jpg',
    '/assets/burger.jpg'  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
