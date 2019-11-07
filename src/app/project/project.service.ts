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
    
}