import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NewsItem } from '../../shared/classes/news-item';

@Injectable()
export class NewsItemService {

  constructor() { }

  getAllNewsItems(): Observable<NewsItem[]> {
    let newsItems: NewsItem[] = [{
      id: 1,
      title: "A new project",
      body: "This is a fresh new project!"
    }, {
      id: 2,
      title: "This is my second news item",
      body: "Did you know that this is my second news item?"
    }, {
      id: 3,
      title: "This is my third news item",
      body: "Did you know that this is my third news item?"
    }];
    return Observable.of(newsItems);

  }
  // return this.http.get(this._carsUrl)
  //   .map(res => <Car[]>res.json())
  //   .catch(this.handleError);

}

