import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { RequestService } from '../request.service';
import { UnitService } from '../../unit/unit.service';
import { Unit } from '../../unit/unit';
import { DatePipe } from '@angular/common';
import {Request} from '../request'
import { RequestDetail } from '../request-detail';

import {RequesterService} from '../../requester/requester.service';
import { Requester } from 'src/app/requester/requester';
@Component({
    selector: 'app-request-create',
    templateUrl: './request-create.component.html',
    styleUrls: ['./request-create.component.css'],
    providers:[DatePipe]
  })
export class RequestCreateComponent implements OnInit {
    
    units:Unit[];
    
    requestForm:FormGroup;

    request:RequestDetail;

    constructor(private requestService:RequestService, private unitService:UnitService, private toastr:ToastrService, private formBuilder:FormBuilder, private requesterService:RequesterService) {
        this.requestForm  = this.formBuilder.group({
            name:["",[Validators.required, Validators.minLength(2)]],
            purpose:["", Validators.required],
            description:["",Validators.required],
            unit:["", Validators.required],
            budget:["", Validators.required],
            beginDate:["",Validators.required],
            dueDate:["", Validators.required],
            endDate:["",Validators.required]});
    }


    createRequest(newRequest: RequestDetail) {
      this.requesterService.getRequesterDetail(localStorage.getItem('id')).subscribe(p => {
        newRequest.requester = p;
      }, err => {
        this.toastr.error(err, 'Error')
      });
        // Process checkout data here
        newRequest.status = 'Pending';
    //    newProject.hw = this.project.hw;
        newRequest
        console.warn("el request fue creado", newRequest);
        this.requestService.createRequest(newRequest).subscribe(p => {
          this.showSuccess();
        }, err => {
                    this.toastr.error(err, 'Error')});
      //  this.providerService.getProvider(newProject.provider.id).subscribe(p => {p.projects.push(newProject)});
        this.requestForm.reset();
   }
  showSuccess() {
    this.toastr.success("Request", "Successfully created!", {"progressBar": true,timeOut:3000});
  }


    getUnits():void{
       this.unitService.getUnits().subscribe(u=>this.units = u); 
    }
    ngOnInit(): void {
        this.request = new RequestDetail();
        this.getUnits();
    }

    requestType: string[] = ['ELIMINATION','CREATION','CHANGE','DEVELOPMENT','PRODUCTION'];

    webCategory: string[] = ['DESCRIPTIVE','APPLICATION','EVENT'];

    statues: string[] = ['DEVELOPMENT','PRODUCTION','ACCEPTED','PENDING','DENIED'];


}