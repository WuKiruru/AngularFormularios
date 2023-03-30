import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class userService {
    constructor(){}
    users:User[] = [ ];

    public sendInformation(nombre:string, email:string, subject:string, description:string, order:string):Observable<User[]>{
        if(nombre != "" && email != "" && subject != "" && order != ""){
            this.users.push({nombre:nombre, email:email, subject:subject, description:description, order:order});
        }
        return of(this.users);
    }



}

export interface User {
  nombre:string;
  email:string;
  subject:string;
  description:string;
  order:string;
}