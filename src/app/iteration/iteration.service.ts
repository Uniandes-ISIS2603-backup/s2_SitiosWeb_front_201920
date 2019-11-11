import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iteration } from './iteration';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const iterations = '/iterations';

@Injectable()
export class IterationService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(public http: HttpClient) { }

  getIterations(): Observable<Iteration[]>{
    return this.http.get<Iteration[]>(API_URL+ iterations);
  }

  getIterationDetail(iterationId): Observable<Iteration>{
    return this.http.get<Iteration>(API_URL+ iterations + '/' + iterationId);
  }

  createIteration(iteration: Iteration): Observable<Iteration> {
    return this.http.post<Iteration>(API_URL, iteration, this.httpOptions).pipe(tap((iteration: Iteration) => console.log(`added iteration w/ ${iteration.objetive} id=${iteration.id}`)));
}

}