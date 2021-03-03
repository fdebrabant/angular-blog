import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor(public postService: PostService) {}

  @Input() posts!: Post;
  @Input() id!: number;

   like: any;
   dislike: any;

  ngOnInit(): void {
    this.like = this.postService.like;
    this.dislike = this.postService.dislike;
  }

  Onlike(): void {
    this.like = !this.like;
  }

  Ondislike(): void {
    this.dislike = !this.dislike;
  }

}
