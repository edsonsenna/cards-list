import { NgModule } from '@angular/core';

import { CardsListComponent } from './cards-list/cards-list.component';
import { CardDirective } from './card/card.directive';

@NgModule({
    declarations: [CardDirective, CardsListComponent],
    imports: [],
    exports: [CardsListComponent]
})
export class CardsModule {}