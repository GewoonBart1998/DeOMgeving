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
    service = TestBed.get(ApiService);

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
    const expectedURL = environment.APIEndpoint + '/user?name=bob&age=2';
    const url = service.createURL('/user', {
      name: 'bob',
      age: '2'
    });

    expect(url).toBe(expectedURL);
  });

  it('should execute GET request', () => {
    class MockResponse {
      status: number;
      message: string;
      query: string;
    }

    const dummyResponse = {
      status: 200,
      message: 'OK',
      query: 'bob'
    } as MockResponse;

    service.get<MockResponse>('/user', {name: 'bob'}).subscribe(
      response => {
        expect(response.status).toBe(200);
        expect(response.message).toBe('OK');
        expect(response.query).toBe('bob');
      });

    const req = httpMock.expectOne(environment.APIEndpoint + '/user?name=bob');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);

  });

  it('should execute POST request', () => {
    const requestBody = {name: 'bob'};
    service.post('/user', requestBody).subscribe(
      response => {

      },
      error => {
        fail();
      });


    const req = httpMock.expectOne(environment.APIEndpoint + '/user');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.name).toBe('bob');
  });

  it('should execute PUT request', () => {
    const requestBody = {name: 'bob'};
    service.put('/user', requestBody).subscribe(
      response => { /*request was successful*/
      },
      error => {
        fail();
      });


    const req = httpMock.expectOne(environment.APIEndpoint + '/user');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.name).toBe('bob');
  });

  it('should execute DELETE request', () => {
    const requestBody = {name: 'bob'};
    service.delete('/user/1').subscribe(
      response => { /*request was successful*/
      },
      error => {
        fail();
      });

    httpMock.expectOne(environment.APIEndpoint + '/user/1');
  });

});
