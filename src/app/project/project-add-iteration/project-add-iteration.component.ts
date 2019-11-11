import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Iteration } from '../iteration';
import { ProjectService } from '../project.service';
import { Project } from '../../project/project';
@Component({
    selector: 'app-project-add-iteration',
    templateUrl: './project-add-iteration.component.html',
    styleUrls: ['./project-add-iteration.component.css']
})
export class ProjectAddIterationComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param projectService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private projectService: ProjectService,
        private toastrService: ToastrService
    ) { }

    /**
    * The book's id
    */
    @Input() project: Project;

    /**
    * The review to post
    */
    iteration: Iteration;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateIterations = new EventEmitter();

    /**
    * This function posts a review
    * @param iteraionForm The form of the review
    */
    postIteration(iterationForm: NgForm): Iteration {
        this.iteration.projecto = this.project;
        this.projectService.createIteration(this.project.id,this.iteration)
            .subscribe(() => {
                iterationForm.resetForm();
                this.updateIterations.emit();
                this.toastrService.success("The iteration was successfully created", 'iteration added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.iteration;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.iteration = new Iteration();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}