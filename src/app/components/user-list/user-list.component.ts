import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../domain/user';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig, MatTableDataSource} from '@angular/material';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {SnackBarService} from '../../services/snack-bar-service';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users = new MatTableDataSource<User>();
  public displayedColumns: string[] = ['username', 'name', 'surname', 'birthday', 'actions'];
  public isLoading: boolean;

    constructor(private _userService: UserService,
                private dialog: MatDialog,
                private _snakBarService: SnackBarService) { }

  ngOnInit() {
    this._getUsers();
  }

  public openModal(isNew: boolean, user?: User) {
    if (isNew) {
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
      this._getUsers();
    });
  }

  delete(id: number) {
    this.isLoading = true;
      this._userService.delete(id)
        .then(r => {
          this._getUsers();
          this._snakBarService.openSnackBarSuccess('Deleted!', 'X');
        })
        .catch(r => {
          this._snakBarService.openSnackBarError(r, 'X');
          this.isLoading = false;
        });
  }

  private _getUsers() {
    this.isLoading = true;
    this.users.data = new Array();
    this._userService.getUsers()
      .then(v => {
        v.forEach(i => {
          let user = (<User>i.toJSON());
          this.users.data.push(user);
          console.log(this.users.data);
          this.users.connect().next(this.users.data);
          this.isLoading = false;
        });
      })
      .catch(r => {
        this._snakBarService.openSnackBarError(r, 'X');
        this.isLoading = false;
      });
  }

}
