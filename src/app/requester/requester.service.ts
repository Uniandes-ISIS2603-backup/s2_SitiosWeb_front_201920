import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Requester} from './requester';
import {RequesterDetail} from './requester-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const requesters = '/requesters';
const reviews = '/reviews';


/**
* The service provider for everything related to requesters
*/
@Injectable()
export class RequesterService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of requesters retrieved from the API
    * @returns The list of requesters in real time
    */
    getRequesters(): Observable<Requester[]> {
        return this.http.get<Requester[]>(API_URL + requesters);
    }

    /**
    * Creates a new requester
    * @param requester The new requester
    * @returns The requester with its new id if it was created, false if it wasn't
    */
    createRequester(requester): Observable<RequesterDetail> {
        return this.http.post<RequesterDetail>(API_URL + requesters, requester);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getRequesterDetail(requesterId): Observable<RequesterDetail> {
        return this.http.get<RequesterDetail>(API_URL + requesters + '/' + requesterId);
    }

    
}

