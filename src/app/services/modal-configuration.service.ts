import { Injectable } from '@angular/core';
import {MatDialogConfig} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class ModalConfigurationService {

  constructor() { }

  getConfiguration(width?: string, height?: string, data?: any): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    if (width) dialogConfig.width = width;
    if (height) dialogConfig.height = height;
    dialogConfig.data = data;

    return dialogConfig;
  }
}
