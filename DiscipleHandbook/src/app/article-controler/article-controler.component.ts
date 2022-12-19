import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
//this won't work in prod deployment, but only need to resolve this route to work
import * as data from '../../assets/test.json';
import * as _ from 'lodash';
import { templateSettings } from 'lodash';


@Component({
  selector: 'app-article-controler',
  templateUrl: './article-controler.component.html',
  styleUrls: ['./article-controler.component.css']
})
export class ArticleControlerComponent implements OnInit {
  public content: string = '';
  public articles: any = (data as any).default;
  private id: number = 0;
  public title: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.content = '';
      this.id = params['id'];

      this.getArticleById();
    });
  }

  getArticleById(): void{
    let article = _.find(this.articles, (x) => x.id == this.id);

    if(article){
      this.content = article.body;
      this.title = article.title;
    }
  }
}
