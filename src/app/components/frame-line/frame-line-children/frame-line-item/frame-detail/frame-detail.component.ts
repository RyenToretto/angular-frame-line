import { Component, Input, OnInit } from '@angular/core';

import {frameLineItemType} from '../../../frame-line.declare';

@Component({
    selector: 'app-frame-detail',
    templateUrl: './frame-detail.component.html'
})
export class FrameDetailComponent implements OnInit {
    @Input() frameDetail: frameLineItemType;

    constructor() {}

    ngOnInit(): void {}

}
