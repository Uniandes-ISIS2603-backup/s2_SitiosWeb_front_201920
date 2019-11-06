import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hardware } from './hardware';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s2_sitiosweb-api/api';
const editorials = '/hardwares';

@Injectable()
export class HardwareService {
    
    constructor(public http: HttpClient) { }    
  
    getHardwares() : Observable<Hardware[]> {
        return this.http.get<Hardware[]>(API_URL + editorials);
    }

  getHardwareDetail(hardwareid): Observable<Hardware> {
        return this.http.get<Hardware>(API_URL + "hardware-" + hardwareid+".json");
  }


    createHardware(hardware): Observable<Hardware> {
        return this.http.post<Hardware>(API_URL + editorials, hardware);
    }
    
    updateHardware(hardware): Observable<Hardware> {
        return this.http.put<Hardware>(API_URL + editorials + '/' + hardware.id, hardware);
    }
    
    deleteEditorial(hardwareid): Observable<Hardware> {
        return this.http.delete<Hardware>(API_URL + editorials + '/' + hardwareid);
    }

    
}
