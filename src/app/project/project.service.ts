import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Observable } from 'rxjs';
import { ProjectDetail } from './projectDetail';

const API_URL = '../../assets/';
const projects = 'projects.json';

@Injectable()
export class ProjectService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getProjects() : Observable<ProjectDetail[]> {
        return this.http.get<ProjectDetail[]>(API_URL + projects);
    }
    
}