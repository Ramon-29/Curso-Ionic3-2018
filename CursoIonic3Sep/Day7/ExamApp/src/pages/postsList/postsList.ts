import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post, PostsService } from '../../services/posts';
import { Subscription } from 'rxjs/Subscription';
import {PostDetailsPage} from '../postDetails/postDetails';

@Component({
  selector: 'page-posts-list',
  templateUrl: 'postsList.html'
})
export class PostsListPage implements OnInit, OnDestroy {

  private posts: [Post];

  private getSubscription: Subscription;

  constructor(private navCtrl: NavController,
              private postsService: PostsService) {

  }

  ngOnInit() {

    this.getSubscription = this.postsService.getPosts()
      .subscribe((posts: [Post]) => {

        this.posts = posts;
      })
  }

  ngOnDestroy() {

    if(this.getSubscription) {
      this.getSubscription.unsubscribe();
    }
  }
}
