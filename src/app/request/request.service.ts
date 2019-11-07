import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request-list/request';
import { Observable } from 'rxjs';

const API_URL = '../../assets';
const requests = 'requests.json';

@Injectable()
export class RequestService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getEditorials() : Observable<Request[]> {
        return this.http.get<Request[]>(API_URL + requests);
    }
    
}