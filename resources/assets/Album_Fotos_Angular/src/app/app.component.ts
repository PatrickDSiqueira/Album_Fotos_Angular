import { Component } from '@angular/core';
import { Post } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Album_Fotos_Angular';
  public posts:Post[]=[
    new Post('Paulo','Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava a toa na pista o meu amor me chamou"),
    new Post('João','Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava a toa na pista o meu amor me chamou"),
    new Post('Marcelo','Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava a toa na pista o meu amor me chamou"),    
    new Post('Paulo','Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava a toa na pista o meu amor me chamou"),
    new Post('João','Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava a toa na pista o meu amor me chamou"),
    new Post('Marcelo','Meu Post', 'teste de Amanhã', 'Joao@gmail.com', "Estava a toa na pista o meu amor me chamou"),
  ]
}
