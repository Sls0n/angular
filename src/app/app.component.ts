import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items: WishItem[] = [
    new WishItem('Go to the movies'),
    new WishItem('Go to the store', true),
   ];
  title = 'angular';
}
