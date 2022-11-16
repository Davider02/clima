import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = '8cd3b6e518932d5322bb090f5e02d59a';
  
  constructor(private http: HttpClient) {}

  clima(ciudad: string): Observable <any> {
    return this.http.get('https:.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}');


  }
}
