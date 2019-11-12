import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getUnits();
  }

requests: Request[];

getUnits(): void {
        this.requestService.getRequests().subscribe(requests => this.requests = requests);
    }
}