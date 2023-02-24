import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../posts';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent {
  private dados ={
    post: new Post('','','','',''),
    file : ''
  }
  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>) {}
}
