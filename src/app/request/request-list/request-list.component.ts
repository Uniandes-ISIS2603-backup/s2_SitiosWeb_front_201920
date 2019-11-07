import { Component, OnInit } from '@angular/core';
import { Request } from './request';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  requests : Request[] = [{id:1,name:"Hola"}, {id:2,name:"Chao"}];
}