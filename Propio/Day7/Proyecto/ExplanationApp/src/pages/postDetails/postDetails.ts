import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../services/posts';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService, Message } from '../../services/messages';
import { NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-post-details',
  templateUrl: 'postDetails.html'
})
export class PostDetailsPage implements OnInit, OnDestroy {

  private post: Post;
  public messages: Message[];
  public form: FormGroup;

  public newMessage: Message;

  public isLoading: boolean = true;
  public isSubmitting: boolean = false;


  private getSubscription: Subscription;

  constructor(private navParams: NavParams,
    private messagesService: MessagesService,
    private formBuilder: FormBuilder, ) {

  }

  ngOnInit() {
    this.post = this.navParams.get('post');
    this.getSubscription = this.messagesService.getMessages(this.post.id)
      .subscribe((mes: any) => {
        this.messages = mes;
        console.log(this.messages);
        this.isLoading = false;
      }, () => {
        console.log("Error al cargar mensajes");
        this.isLoading = false;

      })

    this.form = this.formBuilder.group({
      content: [''],
    })
  }

  ngOnDestroy() {
    if (this.getSubscription) {
      this.getSubscription.unsubscribe();
    }
  }

  addMessage() {
    this.isSubmitting = true;
    this.newMessage = {
      "author" : 'Ramon',
      "postId": this.post.id,
      "timestamp": + new Date(),
      "content": this.form.value.content     
     };
     console.log(this.newMessage);

    this.getSubscription = this.messagesService.addMessage(this.newMessage)
      .subscribe(() => {
        this.isSubmitting = false;
        console.log("Post creado");
      }, () => {
        this.isSubmitting = false;
        console.log("Error al crear");
      });
  }
}
