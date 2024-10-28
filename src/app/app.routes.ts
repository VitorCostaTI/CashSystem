import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '', component: HomeComponent, children: [
            { path: '', component: DashboardComponent }
        ]
    }
];
