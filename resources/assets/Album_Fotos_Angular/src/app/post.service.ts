import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Post } from './posts';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Post[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Post[]>("/api/").subscribe(
    (posts:Post[])=>{
      for(let p of posts){
        this.posts.push(
          new Post(p.name, p.title, p.subtitle, p.email, p.message, p.file, p.id, p.likes)
        )
      }
    }
    );
  }

  Salvar(post:Post, file: File){
    const uploadData= new FormData();
    console.log(post.message);
    
      uploadData.append('name', post.name);
      uploadData.append('email', post.email);
      uploadData.append('title', post.title);
      uploadData.append('subtitle', post.subtitle);
      uploadData.append('message', post.message);
      uploadData.append('file', file, file.name);
      
      this.http.post('/api/', uploadData, {reportProgress: true, observe: 'events'})
      .subscribe((response : any)=>{
        if (response.type == HttpEventType.Response) {
          // console.log(response);
          let p: any = response.body;
          this.posts.push(
            new Post(p.name, p.title, p.subtitle, p.email, p.message, p.file, p.id, p.likes)
          )
        }  

        if (response.type == HttpEventType.UploadProgress) {
          console.log("UploadPro gress");
          console.log(response);
        }
      })
  }

  like(id: number){
    this.http.get('/api/like/'+id).subscribe((response : any)=>{
      let p  = this.posts.find((p)=> p.id == id);

      if (p != undefined) {
        p.likes = response.likes;
        
      }
      
    })
  }


}
