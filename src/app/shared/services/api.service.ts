import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.APIEndpoint;
  }

  createQueryString(queryParameters: object) {
    let queryString = '';

    if (typeof queryParameters !== 'object') {
      return queryString;

    }

    for (const key of Object.keys(queryParameters)) {
      const value = queryParameters[key];
      const prefix = queryString.length === 0 ? '?' : '&';

      queryString += `${prefix}${key}=${value}`;
    }

    return queryString;
  }

  createURL(path: string, queryParameters?: object) {
    const queryString = this.createQueryString(queryParameters);
    return `${this.endpoint}${path}${queryString}`;
  }

  get<T>(path: string, queryParameters?: object) {
    const url = this.createURL(path, queryParameters);
    return this.httpClient.get<T>(url);
  }

  post(resourcePath: string, requestBody: object) {
    const url = this.createURL(resourcePath);
    return this.httpClient.post(url, requestBody);
  }

  put(resourcePath: string, requestBody: object) {
    const url = this.createURL(resourcePath);
    return this.httpClient.put(url, requestBody);
  }

  delete(resourcePath: string) {
    const url = this.createURL(resourcePath);
    return this.httpClient.delete(url);
  }

}
