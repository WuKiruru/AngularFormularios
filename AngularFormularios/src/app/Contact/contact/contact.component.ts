import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, CheckboxControlValueAccessor, FormControl, FormGroup, Validators} from '@angular/forms';
import { userService } from 'src/app/servicios/userServices';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{

  value = 0;

  nombre: FormControl = new FormControl('', Validators.required);
  email:FormControl = new FormControl('', [Validators.email, Validators.required]);
  subject:FormControl = new FormControl('', Validators.required);
  description:FormControl = new FormControl('');
  order:FormControl = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]); 

  FormOne: FormGroup = new FormGroup ({
    nombre: this.nombre,
    email: this.email,
    subject: this.subject,
    description: this.description,
    order: this.order
  });

  constructor(private userServices : userService){}

  ngOnInit() {}

  Click() {
    this.userServices.sendInformation(this.nombre.value,this.email.value, this.subject.value, this.description.value, this.order.value);
    if (this.nombre.value != "" && this.email.value != "" && this.subject.value != "" && this.order.value != "") {
      this.value=100;
    }
    if (this.nombre.value == "" || this.email.value == "" || this.subject.value == "" || this.order.value == "") {
      this.value=50;
    }
  }
}

export interface User {
  nombre:string;
  email:string;
  subject:string;
  description:string;
  order:string;
}