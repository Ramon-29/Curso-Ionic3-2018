import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../services/posts';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from '../../services/messages';
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-post-details',
  templateUrl: 'postDetails.html'
})
export class PostDetailsPage implements OnInit, OnDestroy {

  private post: Post;

  private getSubscription: Subscription;

  constructor(private navParams: NavParams,
              private messagesService: MessagesService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
