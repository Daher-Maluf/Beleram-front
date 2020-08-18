import { ActivatedRoute } from '@angular/router';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Post from '../../../compartido/modelos/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  public post: Post;

  constructor(
    // tslint:disable-next-line: variable-name
    private _postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;

      this._postService.getPost(id).subscribe(
        (result: any) => {
          this.post = result.post;
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
