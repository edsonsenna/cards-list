import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-bar',
    templateUrl: './card-bar.component.html'
})
export class CardBarComponent {

    @Input() data: any;
}