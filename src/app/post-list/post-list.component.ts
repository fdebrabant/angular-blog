import { Component, OnInit } from '@angular/core';
import { Post } from '../post-list-item/models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts!: Post[];

  constructor(public postService: PostService) { }


  ngOnInit(): void {
    this.posts = this.postService.posts
  }

}
