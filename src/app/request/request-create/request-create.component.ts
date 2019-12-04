import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { RequestService } from '../request.service';
import { UnitService } from '../../unit/unit.service';
import { Unit } from '../../unit/unit';

@Component({
    selector: 'app-request-create',
    templateUrl: './request-create.component.html',
    styleUrls: ['./request-create.component.css']
  })
export class RequestCreateComponent implements OnInit {
    

    constructor(private requestService:RequestService, private unitService:UnitService, private toastr:ToastrService, private formBuilder:FormBuilder) {
        
    }

    units:Unit[];
    
    getUnits():void{
       this.unitService.getUnits().subscribe(u=>this.units = u); 
    }
    ngOnInit(): void {
        this.getUnits();
    }

    
}