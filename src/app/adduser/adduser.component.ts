import { Component, OnInit } from '@angular/core';
import { APIServiceService } from "../apiservice.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private api : APIServiceService) { }

  ngOnInit() {
  }
name; email; address; phone; company;
}
