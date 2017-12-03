import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('user-key', '8441d0394c1be96dc752030b5d2c7460');
  }

  getSomeGames(): Observable<any> {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get('https://api-2445582011268.apicast.io/games/', {
      headers: headers
    });
  }

}
