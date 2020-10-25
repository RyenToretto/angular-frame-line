import { Component, Input, OnInit } from '@angular/core';

import { frameLineItemType } from '../../frame-line.declare';

@Component({
    selector: 'app-frame-line-item',
    templateUrl: './frame-line-item.component.html'
})
export class FrameLineItemComponent implements OnInit {

    @Input() onlyOne: Boolean;
    @Input() firstFrame: Boolean;
    @Input() lastFrame: Boolean;

    @Input() frameLineItem: frameLineItemType;

    constructor() {}

    ngOnInit(): void {}

}
