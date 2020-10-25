import { Injectable } from '@angular/core';

import { frameLineItemType } from './frame-line.declare';

@Injectable({
    providedIn: 'root'
})
export class FrameLineService {
    // frameLineAttr 缓存
    frameLineAttr = {
        attrChina: { open: true },

        attrZhangJiaJie: { open: false },
        attrCiLi: { open: false },

        attrHobby: { open: false },
        attrRouRou: { open: false },
        attrWuGui: { open: false },

        attrJiLin: { open: false },
        attrChangchun: { open: false },
        attrLiaoYuan: { open: false },
        attrBorn: { open: false },
    };

    // frameLineData 缓存
    frameLineData: frameLineItemType[] = [
        {
            topFrame: true,
            title: '中国',
            dataAttr: 'attrChina',
            frameLineChildren: [
                {
                    topFrame: false,
                    title: '湖南省',
                    dataAttr: 'attrZhangJiaJie',
                    frameLineChildren: [
                        {
                            topFrame: false,
                            title: '张家界市',
                            dataAttr: 'attrCiLi',
                        }
                    ]
                },
                {
                    topFrame: false,
                    title: '爱好',
                    dataAttr: 'attrHobby',
                    frameLineChildren: [
                        {
                            topFrame: false,
                            title: '肉肉',
                            dataAttr: 'attrRouRou',
                        },
                        {
                            topFrame: false,
                            title: '乌龟',
                            dataAttr: 'attrWuGui',
                        }
                    ]
                },
                {
                    topFrame: false,
                    title: '吉林省',
                    dataAttr: 'attrJiLin',
                    frameLineChildren: [
                        {
                            topFrame: false,
                            title: '长春市',
                            dataAttr: 'attrChangchun',
                        },
                        {
                            topFrame: false,
                            title: '辽源市',
                            dataAttr: 'attrLiaoYuan',
                            frameLineChildren: [
                                {
                                    topFrame: false,
                                    title: '出生地',
                                    dataAttr: 'attrBorn',
                                }
                            ]
                        }
                    ]
                },
            ]
        },
    ];

    constructor() {}

    // 往缓存中 添加一个 item
    addFrameLine() {}

    // 清空缓存
    clearFrameLine() {}
}
