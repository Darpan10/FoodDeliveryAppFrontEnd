import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartServiceService, CartItem } from '../service/cart-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogueCheckoutComponent } from '../dialogue-checkout/dialogue-checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(
    private cartService: CartServiceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalAmount = this.getTotal();
      console.log('Updated Cart Items:', this.cartItems); // Log the updated cart items
    });
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }
 
 // Function to open the checkout dialog
 openCheckoutDialog(): void {
  const dialogRef = this.dialog.open(DialogueCheckoutComponent, {
    width: '400px',    // You can adjust the width or add other configurations
    disableClose: true // Prevent closing by clicking outside
  });

  // Handle the dialog close event
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Checkout data received:', result);
      // Process the result here (e.g., send it to a service or backend)
    }
  });
}
 
}
