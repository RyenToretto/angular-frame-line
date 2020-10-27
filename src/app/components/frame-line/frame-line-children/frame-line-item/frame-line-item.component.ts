import { Component, Input, OnInit } from '@angular/core';

import { frameLineItemType } from '../../frame-line.declare';
import {FrameLineService} from "../../frame-line.service";

@Component({
    selector: 'app-frame-line-item',
    templateUrl: './frame-line-item.component.html'
})
export class FrameLineItemComponent implements OnInit {

    @Input() onlyOne: Boolean;
    @Input() firstFrame: Boolean;
    @Input() lastFrame: Boolean;

    @Input() frameLineItem: frameLineItemType;

    addFrameItemPopper: boolean = false;

    constructor(private frameLineService: FrameLineService) {}

    ngOnInit(): void {}

    toggleFrameItemDetail(): void {
        this.frameLineService.toggleFrameItemOpen(this.frameLineItem);
    }

    toggleAddFrameItemPopper(): void {
        this.addFrameItemPopper = !this.addFrameItemPopper;
    }

    // 新并行元素
    addFrameItemIntoArray(parentFrameLine): void {
        console.log('--addFrameItemIntoArray(parentFrameLine)-->');
        console.log(parentFrameLine);

        this.frameLineService.addFrameLineIntoArray(parentFrameLine);
        this.addFrameItemPopper = false; // 最后关闭 popper
    }

    // 新 action
    addFrameItem(parentFrameLine): void {
        console.log('--addFrameItem(parentFrameLine)-->');
        console.log(parentFrameLine);

        this.frameLineService.addFrameLineItem(parentFrameLine);
        this.addFrameItemPopper = false; // 最后关闭 popper
    }

}
