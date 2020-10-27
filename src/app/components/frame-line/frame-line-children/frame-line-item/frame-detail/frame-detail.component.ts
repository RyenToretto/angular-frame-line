import { Component, Input, OnInit } from '@angular/core';

import {frameLineItemType} from '../../../frame-line.declare';
import {FrameLineService} from '../../../frame-line.service';

@Component({
    selector: 'app-frame-detail',
    templateUrl: './frame-detail.component.html'
})
export class FrameDetailComponent implements OnInit {
    @Input() frameDetail: frameLineItemType;

    constructor(public frameLineService: FrameLineService) {}

    ngOnInit(): void {}

}
