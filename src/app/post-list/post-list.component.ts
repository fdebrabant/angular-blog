import { Component, OnInit } from '@angular/core';
import { Post } from '../post-list-item/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts!: Post[];
  public postOne!: Post;
  public postTwo!: Post;
  public postThree!: Post;


  ngOnInit(): void {
    this.postOne = new Post (
      "How to cook a pizza", 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus libero quas aliquid provident ipsa ratione.",
      8,
      'Date'
    )

    this.postTwo = new Post (
      "How fix a problem", 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus libero quas aliquid provident ipsa ratione.",
      12,
      'Date'
    )

    this.postThree = new Post (
      "How to say 'I want break up' to Brad Pitt", 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus libero quas aliquid provident ipsa ratione.",
      54,
      'Date'
    )

    this.posts = [this.postOne, this.postTwo, this.postThree]
  }

  // TO DO FIX THE DATE

}
