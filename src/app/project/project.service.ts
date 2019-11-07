import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { ProjectDetail } from './projectDetail';

const API_URL = 'http://localhost:8080/s2_sitiosweb-api/api';
const projects = '/projects';

@Injectable()
export class ProjectService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    /**
     * Gets all projects known in the app using the API_URL and the projects route
     */
    getProjects() : Observable<ProjectDetail[]> {
        return this.http.get<ProjectDetail[]>(API_URL + projects);
    }
    
    /**
     * Gets the detail of project
     * @param projectId id of the project which detail is being requested
     */
    getProjectDetail(projectId): Observable<Project> {
        return this.http.get<Project>(API_URL + "project-" + projectId+".json");
    }

    /**
     * Creates a project
     * @param project Project object to be created
     */
    createHardware(project): Observable<Project> {
        return this.http.post<Project>(API_URL + projects, project);
    }
    
    /**
     * Updates a project by parameter
     * @param project Project object to be updated
     */
    updateHardware(project): Observable<Project> {
        return this.http.put<Project>(API_URL + projects + '/' + project.id, project);
    }
    
    /**
     * Deletes a project by its id given as parameter.
     * @param projectId id of the project to be deleted
     */
    deleteEditorial(projectId): Observable<Project> {
        return this.http.delete<Project>(API_URL + projects + '/' + projectId);
    }
}