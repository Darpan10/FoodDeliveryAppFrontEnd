import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  searchQuery : String ;
  totalCostInCart : number = 0;
  numberOfItemsInCart : number = 0;
  filteredItems: any[] = [];

  

  // MenuItem DTO interface
  menuItems: MenuItemDTO[] = [
    {
      category: 'Food',
      subcategory: 'Main Course',
      item: 'Grilled Chicken',
      costPerItem: 12.99,
      photo: 'assets/chicken.jpg'
    },
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'Lemonade',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    },
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'Lemonade',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    },
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'family combo',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    },
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'Lemonade',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    }
    ,
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'Lemonade',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    }
    
    ,
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'Lemonade',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    }
    
    ,
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'Lemonade',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    }
    
    ,
    {
      category: 'Beverage',
      subcategory: 'Appetizer',
      item: 'Lemonade',
      costPerItem: 3.50,
      photo: 'assets/veg.jpg'
    }
    
    
  ];


  onSearchChange(value: string) {
    this.filteredItems = this.menuItems.filter(e =>
      e.item.toLowerCase().includes(value.toLowerCase())
    );
  }



  

  constructor(private cartServiceService: CartServiceService) { }


  updateCartSummary(itemName: string,itemCount:number ,itemCost: number,): void {
  // your logic to handle price etc.
  console.log("from food list " + itemName,itemCount,itemCost)

  this.cartServiceService.updateCartSummary(itemName,itemCount,itemCost);
}


ngOnInit() {
  this.filteredItems = this.menuItems;
}




}










// DTO interface
interface MenuItemDTO {
  category: string;
  subcategory: string ;
  item: string;
  costPerItem: number;
  photo: string;
}
