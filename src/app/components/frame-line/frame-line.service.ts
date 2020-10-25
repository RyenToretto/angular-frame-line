import { Injectable } from '@angular/core';

import { frameLineItem } from './frame-line.declare';

@Injectable({
    providedIn: 'root'
})
export class FrameLineService {

    // frameLineData 缓存
    frameLineData: frameLineItem[] = [
        {
            topFrame: true,
            frameLineChildren: [
                {
                    topFrame: false
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
