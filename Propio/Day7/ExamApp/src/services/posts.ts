import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Post {
  id: number,
  author: string,
  timestamp: number,
  content: string
}

@Injectable()
export class PostsService {

  private readonly postsEndpoint;

  private posts: [Post];

  constructor(private http: HttpClient) {

    this.postsEndpoint = 'http://localhost:3000/posts';
  }

  getPosts(): Observable<[Post]> {

    return <Observable<[Post]>> this.http.get(this.postsEndpoint)
      .map((posts: [Post]) => {

        this.posts = posts;

        return this.posts;
      });
  }

  addPost(post: Post): Observable<Post> {

    return null;
  }
}
