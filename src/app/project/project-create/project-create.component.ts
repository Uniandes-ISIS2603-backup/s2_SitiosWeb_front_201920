import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  projectForm: FormGroup;
  constructor( private formBuilder:FormBuilder) {
    this.projectForm  = this.formBuilder.group({
      company:["",[Validators.required, Validators.minLength(2)]],
      internalProject:["", Validators.required]});
   }

  ngOnInit() {
  }

}