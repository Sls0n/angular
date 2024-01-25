import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  constructor() {}

  toggleItem(wish: WishItem) {
    wish.isComplete = !wish.isComplete;
  }
}
