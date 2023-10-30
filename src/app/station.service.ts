import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Station } from './Station';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private stationsUrl = 'http://localhost:9001/stations';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getStations(): Observable<Station[]> {
    return this.http
      .get<Station[]>(this.stationsUrl)
      .pipe(tap(_ => console.log('fetched stations')));
  }
}
