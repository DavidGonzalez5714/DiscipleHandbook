import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-controler',
  templateUrl: './article-controler.component.html',
  styleUrls: ['./article-controler.component.css']
})
export class ArticleControlerComponent implements OnInit {
  public content: string = '';
  private id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private article: ArticleService,
    public domSanitizer: DomSanitizer
  ) { 
    this.article.emitShowHome(true);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.content = '';
      this.id = params['id'];
      this.getHtml( );
    });
  }

  getHtml() {
    this.article.getHtml(this.id)
      .subscribe((data: string) => {
        this.content = data;
      });
  }
}
