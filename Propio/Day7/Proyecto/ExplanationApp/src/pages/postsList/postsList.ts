import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post, PostsService } from '../../services/posts';
import { Subscription } from 'rxjs/Subscription';
import {PostDetailsPage} from '../postDetails/postDetails';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-posts-list',
  templateUrl: 'postsList.html'
})
export class PostsListPage implements OnInit, OnDestroy {

  private posts: [Post];
  public form: FormGroup;

  public newPost: Post;

  private getSubscription: Subscription;

  public isLoading: boolean = true;
  public isSubmitting: boolean = false;

  constructor(private navCtrl: NavController,
              private postsService: PostsService,
              private formBuilder: FormBuilder,) {

  }

  ngOnInit() {

    this.getSubscription = this.postsService.getPosts()
      .subscribe((posts: [Post]) => {
        this.posts = posts;
        this.isLoading = false;
      }, () =>{
        console.log("error");
        this.isLoading = false;
      })

      this.form = this.formBuilder.group({
        content: [''],
      })
      
  }

  ngOnDestroy() {

    if(this.getSubscription) {
      this.getSubscription.unsubscribe();
    }
  }

  itemTapped(event, post) {
    this.navCtrl.push(PostDetailsPage, {
      post: post
    });
  }

  addPost(){
    this.isSubmitting = true;
     this.newPost = {
       "author" : 'Ramon',
       "timestamp": + new Date(),
       "content": this.form.value.content     
      };

    this.getSubscription = this.postsService.addPost(this.newPost)
      .subscribe(() => {
        console.log("Post creado");
        this.isSubmitting = false;
        this.ngOnInit();
      }, () => {
        this.isSubmitting = false;
        console.log("Error al crear");
      });
  }
}
