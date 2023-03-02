import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable, ObservableNotification, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DiscipleHandbook';
  faArrowLeft = faArrowLeft;
  public showBackButton: Observable<any>;

  constructor(public article: ArticleService, ) {
    this.showBackButton = this.article.navHome;
   }
}
