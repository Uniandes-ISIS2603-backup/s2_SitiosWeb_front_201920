import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const projects = 'projects.json';

@Injectable()
export class ProjectService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getProjects() : Observable<Project[]> {
        return this.http.get<Project[]>(API_URL + projects);
    }
    
}