import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private basePath = "https://apitest.bettery.io/publicEvents/get_all_for_test";

  constructor(private httpClient: HttpClient) { }

  getTest():Observable<any>{
    return this.httpClient.get<any>(this.basePath)
  }
}
