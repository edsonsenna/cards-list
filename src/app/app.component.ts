import { Component, OnInit } from '@angular/core';
import { CardItem } from './cards/card/card-item';
import { CardFooComponent } from './cards/templates/card-foo/card-foo.component';
import { CardBarComponent } from './cards/templates/card-bar/card-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'cards-list';
  cardFoo: CardItem;
  cardBar: CardItem;

  ngOnInit() {
    this.cardFoo = new CardItem(CardFooComponent, {name: 'Edson'});
    this.cardBar = new CardItem(CardBarComponent, {name: 'Edson'});
  }


}
