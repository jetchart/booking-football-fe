import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBarSuccess(message: string, duration?: number) {
    this._openSnackBar(message, 'success-snackbar', duration);
  }

  openSnackBarError(message: string, duration?: number) {
    this._openSnackBar(message, 'error-snackbar', duration);
  }

  openSnackBarWarning(message: string, duration?: number) {
    this._openSnackBar(message, 'warning-snackbar', duration);
  }

  private _openSnackBar(message: string, clazz: string, duration?: number) {
    let config = new MatSnackBarConfig();
    if (duration) {
      config.duration = duration;
    }
    config.panelClass = [clazz];
    this._snackBar.open(message, 'X', config);
  }

}
