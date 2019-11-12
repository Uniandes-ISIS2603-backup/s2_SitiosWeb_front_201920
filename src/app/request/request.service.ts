import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Request } from './request';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const requests = '/requests';


@Injectable()
export class RequestService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
   constructor(private http: HttpClient) { }

   getRequests() : Observable<Request[]> {
       return this.http.get<Request[]>(API_URL + requests);
   }

   getRequest(idRequest) : Observable<Request> {
       return this.http.get<Request>(API_URL + requests + '/' + idRequest);
   }

   createUnit(request: Request): Observable<Request> {
       return this.http.post<Request>(API_URL+requests, request);
    }
    
}