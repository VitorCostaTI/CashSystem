import { Component } from '@angular/core';
import { SharedModule } from '../../../Shared/shared.module';

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
