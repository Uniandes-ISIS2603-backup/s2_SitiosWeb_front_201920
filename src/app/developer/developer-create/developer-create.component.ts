import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Developer } from '../developer';
import { DeveloperDetail } from '../developer-detail';
import { DeveloperService } from '../developer.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css']
})
export class DeveloperCreateComponent implements OnInit {

  developerForm: FormGroup;
  developers: Developer[];

  constructor(private developerService: DeveloperService,
    private formBuilder: FormBuilder
  ) {
    this.developerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]] ,
    login: ['', [Validators.required, Validators.minLength(1)]] ,
    email: ['', [Validators.required, Validators.minLength(1)]] ,
    phone: ['', [Validators.required, Validators.minLength(1)]] ,
    leader: [null, Validators.required]
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
   }

   ngOnInit() {
     this.developerService.getDevelopers().subscribe(developers => (this.developers = developers));
   }

}
