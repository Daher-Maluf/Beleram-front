import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Post from "../../../compartido/modelos/post.interface";


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
  providers: [PostService]
})
export class ListPostsComponent implements OnInit {

  // Propiety with posts
  public posts: Array<Post>;

  constructor(
    private _postService: PostService
  ) {
    this.posts = [];
   }

  ngOnInit(): void {
    this._postService.getAllPosts().subscribe(
      (result: Array<Post>) => {
        result.forEach((element, i) => {
          this.posts.push(element);
        });
        console.log(this.posts)
      },
      err => {
        console.log(err)
      }
    )
  }

}
