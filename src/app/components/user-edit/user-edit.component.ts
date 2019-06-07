import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../domain/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public data: any;
  public user: User;

  constructor(private dialogRef: MatDialogRef<UserEditComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.user = data;
  }

  ngOnInit() {
    console.log(this.user);
  }

  closeModal(){
    this.dialogRef.close();
  }

}
