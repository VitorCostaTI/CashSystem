import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  visibility: boolean = false;

  visibilityTrue() {
    this.visibility = true;
  }
  visibility_off() {
    this.visibility = false;
  }
}
