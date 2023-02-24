import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../posts';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent {
  protected filename : string ="";
  protected dados = {
    post: new Post('', '', '', '', ''),
    file: null,
  }
  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>
  ) { }

  public changeFile(event: any) {
    this.dados.file = event.target.files[0];
    this.filename = event.target.files[0].name;
  }


  save(){
    this.dialogRef.close(this.dados)
  }

  cancel(){
    this.dialogRef.close(null);
  }

}
