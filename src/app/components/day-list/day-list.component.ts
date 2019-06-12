import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent, MatDialog, MatDialogConfig, MatTableDataSource} from '@angular/material';
import {User} from "../../domain/user";
import {SnackBarService} from "../../services/snack-bar-service";
import {DayService} from "../../services/day.service";
import {DayModalComponent} from "../day-modal/day-modal.component";
import {Day} from "../../domain/day";
import {ModalConfigurationService} from "../../services/modal-configuration.service";
import {DayHourService} from "../../services/day-hour.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DayHour} from '../../domain/day-hour';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.scss']
})
export class DayListComponent implements OnInit {

  public days = new MatTableDataSource<User>();
  public displayedColumns: string[] = ['description', 'enabled', 'order', 'actions'];
  public isLoading: boolean;
  public dayHours: any[] = new Array();
  public form: FormGroup;
  public selectedDay: Day;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private _dayService: DayService,
              private _dayHourService: DayHourService,
              private dialog: MatDialog,
              private _snakBarService: SnackBarService,
              private _modalConfigurationService: ModalConfigurationService) { }

  ngOnInit() {
    this._getDays();
    this._initHourForm();
  }

  private _initHourForm() {
    this.form = new FormGroup({
      hour: new FormControl('', [<any>Validators.required]),
    });
  }

  public showDayHours(day: Day) {
    this.selectedDay = day;
    this._dayHourService.getDayHours(day.id).subscribe(dayHour => {
      this.dayHours = dayHour;
    });
  }

  public openModal(isNew: boolean, day?: Day) {
    if (isNew) {
      day = new Day();
    }

    const dialogRef = this.dialog.open(DayModalComponent, this._modalConfigurationService.getConfiguration(null, null, day));

    dialogRef.afterClosed().subscribe(result => {
      if (!isNew){
        day = result;
      }
      console.log(result);
    });
  }

  delete(id: number) {
    this.isLoading = true;
    this._dayService.delete(id)
      .then(r => {
        this._snakBarService.openSnackBarSuccess('Deleted!');
      })
      .catch(error => {
        this._snakBarService.openSnackBarError(error);
        this.isLoading = false;
      });
  }

  private _getDays() {
    this.isLoading = true;
    this.days.data = new Array();
    this._dayService.getDays()
      .subscribe(
        v => {
          this.days.data = v;
          console.log(v);
          this.days.connect().next(this.days.data);
          this.isLoading = false;
        }, error => {
          this._snakBarService.openSnackBarError(error);
          this.isLoading = false;
        });
  }

  openModalDayHour(day: Day) {
    this._dayService.getDay(day.id).subscribe(day => this.dayHours = day);
  }

  saveHour() {
    if (this.form.valid) {
      let dayHour: DayHour = this.form.value;
      dayHour.id = new Date().getTime();
      dayHour.dayId = this.selectedDay.id;
      this._dayHourService.save(dayHour)
        .then(r => {
          this._snakBarService.openSnackBarSuccess('Hour added!');
          this._initHourForm();
        })
        .catch(error => this._snakBarService.openSnackBarError(error));
    }
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    console.log(input, value);

    let dayHour = new DayHour();
    dayHour.hour = '00:00';
    dayHour.id = new Date().getTime();
    dayHour.dayId = this.selectedDay.id;
    this._dayHourService.save(dayHour)
      .then(r => {
        this._snakBarService.openSnackBarSuccess('Hour added!');
        this._initHourForm();
      })
      .catch(error => this._snakBarService.openSnackBarError(error));

    // Add our fruit
    /*if ((value || '').trim()) {
      this.dayHours.push({name: value.trim()});
    }*/

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(dayHour: DayHour): void {
    this._dayHourService.delete(dayHour.id)
      .then(r => {
        this._snakBarService.openSnackBarSuccess('Hour deleted!');
        this._initHourForm();
      })
      .catch(error => this._snakBarService.openSnackBarError(error));

    /*const index = this.dayHours.indexOf(dayHour);

    if (index >= 0) {
      this.dayHours.splice(index, 1);
    }*/
  }

}
