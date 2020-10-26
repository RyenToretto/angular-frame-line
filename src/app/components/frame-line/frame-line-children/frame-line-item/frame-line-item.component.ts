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

    addFrameItemPopper: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleAddFrameItemPopper(): void {
        this.addFrameItemPopper = !this.addFrameItemPopper;
    }

    // 新并行元素
    addFrameItemIntoArray(frameLineItem): void {
        console.log('--addFrameItemIntoArray(frameLineItem)-->');
        console.log(frameLineItem);
        if (frameLineItem.frameLineChildren) {
            frameLineItem.frameLineChildren.push({
                topFrame: false,
                title: '存在数组 则新增',
                mapKey: 'keyNewBingXing' + Date.now(),
            });
        } else { // 不存在数组 则创建数组
            frameLineItem.frameLineChildren = [{
                topFrame: false,
                title: '不存在数组 则创建数组',
                mapKey: 'keyNewBingXing' + Date.now(),
            }];
        }
        this.addFrameItemPopper = false; // 最后关闭 popper
    }

    // 新 action
    addFrameItem(frameLineItem): void {
        console.log('--addFrameItem(frameLineItem)-->');
        console.log(frameLineItem);

        const newChildren = [{
            topFrame: false,
            title: '新 action',
            mapKey: 'keyNewAction' + Date.now(),
            frameLineChildren: frameLineItem.frameLineChildren
        }];

        frameLineItem.frameLineChildren = newChildren;

        this.addFrameItemPopper = false; // 最后关闭 popper
    }

}
