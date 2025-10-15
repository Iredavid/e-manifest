import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'states',
    children:[
      {
        path: '',
        loadComponent: () => import('./states/states.page').then( m => m.StatesPage),
      },
      {
        path: 'garages/:id',
        loadComponent: () => import('./garages/garages.page').then( m => m.GaragesPage)
      }
    ]
  },
  {
    path: 'buses',
    loadComponent: () => import('./buses/buses.page').then( m => m.BusesPage)
  },
];
