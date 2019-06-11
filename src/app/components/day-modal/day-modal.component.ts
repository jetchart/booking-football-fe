import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SnackBarService} from "../../services/snack-bar-service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AngularFireDatabase} from "@angular/fire/database";
import {Day} from "../../domain/day";
import {DayService} from "../../services/day.service";

@Component({
  selector: 'app-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.scss']
})
export class DayModalComponent implements OnInit {

  public data: any;
  public day: Day;
  public form: FormGroup;
  private _id: number;

  constructor(private _snakBarService: SnackBarService,
              private dialogRef: MatDialogRef<DayModalComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private _db: AngularFireDatabase,
              private _dayService: DayService) {
    this.day = data;
    if (this.day){
      this._id = this.day.id;
    }

    this.form = new FormGroup({
      description: new FormControl(this.day.description, [<any>Validators.required]),
      enabled: new FormControl(this.day.enabled, [<any>Validators.required]),
      order: new FormControl(this.day.order, [<any>Validators.required]),
    });

  }

  ngOnInit() {
    console.log(this.day);
  }

  closeModal() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.valid) {
      this.day = this.form.value;
      this.day.id = this._id ? this._id : new Date().getTime();
      this._dayService.save(this.day)
        .then(r => {
          this._snakBarService.openSnackBarSuccess('Saved!');
          this.dialogRef.close(this.day);
        })
        .catch(error => this._snakBarService.openSnackBarError(error));
    }
  }

}
