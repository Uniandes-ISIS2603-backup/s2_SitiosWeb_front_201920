import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Developer } from './developer';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const developers = 'developers.json';

@Injectable()
export class DeveloperService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getDevelopers() : Observable<Developer[]> {
        return this.http.get<Developer[]>(API_URL + developers);
    }
    
}