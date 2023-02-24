import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostService } from './post.service';
import { Post } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Album_Fotos_Angular';
  public posts:Post[]=[];

  constructor(
    private dialog: MatDialog,
    private postService: PostService
    ){}
  
  ngOnInit(){
    this.posts = this.postService.posts;
  }

  openDialog(){
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(
      (result)=>{
        if (result) {
          console.log(result);
          
        }
      }
    )
  }
}