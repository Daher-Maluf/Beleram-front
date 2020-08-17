import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';
import Post from '../../compartido/modelos/post.interface';






@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private webService: WebService) {

  }
  getAllPosts() {
   return this.webService.get('posts');
  }
  createPost(title: string) {
    return this.webService.post('save-post', {title});
  }

  updatePost(title: string, _id: string) {
    return this.webService.patch(`update-post/${_id}`, {title});
  }

  deletePost( _id: string) {
    return this.webService.delete(`delete-post/${_id}`);
  }






}
