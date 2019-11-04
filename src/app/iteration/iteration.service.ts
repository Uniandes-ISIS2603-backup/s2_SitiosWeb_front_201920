import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iteration } from './iteration';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const iterations = 'iterations.json';

@Injectable()
export class IterationService {

  constructor(private http: HttpClient) { }
  getIterations(): Observable<Iteration[]>{
    return this.http.get<Iteration[]>(API_URL+iterations);
  }
}