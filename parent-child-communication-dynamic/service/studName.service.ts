import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudNameService {
  constructor (
    private http: Http
  ) {}

  
  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`).map((res:Response) => res.json());
  }



}