import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Post[] = [
    new Post('Paulo', 'Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava atoa na pista o meu amor me chamou"),
    new Post('João', 'Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava atoa na pista o meu amor me chamou"),
    new Post('Marcelo', 'Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava atoa na pista o meu amor me chamou"),
    new Post('Paulo', 'Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava atoa na pista o meu amor me chamou"),
    new Post('João', 'Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava atoa na pista o meu amor me chamou"),
    new Post('Marcelo', 'Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava atoa na pista o meu amor me chamou"),
  ];

  constructor(private http: HttpClient) {
    this.http.get("/api/").subscribe(
    (posts:any)=>{
      for(let p of posts){
        this.posts.push(
          new Post(
            p.name, 
            p.title, 
            p.subtitle, 
            p.email, 
            p.message, 
            p.file, 
            p.id, 
            p.likes
          )
        )
      }
    }
    );
  }
}
