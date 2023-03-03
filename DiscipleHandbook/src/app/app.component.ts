import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable, ObservableNotification, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DiscipleHandbook';
  faArrowLeft = faArrowLeft;
  public showBackButton: Observable<any>;

  constructor(public article: ArticleService, private router: Router) {
    this.showBackButton = this.article.navHome;
   }

   navHome(){
    this.router.navigateByUrl('');
   }
}
