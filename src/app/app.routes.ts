import { Routes } from '@angular/router';
import { AfterlandingComponent } from './afterlanding/afterlanding.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { EquallyPageComponent } from './equally-page/equally-page.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'after', component: AfterlandingComponent },
    { path: 'equally', component: EquallyPageComponent },
];
