import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../domain/user';
import {SnackBarService} from "../../services/snack-bar-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireDatabase} from "@angular/fire/database";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public data: any;
  public user: User;
  public form: FormGroup;
  private _id: number;

  constructor(private _snakBarService: SnackBarService,
              private dialogRef: MatDialogRef<UserEditComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private _db: AngularFireDatabase,
              private _userService: UserService) {
    this.user = data;
    if (this.user){
      this._id = this.user.id;
    }

    this.form = new FormGroup({
      email: new FormControl(this.user.email, [<any>Validators.required, <any>Validators.email]),
      surname: new FormControl(this.user.surname, [<any>Validators.required]),
      name: new FormControl(this.user.name, [<any>Validators.required]),
      birthday: new FormControl(this.user.birthday, [<any>Validators.required]),
    });

  }

  ngOnInit() {
    console.log(this.user);
  }

  closeModal() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.valid) {
      this.user = this.form.value;
      this.user.id = this._id ? this._id : new Date().getTime();
      this._userService.save(this.user)
        .then(r => {
          this._snakBarService.openSnackBarSuccess('Saved!', 'X');
          this.dialogRef.close(this.user);
        })
        .catch(r => this._snakBarService.openSnackBarError(r, 'X'));
    }
  }

}
