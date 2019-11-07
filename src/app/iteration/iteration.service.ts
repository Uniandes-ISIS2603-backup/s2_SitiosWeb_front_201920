import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iteration} from './iteration';
import {Observable} from 'rxjs';

const API_URL = '../../assets';
const iterations = '/iterations';

@Injectable()
export class IterationService {

  constructor(public http: HttpClient) { }

  getIterations(): Observable<Iteration[]>{
    return this.http.get<Iteration[]>(API_URL+ iterations);
  }

  getIterationDetail(iterationId): Observable<Iteration>{
    return this.http.get<Iteration>(API_URL+"iteration-"+iterationId +".json");
  }

  createIteration(iteration):Observable<Iteration>{
    return this.http.post<Iteration>(API_URL + iterations,iteration);
  }

  updateIteration(iteration):Observable<Iteration>{
    return this.http.put<Iteration>(API_URL + iterations + '/'+ iteration.id,iteration);
  }

  deleteIteration(iterationId): Observable<Iteration>{
    return this.http.delete<Iteration>(API_URL + iterations + '/' + iterationId);
  }

}