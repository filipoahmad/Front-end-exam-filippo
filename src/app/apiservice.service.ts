import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class APIServiceService {

  UserList : object[] = [];

  constructor(private http:Http){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      result => {
        console.log(result.json());
        result.json().forEach(u => {
          var data = { "id" : u.id, "name" : u.name, "email" : u.email, "address" : { "street" : u.address}, "phone" : u.phone, "company" : { "name" : u.company.name} };
          this.UserList.push(data);
        });
        console.log(this.UserList);
      },
      error => {
        console.log(error);
      }
    );
  }
 AddUser(nama,email,address,phone,company) : void {
    var id = this.UserList[this.UserList.length-1]["id"]+1;
    var userInput = { "id" : id, "name" : nama, "email" : email, "address" : { "street" : address}, "phone" : phone, "company" : { "name" : company} };
    this.UserList.push(userInput);
    console.log(this.UserList);
  }

  Remove(id) : void {
    for (var i = 0; i < this.UserList.length; i++) {
      if (this.UserList[i]["id"] == id) {
        this.UserList.splice(i, 1);
        break;
      }
    }
    console.log(this.UserList);
  }

}
