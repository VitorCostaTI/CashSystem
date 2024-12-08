import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  matSnackBarHorizontal: MatSnackBarHorizontalPosition = 'center';
  matSnackBarVertical: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private readonly snackBar: MatSnackBar
  ) { }

  snackBarSuccess(msg: string, action: string) {
    this.snackBar.open(msg, action, {
      duration: 1500,
      horizontalPosition: this.matSnackBarHorizontal,
      verticalPosition: this.matSnackBarVertical,
      panelClass: ['snackSuccess']
    })
  }

  snackBarFailed(msg: string, action: string) {
    this.snackBar.open(msg, action, {
      duration: 1500,
      horizontalPosition: this.matSnackBarHorizontal,
      verticalPosition: this.matSnackBarVertical,
      panelClass: ['snackFailed']
    })
  }
}
