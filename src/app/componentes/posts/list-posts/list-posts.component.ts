import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import Post from '../../../compartido/modelos/post.interface';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
   // Propiety with posts
   public posts: Array<Post>;


  // tslint:disable-next-line: variable-name
  constructor(private _postService: PostService) { 
    this.posts = [];
  }

  ngOnInit(): void {
    this._postService.getAllPosts().subscribe(
      (result: Array<Post>) => {
        result.forEach((element, i) => {
          this.posts.push(element);
        });
      },
      err => {
        console.log(err);
      }
    );
  }

}
