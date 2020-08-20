import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import Post from '../../../compartido/modelos/post.interface';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

<<<<<<< HEAD

=======
>>>>>>> aa02e2683976d1c051d1aff51bb0a1fb2bbc67de
  public post: Post = new Post();

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

  // public post:{
  //   id: string;
  //   titlePost: string;
  //   contentPost: string;
  //   imagePost: string;
  // } = {
  //   id: '1',
  //   titlePost: 'Post One',
  //   contentPost: `Lorem ipsum dolor sit amet consectetur adipiscing, elit etiam vestibulum mauris praesent, tortor magnis potenti montes nibh. Tristique ultricies ac netus felis quisque dui platea sociosqu condimentum convallis senectus quis, faucibus`,
  // tslint:disable-next-line: max-line-length
  //   imagePost: 'https://images.unsplash.com/photo-1523783419860-28486a354a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  // }
  // constructor(private route:ActivatedRoute) { }

  // ngOnInit(): void {
  //  this.post.id = this.route.snapshot.params.id; 
  // }

}
}
