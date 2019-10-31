import { Component, OnInit } from '@angular/core';
import {ProjectDetail} from '../projectDetail';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

/**
     * The list of projects which belong to the app
 */ projects: ProjectDetail[];

  constructor(private projectService: ProjectService) { }

  getProjects() : void { 
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  ngOnInit() {
    this.getProjects();
  }
}