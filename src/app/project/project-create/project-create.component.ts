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
import {ProviderDetail} from '../../provider/provider-detail';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

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
  selected:number = -1;
  selectedL:number = -1;
  selectedH:number = -1;
  providerPrueba:ProviderDetail;

  constructor(private projectService:ProjectService, private hardwareService:HardwareService, private developerService:DeveloperService, private providerService: ProviderService, private toastr:ToastrService, private formBuilder:FormBuilder) {
    this.projectForm  = this.formBuilder.group({
      company:["",[Validators.required, Validators.minLength(2)]],
      internalProject:["", Validators.required],
      providerSelect:[" ",Validators.required],
      leaderSelect:[" ", Validators.required],
      hardwareSelect:[" ", Validators.required]});
   }

   getProviders():void{
    this.providerService.getProviders()
    .subscribe(p => {
        this.providers = p;

    });
   }

   getDevelopers():void{
     this.developerService.getDevelopers().subscribe(l=>{this.developers=l});
   }

   getHardware():void{
    this.hardwareService.getHardwares().subscribe(h=>{this.hardware=h});
  }

   onSelectShow():void{
    console.log(this.project.provider.id);
   }

   createProject(newProject: Project) {
    // Process checkout data here
    newProject.provider = this.project.provider;
    newProject.leader = this.project.leader;
    console.warn("el proyecto fue creado", newProject);
    this.projectService.createProject(newProject).subscribe(p => {
      this.projects.push(p);
      this.showSuccess();
    }, err => {
                this.toastr.error(err, 'Error')});

/*
    prov :ProviderDetail;
    provider_id: number;
    console.log(newProject.provider+" there");
    this.provider_id = Number(newProject.provider);
    console.log(this.provider_id+" here");
    this.providerService.getProvider(this.provider_id).subscribe(pr => {this.prov = pr;});
    console.log(this.prov);
    this.prov.projects.push(newProject);
    this.providerService.updateProvider(this.prov);

*/
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
    this.project.leader = new Developer();
    this.project.hw = new Hardware();
    this.getProviders();
    this.getDevelopers();
    this.getHardware();
    this.projectService
      .getProjects()
      .subscribe(p => (this.projects = p));
  }

}
