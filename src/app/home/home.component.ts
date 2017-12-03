import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../shared/classes/news-item';
import { NewsItemService } from './services/news-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  newsItems: NewsItem[];

  constructor(private newsItemService: NewsItemService) { }

  ngOnInit() {
    this.getNewsItems();
  }

  getNewsItems() {
    this.newsItemService.getAllNewsItems().subscribe(
      newsItems => this.newsItems = newsItems
    )
  }
}
