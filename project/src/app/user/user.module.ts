import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';



@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserRegistrationComponent
  ]
})
export class UserModule { }
