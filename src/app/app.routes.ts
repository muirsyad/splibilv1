import { Routes } from '@angular/router';
import { AfterlandingComponent } from './afterlanding/afterlanding.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'after', component: AfterlandingComponent },
];
