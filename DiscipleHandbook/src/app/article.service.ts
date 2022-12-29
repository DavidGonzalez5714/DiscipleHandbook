import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from './model/config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/test.json';

  getHtml(id: number) {
    return this.http.get<string>('assets/' + id + '.html');
  }
}
