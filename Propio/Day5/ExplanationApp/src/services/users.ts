import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export interface User{
    id: number,
    name: string,
    birthDate: Date,
    sex: string,
    phone: number,
    email: string
}

@Injectable()
export class UsersService{
    
    private readonly usersEndpoint = 'http://localhost:3000/users';

    constructor(private http: HttpClient){

    }

    getUsers(id: number){
        return this.http.get(`${this.usersEndpoint}/${id}`) as Observable<User>;

       /*return this.http.get(`${this.usersEndpoint}/${id}`)
       .map((user: User) =>{
           delete user.id;
           user.sex = user.sex == 'male' ? 'M' : 'F';
           return user;
       });*/
    }
}