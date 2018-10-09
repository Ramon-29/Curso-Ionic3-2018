import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './posts';

export interface Message {
  id?: number,
  postId: number,
  author: string,
  timestamp: number,
  content: string
}

@Injectable()
export class MessagesService {

  private readonly messagesEndpoint;

  private messages: {string: Message} = {} as {string: Message};

  constructor(private http: HttpClient) {

    this.messagesEndpoint = 'http://localhost:3000/messages';
  }

  getMessages(postId: number): Observable<[Message]> {

    return <Observable<[Message]>> this.http.get(this.messagesEndpoint)
      .map((messages: [Message]) => {

        this.messages[postId] = messages.filter(m => m.postId == postId);

        return this.messages[postId];
      });
  }

  addMessage(message: Message): Observable<Message> {

    return <Observable<Message>> this.http.post(this.messagesEndpoint, message)
      .map((message: Message) => {

        this.messages[message.postId].push(message);

        return message;
      });
  }
}
