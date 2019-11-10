import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Developer} from './developer';
import {DeveloperDetail} from './developer-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const developers = '/developers';
const reviews = '/reviews';


/**
* The service provider for everything related to developers
*/
@Injectable()
export class DeveloperService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of developers retrieved from the API
    * @returns The list of developers in real time
    */
    getDevelopers(): Observable<Developer[]> {
        return this.http.get<Developer[]>(API_URL + developers);
    }

    /**
    * Creates a new developer
    * @param developer The new developer
    * @returns The developer with its new id if it was created, false if it wasn't
    */
    createDeveloper(developer): Observable<DeveloperDetail> {
        return this.http.post<DeveloperDetail>(API_URL + developers, developer);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getDeveloperDetail(developerId): Observable<DeveloperDetail> {
        return this.http.get<DeveloperDetail>(API_URL + developers + '/' + developerId);
    }

    
}

