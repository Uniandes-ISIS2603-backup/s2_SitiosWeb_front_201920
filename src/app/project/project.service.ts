import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { ProjectDetail } from './projectDetail';

const API_URL = '../../assets/';
const projects = 'projects.json';

@Injectable()
export class ProjectService {
    
    private projectsUrl = "api/projects"; // URL to web api

    httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    /**
     * Gets all projects known in the app using the API_URL and the projects route
     */
    getProjects() : Observable<Project[]> {
        return this.http.get<Project[]>(API_URL + projects);
    }
    
    /**
     * Gets the detail of project
     * @param projectId id of the project which detail is being requested
     */
    getProjectDetail(projectId:number): Observable<ProjectDetail> {
        const url =`${this.projectsUrl}/${projectId}`;
        return this.http.get<ProjectDetail>(url);
    }

    /**
     * Creates a project
     * @param project Project object to be created
     */
    createProject(project): Observable<Project> {
        return this.http.post<Project>(API_URL + projects, project);
    }
    
    /**
     * Updates a project by parameter
     * @param project Project object to be updated
     */
    updateProject(project): Observable<ProjectDetail> {
        return this.http.put<ProjectDetail>(API_URL + projects + '/' + project.id, project);
    }
    
    /**
     * Deletes a project by its id given as parameter.
     * @param projectId id of the project to be deleted
     */
    deleteProject(projectId): Observable<ProjectDetail> {
        return this.http.delete<ProjectDetail>(API_URL + projects + '/' + projectId);
    }
}