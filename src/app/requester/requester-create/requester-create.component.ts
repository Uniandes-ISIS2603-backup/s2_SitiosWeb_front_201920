import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import {RequesterService} from '../requester.service';
import {Requester} from '../requester';
import {UnitService} from '../../unit/unit.service';
import {Unit} from '../../unit/unit';
import {UnitDetail} from '../../unit/unit-detail';

@Component({
    selector: 'app-requester-create',
    templateUrl: './requester-create.component.html',
    styleUrls: ['./requester-create.component.css'],
})
export class RequesterCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param requesterService The requester's services unit
    * @param toastrService The toastr to show messages to the user
    */
   constructor(private requesterService:RequesterService, private toastr:ToastrService, private formBuilder:FormBuilder, private unitService:UnitService) {
    this.requesterForm  = this.formBuilder.group({
      name:["",[Validators.required, Validators.minLength(2)]],
      login:["",[Validators.required, Validators.minLength(2)]],
      email:["",[Validators.required, Validators.minLength(2)]],
      phone:["",[Validators.required, Validators.minLength(2)]],
      unitSelect:[" ", Validators.required]});
   }

    /**
    * The new requester
    */
    requester: Requester;

    /**
    * The requesters
    */
   requesters: Requester[];

   /**
    * The units
    */
   units: Unit[];

   /**
    * Form to create the requester
    */
   requesterForm: FormGroup;

   /**
    * Gets the units
    */
   getUnits():void{
    this.unitService.getUnits()
    .subscribe(p => {
        this.units = p;

    });
   }

    /**
    * Creates an requester
    */
    createRequester(newRequester: Requester) {
      newRequester.unit = this.requester.unit;

    console.warn("el desarrollador fue creado", newRequester);
    this.requesterService.createRequester(newRequester).subscribe(p => {
      this.requesters.push(p);
      this.showSuccess();
    }, err => {
                this.toastr.error(err, 'Error')});
    this.requesterForm.reset();
    }

    /**
     * Show requester's creation success
     */
    showSuccess() {
        for (let i = 0; i < this.requesters.length; i++){
          console.log(this.requesters[i].id+' '+this.requesters[i].name);
        }
        this.toastr.success("Requester", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
      }

    /**
    * This function will initialize the component
    */
   ngOnInit() {
    this.requester = new Requester();
    this.requesterService
      .getRequesters()
      .subscribe(p => (this.requesters = p));
  }

}
