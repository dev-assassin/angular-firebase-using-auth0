import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: `
    <div [ngClass]="{'inline': inline, 'text-center': !inline, 'py-2': !inline}">
      <img src="/assets/images/loading.svg">
    </div>
  `,
  styleUrls: [`
    .inline {
      display: inline-block;
    }

    img {
      height: 80px;
      width: 80px;
    }

    .inline img {
      height: 24px;
      width: 24px;
    }
  `]
})
export class LoadingComponent {

  @Input() inline: boolean;

}
