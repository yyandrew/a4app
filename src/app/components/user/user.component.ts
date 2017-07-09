import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
    this.name = 'Andrew';
    this.age = 29;
    this.email = "andrew@ekohe.com";
    this.address = {
      street: 'Shanghai'
    }
    this.hobbies = ['write code', 'watch films']
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  onClick() {
    this.name = 'andrew';
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby)
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address{
  street: string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
