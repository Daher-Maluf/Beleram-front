import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
=======
    this._postService.getAllPosts().subscribe(
      (result: Array<Post>) => {
        result.forEach((element, i) => {
          this.posts.push(element);
        });
      },
      err => {
        console.log(err)
      }
    )
>>>>>>> aa02e2683976d1c051d1aff51bb0a1fb2bbc67de
  }

}
