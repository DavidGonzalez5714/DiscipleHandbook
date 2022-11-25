import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleControlerComponent } from './article-controler.component';

describe('ArticleControlerComponent', () => {
  let component: ArticleControlerComponent;
  let fixture: ComponentFixture<ArticleControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleControlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
