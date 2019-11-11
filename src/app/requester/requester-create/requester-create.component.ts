import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

import { Requester } from "../requester";
import { RequesterService } from "../requester.service";

@Component({
  selector: 'app-requester-create',
  templateUrl: './requester-create.component.html',
  styleUrls: ['./requester-create.component.css']
})
export class RequesterCreateComponent implements OnInit {

  requesterForm: FormGroup;

  requesters:Requester[];

  constructor(private requesterService:RequesterService, private toastr:ToastrService, private formBuilder:FormBuilder) {
    this.requesterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]] ,
      login: ['', [Validators.required, Validators.minLength(1)]] ,
      email: ['', [Validators.required, Validators.minLength(1)]] ,
      phone: ['', [Validators.required, Validators.minLength(1)]] ,
    });
   }

   createRequester(newRequester: Requester) {
    // Process checkout data here
    console.warn("el proyecto fue creado", newRequester);

    this.requesterService.createRequester(newRequester).subscribe(p => {
      this.requesters.push(p);
      this.showSuccess();
    });
    this.requesterForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.requesters.length; i++){
      console.log(this.requesters[i].id+' '+this.requesters[i].name);
    }
    this.toastr.success("Requester", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.requesterService
      .getRequesters()
      .subscribe(p => (this.requesters = p));
  }

}


