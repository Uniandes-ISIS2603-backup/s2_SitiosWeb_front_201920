import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  /**
   * Constructor of this ProjectDetailComponent
   * @param projectService ProjectService class that handles HTTP methods post, put, delete, get
   * @param route route of the URL
   */
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  /**
   * ProjectDetail attribute of this component
   */
  projectDetail: Project;

  /**
   * id of the project as an input from html view
   */
  @Input() projectid: number;

  /**
   * Class loader
   */
  loader: any;

  /**
   * Method that gets the detail of a project from its id
   */
  getProjectDetail(): void {

    this.projectService.getProjectDetail(this.projectid)
      .subscribe(value => {
        this.projectDetail = value
      });
  }

  /**
   * Method to be executed once this component is loads
   * @param params default parameter of method
   */
  onLoad(params) {

    this.projectid = parseInt(params['id']);
    console.log(" en detail " + this.projectid);
    this.projectDetail = new Project();
    this.getProjectDetail();
  }

  /**
   * Method to be executed automatically once this component is initialized.
   */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  /**
   * Method to be execuuted automatically once this component is destroyed.
   */
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}