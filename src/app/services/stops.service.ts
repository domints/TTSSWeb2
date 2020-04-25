import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class StopsService extends BaseService {

  constructor(private http: HttpClient) { super(); }

  public getAutocomplete(value: string): Observable<StopAutocomplete[]> {
    return this.http.get<StopAutocomplete[]>(this.baseUrl + '/api/stops/autocomplete?', { params: { q: value } });
  }

  public getPassages(stopId: string): Observable<PassageListItem[]> {
    return this.http.get<PassageListItem[]>(this.baseUrl + '/api/stops/passages', { params: { stopId: stopId } })
  }
}

export class StopAutocomplete {
  id: string;
  name: string;
}

export class PassageListItem {
  line: string;
  direction: string;
  tramDescription: string;
  mixedTime: string;
  vehicleId: string;
  isOld: boolean;
  delayMinutes: number;
  tripId: string;
  isBus: string;
}
