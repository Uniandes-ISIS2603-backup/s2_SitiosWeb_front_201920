import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Hardware } from '../hardware';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import {DatePipe} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-project-add-hardware',
    templateUrl: './project-add-hardware.component.html',
    styleUrls: ['./project-add-hardware.component.css'],
    providers: [DatePipe]
})
export class ProjectAddHardwareComponent implements OnInit {

    /**
    * The constructor of the component
    * @param projectService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private projectService: ProjectService,
        private toastrService: ToastrService,
        private dp: DatePipe,
        private formBuilder:FormBuilder
    ) { 
        this.hardwareForm  = this.formBuilder.group({
            ip:[""],
            cores:[""],
            ram:[""],
            cpu:[" "],
            plataforma:[" "],
            projectSelect:[" "]
            });
      
     }

    /**
    * The book's id
    */
    @Input() project: Project;

    projects:Project[] = [this.project];

    /**
     Form to create project
    */
    hardwareForm: FormGroup;

    /**
    * The review to post
    */
    hardware: Hardware;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateHardware = new EventEmitter();

    /**
    * This function posts a iteration
    * @param iteraionForm The form of the iteration
    */
   createHardware(newHardware: Hardware) {
    // Process checkout data here
    newHardware.projecto = this.project;
//    newProject.hw = this.project.hw;
    
    console.warn("el hardware fue creado", newHardware);
    this.projectService.createHardware(this.project.id, newHardware).subscribe(p => {
      this.project.hw = p;
      this.showSuccess();
    }, err => {
                this.toastrService.error(err, 'Error')});
  //  this.providerService.getProvider(newProject.provider.id).subscribe(p => {p.projects.push(newProject)});
    this.hardwareForm.reset();
}

showSuccess() {

    this.toastrService.success("Hardware", "Successfully created!", {"progressBar": true,timeOut:3000});

  }


    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.hardware = new Hardware();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}