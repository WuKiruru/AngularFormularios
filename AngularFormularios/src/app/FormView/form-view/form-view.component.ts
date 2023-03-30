import { Component } from '@angular/core';
import { userService } from '../../servicios/userServices';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})

export class FormViewComponent {
  user:User[] = [ ];
  userNombre: any = "";
  userEmail: any = "";
  userSubject: any = "";
  userDescription: any = "";
  userOrder: any = "";

  constructor (private usersService:userService) {}

  ngOnInit():void {
    this.usersService.sendInformation(this.userNombre, this.userEmail, this.userSubject, this.userDescription, this.userOrder).subscribe((user:User[]) => {
      this.user = user;
    }); 
  }
}

export interface User {
  nombre:string;
  email:string;
  subject:string;
  description:string;
  order:string;
}