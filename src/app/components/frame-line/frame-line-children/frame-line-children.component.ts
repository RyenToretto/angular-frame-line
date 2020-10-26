import { Component, Input, OnInit } from '@angular/core';

import { frameLineItemType } from '../frame-line.declare';

@Component({
    selector: 'app-frame-line-children',
    templateUrl: './frame-line-children.component.html'
})
export class FrameLineChildrenComponent implements OnInit {

    @Input() frameLineChildren: frameLineItemType[];

    constructor() {}

    ngOnInit(): void {}

    trackByFn(index, item) {
        return item.mapKey;
    }

}
