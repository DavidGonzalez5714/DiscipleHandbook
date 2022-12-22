import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHandsPraying, faBookBible } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  faHeart = faHeart;
  faHandsPraying = faHandsPraying;
  faBookBible = faBookBible;

  constructor() { }

  ngOnInit(): void {
  }

}
