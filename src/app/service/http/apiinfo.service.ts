import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
@Injectable({
  providedIn: 'root'
})
export class ApiinfoService {
  private authorization = '';
  private headers = new HttpHeaders();
  constructor(private http: HttpClient, private environmentService: EnvironmentService) {
  }
  setToken() {
    console.log('In Set Token-=============');
    let headerJson = {};
      this.authorization = 'Bearer ' + localStorage.getItem('chiti-token');
       headerJson = {
        'Content-type': 'application/json',
        'Authorization': this.authorization
      };
    this.headers = new HttpHeaders(headerJson);

  }


  postApi(api, data) {
    console.log('data====:' + JSON.stringify(data) + ',API:' + api);
    const url = this.environmentService.getBaseUrl() + this.environmentService.getApiUrl(api);
    console.log('URL====:' + url );
        return this.http.post(url, data,
      {
        headers: this.headers, observe: 'response'
      }
    );
  }
  putApi(api, data) {
    console.log('data====:' + JSON.stringify(data) + ',API:' + api);
    const url = this.environmentService.getBaseUrl() + this.environmentService.getApiUrl(api);
    console.log('URL====:' + url );
    return this.http.put(url, data,
      {
        headers: this.headers,
        observe: 'response'
      },
    );
  }

  getApi(api, param) {
    const url = this.environmentService.getBaseUrl() + this.environmentService.getApiUrl(api);
    console.log('URL====:' + url );

    return this.http.get(url,
      {
        headers: this.headers,
        params: param
      });
  }

  deleteApi(api, data, bodydata) {
    const url = this.environmentService.getBaseUrl() + this.environmentService.getApiUrl(api);

    return this.http.request('delete', url, {
      body: bodydata,
      headers: this.headers,
      params: data
    });
  }

}
