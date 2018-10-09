import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Recommendation {
  id: number,
  title: string,
  author: string
  content: string
};

@Injectable()
export class RecommendationsService {

  private readonly recsEndpoint;

  constructor(private http: HttpClient) {

    this.recsEndpoint = 'http://localhost:3000/recommendations';
  }

  getRecommendations(): Observable<[Recommendation]> {

    return <Observable<[Recommendation]>>
      this.http.get(this.recsEndpoint);
  }

  saveRecommendation(rec: Recommendation): Observable<Recommendation> {

    return <Observable<Recommendation>>
      this.http.put(`${this.recsEndpoint}/${rec.id}`, rec);
  }
}
