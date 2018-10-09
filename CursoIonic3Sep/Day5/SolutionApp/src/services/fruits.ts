import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Fruit {
  id: number,
  name: string,
  image: string
  description: string,
  link: string
};

@Injectable()
export class FruitsService {

  private readonly fruitsEndpoint;

  constructor(private http: HttpClient) {

    this.fruitsEndpoint = 'http://localhost:3000/fruits';
  }

  getFruits(): Observable<[Fruit]> {

    return <Observable<[Fruit]>>
      this.http.get(this.fruitsEndpoint);
  }

  saveFruit(fruit: Fruit): Observable<Fruit> {

    return <Observable<Fruit>>
      this.http.put(`${this.fruitsEndpoint}/${fruit.id}`, fruit);
  }
}
