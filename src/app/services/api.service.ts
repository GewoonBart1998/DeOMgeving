import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.APIEndpoint;
  }

  createQueryString(queryParameters: Object){

    if(typeof queryParameters !== 'object'){
      return;
    }
    
    let queryString = '';
    
    for(let key in queryParameters){
      let value = queryParameters[key];
      let prefix = queryString.length === 0 ? '?' : '&';

      queryString += `${prefix}${key}=${value}`;
    }

    return queryString;
  }

  createURL(path: String, queryParameters: object){
    let queryString = this.createQueryString(queryParameters);
    return `${this.endpoint}${path}${queryString}`
  }

  get<T>(path: string, queryParameters?: Object){
    let url = this.createURL(path, queryParameters);
    console.log(url);
    return this.httpClient.get<T>(url);
  }

  post(path: string, body: object){
    return this.httpClient.post(this.endpoint + path, body)
  }

  put(path: string, body: object){
    return this.httpClient.put(this.endpoint + path, body);
  }

  delete(path: string){
    return this.httpClient.delete(this.endpoint + path);
  }

}
