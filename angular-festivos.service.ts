import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularFestivosService {
  private apiUrl = 'https://api.festivos.com';

  constructor(private http: HttpClient) { }

  public verificarFecha(fecha: Date) {
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getUTCDate();
    let urlT = `${this.url}/verificar/${año}/${mes}/${dia}`;

    return this.http.get(urlT, { responseType: 'text' });
  }

  public obtenerFestivos(año: number): Observable<Festivos[]> {
    let urlT = `${this.url}/obtener/${año}`;

    return this.http.get<Festivos[]>(urlT);
  }
  }

