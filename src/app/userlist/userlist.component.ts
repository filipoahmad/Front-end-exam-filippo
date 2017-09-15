import { Component, OnInit } from '@angular/core';
import { APIServiceService } from "../apiservice.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserList implements OnInit {

  constructor(private api : APIServiceService) { }

  ngOnInit() {
  }

}

