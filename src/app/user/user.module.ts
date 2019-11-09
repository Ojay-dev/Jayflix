import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from '../routes';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    {
      provide: 'canDeactivateProfile',
      useValue: checkDirtyState
    }
  ]
})
export class UserModule { }

export function checkDirtyState(component:ProfileComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved, do you really want to cancel?')
  }
  return true;
}
