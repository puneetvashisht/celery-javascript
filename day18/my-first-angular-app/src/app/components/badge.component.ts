import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `
    <button (click)="handleClick()" type="button" class="btn btn-primary">
        {{caption}} <span class="badge text-bg-secondary">{{count}}</span>
    </button>
  `,

})
export class BadgeComponent {

  count: number= 0;
  @Input('caption')caption: string = "Default Caption"

  handleClick(){
    console.log('click event from angular button');
    this.count++;
  }
}
