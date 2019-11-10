import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { Project } from "../project";
import { ProjectService } from "../project.service";
import {DeveloperService} from '../../developer/developer.service';
import {ProviderService} from '../../provider/provider.service';
import {HardwareService} from '../../hardware/hardware.service';
import {Developer} from '../../developer/developer';
import {Hardware} from '../../hardware/hardware';
import {Provider} from '../../provider/provider';

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

  project:Project;

  projects:Project[];

  hardware:Hardware[];

  developers:Developer[];

  providers: Provider[];

  constructor(private projectService:ProjectService, private hardwareService:HardwareService, private developerService:DeveloperService, private providerService: ProviderService, private toastr:ToastrService, private formBuilder:FormBuilder) {
    //this.projectForm  = this.formBuilder.group({
     // company:["",[Validators.required, Validators.minLength(2)]],
      //internalProject:["", Validators.required]});
   }

   getProviders():void{
    this.providerService.getProviders()
    .subscribe(p => {
        this.providers = p;

    });
   }

   createProject(newProject: Project) {
    // Process checkout data here
    console.warn("el proyecto fue creado", newProject);
    console.log(newProject.provider.name);
    this.projectService.createProject(newProject).subscribe(p => {
      this.projects.push(p);
      this.showSuccess();
    }, err => {
                this.toastr.error(err, 'Error')});
    this.projectForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.projects.length; i++){
      console.log(this.projects[i].id+' '+this.projects[i].company);
    }
    this.toastr.success("Project", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.project = new Project();
    this.project.provider = new Provider();
    this.getProviders();
    this.projectService
      .getProjects()
      .subscribe(p => (this.projects = p));
  }

}