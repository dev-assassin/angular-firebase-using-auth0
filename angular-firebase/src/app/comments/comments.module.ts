import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentsComponent, CommentFormComponent],
  exports: [CommentsComponent]
})
export class CommentsModule { }
