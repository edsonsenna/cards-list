import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-foo',
    templateUrl: './card-foo.component.html'
})
export class CardFooComponent {

    @Input() data: any;
}