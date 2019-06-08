import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../domain/user';
import {SnackBarService} from "../../services/snack-bar-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public data: any;
  public user: User;
  public form: FormGroup;

  constructor(private _snakBarService: SnackBarService,
              private dialogRef: MatDialogRef<UserEditComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private _db: AngularFireDatabase) {
    this.user = data;

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

      console.log(this.form.value);
      this.user = this.form.value;
      this._db.database.ref('users/2').set(this.user)
        .then(r => {
          this._snakBarService.openSnackBarSuccess('Saved!', 'X');
          this.dialogRef.close(this.user);
        })
        .catch(r => this._snakBarService.openSnackBarError(r, 'X'));
    }
  }

}
