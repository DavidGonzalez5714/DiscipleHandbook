import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHandsPraying, faBookBible } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  faHeart = faHeart;
  faHandsPraying = faHandsPraying;
  faBookBible = faBookBible;

  constructor(private article: ArticleService) {
    this.article.emitShowHome(false);
  }
}
