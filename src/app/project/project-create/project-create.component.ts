import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { Project } from "../project";
import { ProjectService } from "../project.service";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  /**
  Form to create project
  */
  projectForm: FormGroup;

  projects:Project[];

  constructor(private projectService:ProjectService, private toastr:ToastrService, private formBuilder:FormBuilder) {
    this.projectForm  = this.formBuilder.group({
      company:["",[Validators.required, Validators.minLength(2)]],
      internalProject:["", Validators.required]});
   }

   createProject(newProject: Project) {
    // Process checkout data here
    console.warn("el proyecto fue creado", newProject);

    this.projectService.createProject(newProject).subscribe(p => {
      this.projects.push(p);
      this.showSuccess();
    });
    this.projectForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.projects.length; i++){
      console.log(this.projects[i].id+' '+this.projects[i].company);
    }
    this.toastr.success("Project", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.projectService
      .getProjects()
      .subscribe(p => (this.projects = p));
  }

}