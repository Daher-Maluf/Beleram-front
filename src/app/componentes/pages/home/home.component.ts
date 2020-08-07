import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fecha: Date = new Date();
 public posts:{
     id:string;
     titlePost:string;
     contentPost:string;
     imagePost:string;
  }[]=[
    {
      id: '1',
      titlePost: 'Post One',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipiscing, elit etiam vestibulum mauris praesent, tortor magnis potenti montes nibh. Tristique ultricies ac netus felis quisque dui platea sociosqu condimentum convallis senectus quis, faucibus`,
      imagePost: 'https://images.unsplash.com/photo-1523783419860-28486a354a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

    },
    {
      id: '2',
      titlePost: 'Post Two',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipiscing, elit etiam vestibulum mauris praesent, tortor magnis potenti montes nibh. Tristique ultricies ac netus felis quisque dui platea sociosqu condimentum convallis senectus quis, faucibus`,
      imagePost: 'https://images.unsplash.com/photo-1572698602597-cb50457f1205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'

    },
    {
      id: '3',
      titlePost: 'Post Three',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipiscing, elit etiam vestibulum mauris praesent, tortor magnis potenti montes nibh. Tristique ultricies ac netus felis quisque dui platea sociosqu condimentum convallis senectus quis, faucibus`,
      imagePost: 'https://images.unsplash.com/photo-1581092916357-5896ebc48073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

    },
    {
      id: '4',
      titlePost: 'Post Four',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipiscing, elit etiam vestibulum mauris praesent, tortor magnis potenti montes nibh. Tristique ultricies ac netus felis quisque dui platea sociosqu condimentum convallis senectus quis, faucibus`,
      imagePost: 'https://images.unsplash.com/photo-1537211366831-cf5f26762d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
