import { NgModule } from '@angular/core';

import { CardsListComponent } from './cards-list/cards-list.component';
import { CardDirective } from './card/card.directive';
import { CardFooComponent } from './templates/card-foo/card-foo.component';
import { CardBarComponent } from './templates/card-bar/card-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CardDirective, CardsListComponent, CardFooComponent, CardBarComponent],
    imports: [CommonModule],
    exports: [CardsListComponent],
    entryComponents: [CardFooComponent, CardBarComponent]
})
export class CardsModule {}