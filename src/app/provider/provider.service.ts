import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from './provider';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const providers = 'providers.json';

@Injectable()
export class ProviderService {
    constructor(private http: HttpClient) { }    
  
    getProviders() : Observable<Provider[]> {
        return this.http.get<Provider[]>(API_URL + providers);
    }
    
}