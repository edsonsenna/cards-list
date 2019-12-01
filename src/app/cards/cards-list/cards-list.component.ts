import { Component, Input, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';

import { CardItem } from '../card/card-item';
import { CardDirective } from '../card/card.directive';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'cards-list',
    templateUrl: './cards-list.component.html'
})
export class CardsListComponent implements OnInit{

    @Input() component: CardItem;
    @ViewChild(CardDirective, {static: true}) cardHost: CardDirective;

    constructor(private componentFactoryResovler: ComponentFactoryResolver) {}

    ngOnInit() {

        const componentFactory = this.componentFactoryResovler.resolveComponentFactory(this.component.component);

        const viewContainerRef = this.cardHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<CardComponent>componentRef.instance).data = this.component.data;
    }
}