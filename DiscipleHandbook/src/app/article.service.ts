import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  navHome: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor(private http: HttpClient) { }

  getHtml(id: number): Observable<string> {
    return this.http.get('assets/' + id + '.html', {responseType: "text" });
  }

  emitShowHome(value: boolean){
      this.navHome.next(value);
  }
}
