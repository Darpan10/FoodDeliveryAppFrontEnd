import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {
  tabs: { title: string, content: string }[] = [];

  item : String = '';
  constructor(private router: Router) { }

  ngOnInit() {
      this.tabs = [
          { title: 'Discount', content: 'Tab 1 Content' },
          { title: 'Combo'   , content: 'Tab 2 Content' }
      ];
  }

  imagesCombo: string[] = [
    '/assets/biryani.jpg',
    '/assets/chicken.jpg' ,
    '/assets/veg.jpg' ,
    '/assets/burger.jpg' 
  ];

  imagesOffer: string[] = [
    '/assets/biryani.jpg',
    '/assets/biryani.jpg',
    '/assets/biryani.jpg',
    '/assets/biryani.jpg'
  ];

  tabHeaderStyleCombo : any = {
    'font-family': 'Poppins',
    'font-size': '2rem',
    'font-weight': '600',
     'color': '#FF5722',
    'text-align': 'center',
    'letter-spacing': '1.5px',
    'text-transform': 'uppercase'
  };


  tabHeaderStyleOffer = {
    'font-family': 'Poppins',
    'font-size': '2rem',
    'font-weight': '600',
     'color': '#FF5722',
    'text-align': 'center',
    'letter-spacing': '1.5px',
    'text-transform': 'uppercase'
  };
  
  navigateToComboDetail(item : String)
  {
   this.router.navigate(['/foodList']);
  }
  navigateToOfferDetail(item : String)
  {
    this.router.navigate(['/foodList']);
  }

}
