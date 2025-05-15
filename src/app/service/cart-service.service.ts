import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartMap: Map<string, CartItem> = new Map();

  private itemCount = new BehaviorSubject<number>(0);
  
  itemCount$ = this.itemCount.asObservable();


  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);


  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

      
  addItem(): void {
    this.itemCount.next(this.itemCount.value + 1);
  }
  

  updateCartSummary(name: string, count: number, price: number): void {

    this.addItem();
    const existing = this.cartMap.get(name);

    if (existing) {
      existing.quantity += count;
    } else {
      this.cartMap.set(name, { name, quantity: count, price });
    }
    console.log("cartmap from cart : "+ this.cartMap)
    this.emitCartUpdate(); 
   
  }

  clearCart(): void {
    this.cartMap = new Map(); // ✅ Correct reassignment
    this.emitCartUpdate();    // Emit the empty cart items
    console.log('Cart has been cleared:', Array.from(this.cartMap.values()));
  }
  
  private emitCartUpdate() {
    this.cartItemsSubject.next(Array.from(this.cartMap.values()));  // Emit the empty cart
  }


  
}
