import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Developer } from './developer';
import { DeveloperDetail } from "./developer-detail";

import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const developers = 'developers.json';

@Injectable()
export class DeveloperService {

  constructor(private http: HttpClient) { }

  getDevelopers() : Observable<Developer[]> {
    return this.http.get<Developer[]>(API_URL + developers);
  }

  getDeveloperDetail(developerId):Observable<DeveloperDetail> {
    return this.http.get<DeveloperDetail>(API_URL+"developer-"+developerId+".json")
  }

  createDeveloper(developer): Observable<Developer> {
    return this.http.post<Developer>(API_URL + developers, developer);
  }

  //getProjects() : Observable<Project[]>{

  //}
  
}