import { Component, OnInit } from '@angular/core';
import { Requester } from '../requester';
import { RequesterDetail } from '../requester-detail';
import { RequesterService } from '../requester.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-requester-create',
  templateUrl: './requester-create.component.html',
  styleUrls: ['./requester-create.component.css']
})
export class RequesterCreateComponent implements OnInit {

  requesterForm: FormGroup;
  requesters: Requester[];

  constructor(private requesterService: RequesterService,
    private formBuilder: FormBuilder
  ) {
    this.requesterForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]] ,
    login: ['', [Validators.required, Validators.minLength(1)]] ,
    email: ['', [Validators.required, Validators.minLength(1)]] ,
    phone: ['', [Validators.required, Validators.minLength(1)]] ,
    leader: [null, Validators.required]
});

   }

   createRequester(newRequester: Requester) {
     console.warn("el requester fue creado", newRequester);

     this.requesterService.createRequester(newRequester).subscribe(requester => {this.requesters.push(requester);this.showSuccess();});
     this.requesterForm.reset();
   }

   showSuccess() {
     for (let i = 0; i < this.requesters.length; i++){
       console.log(this.requesters[i].id+' '+this.requesters[i].name);
     }
   }

   ngOnInit() {
     this.requesterService.getRequesters().subscribe(requesters => (this.requesters = requesters));
   }

}
