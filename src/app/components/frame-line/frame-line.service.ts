import { Injectable } from '@angular/core';

import { frameLineItemType } from './frame-line.declare';

@Injectable({
    providedIn: 'root'
})
export class FrameLineService {

    // frameLineData 缓存
    frameLineData: frameLineItemType[] = [
        {
            topFrame: true,
            frameLineChildren: [
                {
                    topFrame: false,
                    frameLineChildren: [
                        {
                            topFrame: false
                        }
                    ]
                }
            ]
        },
    ];

    constructor() {}

    // 往缓存中 添加一个 item
    addFrameLine() {}

    // 清空缓存
    clearFrameLine() {}
}
