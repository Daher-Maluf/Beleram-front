import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebService {

  readonly ROOT_URL;

  constructor(private http: HttpClient ) {
    this.ROOT_URL = 'http://localhost:2000';
  }
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  // tslint:disable-next-line: ban-types
  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  // tslint:disable-next-line: ban-types
  patch(uri: string, payload: Object ) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  // Service to send images

  makeFileRequest(url: string, params: Array<File>, files: Array<File>, name: string) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        // tslint:disable-next-line: triple-equals
        if (xhr.readyState == 4) {
          // tslint:disable-next-line: triple-equals
          if (xhr.status == 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}

