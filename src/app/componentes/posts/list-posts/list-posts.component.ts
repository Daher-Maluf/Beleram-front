import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
  providers: [PostService]
})
export class ListPostsComponent implements OnInit {

  public posts: [];

  constructor(
    private _postService: PostService
  ) {
    this.posts = [];
   }

  ngOnInit(): void {
    this._postService.getAllPosts().subscribe(
      result => {
        result.forEach((element, i) => {
          this.posts.push(element);
        });
      },
      err => {
        console.log(err)
      }
    )
  }

}
