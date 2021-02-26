import { Component, OnInit, Input } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() 
  posts!: Post;

  like: boolean = false;
  dislike: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  // Oncount(number: number) {
  //   if (this.like === true) {
  //     number = number + 1
  //   }
  // }

  Onlike(): void {
    // if (this.dislike === false) {
    //   this.like === false;
    // } else {
    //   this.like = !this.like;
    // }

    this.like = !this.like;
  }

  Ondislike(): void {
    // if (this.like === false) {
    //   this.dislike === false;
    // } else {
    //   this.dislike = !this.dislike;
    // }

    this.dislike = !this.dislike;
  }


}
