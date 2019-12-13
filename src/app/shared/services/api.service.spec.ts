import {TestBed} from '@angular/core/testing';
import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from 'src/environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create valid query string', () => {
    const queryString = service.createQueryString({
      name: 'Bart',
      prefix: 'isSmart'
    });

    expect(queryString).toBe('?name=Bart&prefix=isSmart');
  });

  it('should create valid url', () => {
    const url = service.createURL('/user', {
      name: 'bob',
      age: '2'
    });

    const expectedURL = environment.APIEndpoint + '/user?name=bob&age=2';
    expect(url).toBe(expectedURL);
  });

  it('should execute GET request', () => {
    service = TestBed.get(ApiService);

    class Response {
      status: number;
      message: string;
      query: string;
    }

    service.get<Response>('/user', {name: 'bob'}).subscribe(
      response => {
        expect(response.status).toBe(200);
        expect(response.message).toBe('OK');
        expect(response.query).toBe('bob');
      });

    const dummyResponse = {
      status: 200,
      message: 'OK',
      query: 'bob'
    };

    const req = httpMock.expectOne(environment.APIEndpoint + '/user?name=bob');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);

  });

  it('should execute POST request', () => {
    service = TestBed.get(ApiService);

    class Response {
      name: number;
    }

    service.post('/user', {name: 'bob'}).subscribe(
      response => {

      },
      error => {
        fail();
      });

    const dummyResponse = {
      status: 200,
      message: 'OK',
      query: 'bob'
    };

    const req = httpMock.expectOne(environment.APIEndpoint + '/user');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.name).toBe('bob');
  });

  it('should execute PUT request', () => {
    service = TestBed.get(ApiService);

    class Response {
      name: number;
    }

    service.put('/user', {name: 'bob'}).subscribe(
      response => {

      },
      error => {
        fail();
      });

    const dummyResponse = {
      status: 200,
      message: 'OK',
      query: 'bob'
    };

    const req = httpMock.expectOne(environment.APIEndpoint + '/user');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.name).toBe('bob');
  });

  it('should execute DELETE request', () => {
    service = TestBed.get(ApiService);

    class Response {
      name: number;
    }

    service.put('/user', {name: 'bob'}).subscribe(
      response => {

      },
      error => {
        fail();
      });

    const dummyResponse = {
      status: 200,
      message: 'OK',
      query: 'bob'
    };

    const req = httpMock.expectOne(environment.APIEndpoint + '/user');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.name).toBe('bob');
  });

});
