import { Injectable } from '@angular/core';

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

  getPost(_id: string){
    return this.webService.get("post/" + _id);
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
