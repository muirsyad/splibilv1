import { Routes } from '@angular/router';
import { AfterlandingComponent } from './afterlanding/afterlanding.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { EquallyPageComponent } from './equally-page/equally-page.component';
import { IndividualStaticComponent } from './individual-static/individual-static.component';
import { SplitbilComponent } from './Pages/splitbil/splitbil.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'after', component: AfterlandingComponent },
    { path: 'equally', component: EquallyPageComponent },
    { path: 'split_1', component: IndividualStaticComponent },
    { path: 'splitbil', component: SplitbilComponent },
];
