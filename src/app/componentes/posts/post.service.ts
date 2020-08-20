import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';
import { Observable } from 'rxjs';







@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private webService: WebService) {

  }
 public getAllPosts() {
   return this.webService.get('posts');
  }

  // tslint:disable-next-line: variable-name
  public getPost(_id: string): Observable<any> {
    return this.webService.get('post/' + _id);
  }

 public createPost(title: string): Observable<any> {
    return this.webService.post('save-post', {title});
  }

  // tslint:disable-next-line: variable-name
 public updatePost(title: string, _id: string): Observable<any> {
    return this.webService.patch(`update-post/${_id}`, {title});
  }

  // tslint:disable-next-line: variable-name
 public deletePost( _id: string): Observable<any> {
    return this.webService.delete(`delete-post/${_id}`);
  }

  






}
