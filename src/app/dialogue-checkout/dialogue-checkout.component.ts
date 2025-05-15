import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogue-checkout',
  templateUrl: './dialogue-checkout.component.html',
  styleUrls: ['./dialogue-checkout.component.css']
})
export class DialogueCheckoutComponent {
  formData = {
    username: '',
    address: '',
    mobile: ''
  };

  constructor(private dialogRef: MatDialogRef<DialogueCheckoutComponent>,
    private snackBar: MatSnackBar,
  private router: Router) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    const { username, address, mobile } = this.formData;
  
    // Check if form fields are valid
    if (username && address && mobile.length === 10) {
      console.log('Form Submitted:', this.formData);
      this.dialogRef.close(this.formData);
      
      // Define message and action for snackbar
      const message = 'Your Order Has Been placed - we will reachout to your number in a minute';
      const action = 'Close';

      
      // this.router.navigate(['']);
  
      // Refresh the page after form submission
      setTimeout(() => {
        window.location.reload();
      }, 6000); // 5000ms = 5 seconds
  
     // Show success snackbar
     this.snackBar.open(message, action, {
      duration: 5000, // Snackbar will appear for 2 seconds






    });

    } else {
      console.log('Please complete all fields correctly.');
      
      // Define message and action for error snackbar
      const message = 'Please fill out all required fields correctly.';
      const action = 'Close';
      
      // Show error snackbar
      this.snackBar.open(message, action, {
        duration: 5000, // Snackbar will appear for 2 seconds
      });
    }
  }
  

  
}
