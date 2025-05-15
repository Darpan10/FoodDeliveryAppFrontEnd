import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselComponent } from './carousel/carousel.component';
import { BaseMenuComponent } from './base-menu/base-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { TabViewModule } from 'primeng/tabview';
import { FoodListComponent } from './food-list/food-list.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogueCheckoutComponent } from './dialogue-checkout/dialogue-checkout.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

 


// Import MatDialogModule

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    CarouselComponent,
    BaseMenuComponent,
    AboutUsComponent,
    ContactUsComponent,
    TabViewComponent,
    FoodListComponent,
    CartComponent,
    DialogueCheckoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    CarouselModule,
    RadioButtonModule,
    GalleriaModule,
    MatCardModule,
    TabViewModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule, // Import MatDialogModule here
    ReactiveFormsModule, // Import ReactiveFormsModule for the checkout form
    FormsModule,
    MatDialogModule ,
    MatSnackBarModule   // <-- PrimeNG Dialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
