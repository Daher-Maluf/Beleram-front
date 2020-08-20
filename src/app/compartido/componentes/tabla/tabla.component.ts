import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { PostService } from '../../../componentes/posts/post.service';
import Post from '../../../compartido/modelos/post.interface';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['title', 'category', 'action'];
  dataSource: any = new MatTableDataSource();

  

  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postService: PostService) { }

  ngOnInit(){
    this.postService.getAllPosts()
        .subscribe(posts => (this.dataSource.data = posts));

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEditPost(post: Post) {
console.log('edit post', post);

  }
  // onDeletePost() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: `You won't be able to revert this!`,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then(result => {
  //     if (result.value) {
  //       this.postService.deletePost(post).then(() => {
  //         Swal.fire('Deleted!', 'Your  post has been deleted.', 'success');
  //       }).catch((error) => {
  //         Swal.fire('Error!', 'There was an error deleting this post', 'error');
  //       });
  //     }
  //   });

  // }
  onDeletePost(id: string){
  
   this.postService.deletePost(id)
   

  }

//   onDeletePost(post:string) {
// console.log('delete post', post);
// Swal.fire({
//    title: '¿Estas Seguro Que Deseas Eliminar Este Post?',
//    text: 'Ojo!! Los Cambios Son Irreversibles!',
//    icon: 'warning',
//    showCancelButton: true,
//    confirmButtonColor: '#91d18b',
//    cancelButtonColor: '#e11d74',
//    confirmButtonText: 'Si, Eliminar!'
//  }).then(  result => {
//   if (result.value) {
   
//     this.postService.deletePost(post).then(() => {
//       Swal.fire('Eliminado', 'Tu documento se ha eliminado.', 'success');
//     }).catch((error) => {
//       Swal.fire('Error', 'Ha ocurrido un error!!', 'error');
//     });
//   }
//  });
//  }
  onNewPost() {
    console.log('New Post');

  }

}
