import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Go to the movies'),
    new WishItem('Get Coffee'),
    new WishItem('Go to the store', true),
  ];

  listFilter = '0'; // like state in React

  newWishText = ''; // like value in React

  title = 'angular';

  get visibleItems(): WishItem[] {
    let value = this.listFilter;

    if (value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter((item) => !item.isComplete);
    } else {
      return this.items.filter((item) => item.isComplete);
    }
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
