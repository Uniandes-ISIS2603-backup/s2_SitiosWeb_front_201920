import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provider } from './provider';
import { ProviderDetail } from './provider-detail';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = '../../assets/';
const providers = 'providers.json';



@Injectable()
export class ProviderService {
  httpOptions = {
     headers: new HttpHeaders({ "Content-Type": "application/json" })
   };
    constructor(private http: HttpClient) { }

    getProviders() : Observable<Provider[]> {
        return this.http.get<Provider[]>(API_URL + providers);
    }

    getProvider(idProvider) : Observable<ProviderDetail> {
        return this.http.get<ProviderDetail>(API_URL + 'provider-'+idProvider+'.json');
    }

    createProvider(provider: Provider): Observable<Provider> {
        return this.http.post<Provider>(API_URL, provider, this.httpOptions).pipe(tap((provider: Provider) => console.log(`added provider w/ ${provider.name} id=${provider.id}`)));
}


}
