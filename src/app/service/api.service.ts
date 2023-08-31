import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getData(page: any, fieldFilter: any, filter: any): Observable<any>{
    const urlApi = 'http://localhost/Prueba/test_module/web/API/formulario/?page=' + page + '&fieldFilter=' + fieldFilter + '&filter=' + filter
    return this.http.get<any>(urlApi);
  }
}
