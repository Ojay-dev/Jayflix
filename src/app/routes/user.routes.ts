import { Routes } from '@angular/router';
import { ProfileComponent } from '../user'

export const userRoutes:Routes = [
  {path: 'profile', component: ProfileComponent, canDeactivate: ['canDeactivateProfile']}
]
