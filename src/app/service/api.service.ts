import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getData(fieldFilter: any, filter: any, amount: any, actualPage: any): Observable<any>{
    const urlApi = 'http://localhost/Prueba/test_module/web/API/formulario/?fieldFilter=' + fieldFilter + '&filter=' + filter + '&amount=' + amount + '&actualPage=' + actualPage
    return this.http.get<any>(urlApi);
  }
}
