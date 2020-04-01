import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action);
  }

  openSnackBarWithSubscribe(message, action) {
    const snackBarRef = this.snackBar.open(message, action, {duration: 2000});
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    });
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(InputComponent, {duration: 2000});
  }
}

