import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getHtml(id: number): Observable<string> {
    return this.http.get('assets/' + id + '.html', {responseType: "text" });
  }
}
