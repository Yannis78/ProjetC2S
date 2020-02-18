import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '../classes/devices';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getdevices(): Observable<Device[]> {
    const header = {
      headers: new HttpHeaders({
        'apikey': 'wjI+OFmZxYnHqm0hUh+nEt24x+SX63kwED/aQrRo5S8='
      })
    };
    return this.http.get<Device[]>("https://api.objenious.com/v1/devices", header)
  }

  getmessagesF46(): Observable<any> {
    const header = {
      headers: new HttpHeaders({
        'apikey': 'wjI+OFmZxYnHqm0hUh+nEt24x+SX63kwED/aQrRo5S8='
      })
    };
    return this.http.get("https://api.objenious.com/v1/devices/54606145481867305/messages", header)
  }

  getmessagesF45(): Observable<any> {
    const header = {
      headers: new HttpHeaders({
        'apikey': 'wjI+OFmZxYnHqm0hUh+nEt24x+SX63kwED/aQrRo5S8='
      })
    };
    return this.http.get("https://api.objenious.com/v1/devices/54606145481867307/messages", header)
  }

  getmessagesF41(): Observable<any> {
    const header = {
      headers: new HttpHeaders({
        'apikey': 'wjI+OFmZxYnHqm0hUh+nEt24x+SX63kwED/aQrRo5S8='
      })
    };
    return this.http.get("https://api.objenious.com/v1/devices/54606145481867306/messages", header)
  }
}
