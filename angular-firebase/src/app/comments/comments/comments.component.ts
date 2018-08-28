import { Component } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  private _commentsCollection: AngularFirestoreCollection<Comment>;
  comments$: Observable<Comment[]>;
  loading = true;
  error: boolean;

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) {
    // Get latest 15 comments from Firestore, ordered by timestamp
    this._commentsCollection = afs.collection<Comment>(
      'comments',
      ref => ref.orderBy('timestamp').limit(15)
    );
  }

}
