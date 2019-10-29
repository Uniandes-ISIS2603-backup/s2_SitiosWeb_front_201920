import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editorial } from './request';
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
  
    getEditorials() : Observable<Editorial[]> {
        return this.http.get<Editorial[]>(API_URL + requests);
    }
    
}