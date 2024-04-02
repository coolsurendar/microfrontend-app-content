import { Routes } from '@angular/router';
import {PackageListComponent} from './package-list/package-list.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'packages',
    component: PackageListComponent
  },

];
