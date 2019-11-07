import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  projectDetail: Project;

  @Input() projectid: number;

  loader: any;

  getProjectDetail(): void {

    this.projectService.getProjectDetail(this.projectid)
      .subscribe(value => {
        this.projectDetail = value
      });
  }

  onLoad(params) {

    this.projectid = parseInt(params['id']);
    console.log(" en detail " + this.projectid);
    this.projectDetail = new Project();
    this.getProjectDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}