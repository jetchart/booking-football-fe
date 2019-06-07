import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBarSuccess(message: string, action: string, duration?: number) {
    this._openSnackBar(message, action, 'success-snackbar', duration);
  }

  openSnackBarError(message: string, action: string, duration?: number) {
    this._openSnackBar(message, action, 'error-snackbar', duration);
  }

  openSnackBarWarning(message: string, action: string, duration?: number) {
    this._openSnackBar(message, action, 'warning-snackbar', duration);
  }

  private _openSnackBar(message: string, action: string, clazz: string, duration?: number) {
    let config = new MatSnackBarConfig();
    if (duration) {
      config.duration = duration;
    }
    config.panelClass = [clazz];
    this._snackBar.open(message, action, config);
  }

}
