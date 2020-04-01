import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InputComponent } from '../input/input.component';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'chuchito'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
