import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  title!: string
  content!: string 

  constructor(private _postService: PostService, private _route: ActivatedRoute) { }
  

  ngOnInit(): void {
    const id = parseInt(this._route.snapshot.params['id']);
    const post = this._postService.getPostById(id);
    if (post != null) {
      this.title = post.title;
      this.content = post.content;
    }
  }

}
