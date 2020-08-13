import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WebService {

  readonly ROOT_URL;

  constructor(private http: HttpClient ) { 
    this.ROOT_URL = "http://localhost:2000";
  }
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  patch(uri: string,payload: Object ) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  // Service to send images

  makeFileRequest(url: string, params: Array<File>, files: Array<File>, name: string){
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      }

      xhr.open("POST", url, true);
      xhr.send(formData)
    })
  }
}

