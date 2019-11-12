import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css']
})
export class DeveloperCreateComponent implements OnInit {

  developerForm: FormGroup;
  developers: Developer[];

  constructor(private developerService: DeveloperService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.developerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]] ,
      login: ['', [Validators.required, Validators.minLength(1)]] ,
      email: ['', [Validators.required, Validators.minLength(1)]] ,
      phone: ['', [Validators.required, Validators.minLength(1)]] ,
      leader: ['', Validators.required]
    });
   }

   createDeveloper(newDeveloper: Developer) {
     console.warn("el developer fue creado", newDeveloper);

     this.developerService.createDeveloper(newDeveloper).subscribe(developer => {this.developers.push(developer);this.showSuccess();});
     this.developerForm.reset();
   }

   showSuccess() {

     for (let i = 0; i < this.developers.length; i++){
       console.log(this.developers[i].id+' '+this.developers[i].name);
     }
     this.toastr.success("Developer", "Creado exitosamente!", {"progressBar": true,timeOut:3000});
   }
   ngOnInit() {

     this.developerService.getDevelopers().subscribe(developers => (this.developers = developers));
   }

}
