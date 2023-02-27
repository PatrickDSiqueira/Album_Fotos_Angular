import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  constructor(
    private postService : PostService){}

  @Input() post!:Post;

  like() {
    if (this.post.id != undefined) {
      this.postService.like(this.post.id);
    }

    
  }
  delete() {
    if (this.post.id != undefined) {
      this.postService.delete(this.post.id);
    }
  }
  
}
