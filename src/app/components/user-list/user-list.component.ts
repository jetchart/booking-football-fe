import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../domain/user';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {SnackBarService} from '../../services/snack-bar-service';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: User[];
  public displayedColumns: string[] = ['username', 'name', 'surname', 'actions'];

    constructor(private _userService: UserService,
                private dialog: MatDialog) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

  public openModal(isNew: boolean, user?: User) {
    if (isNew){
     user = new User();
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = '800px';
    //dialogConfig.height = '600px';
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!isNew){
        user = result;
      }
      console.log(result);
    });

  }




}
