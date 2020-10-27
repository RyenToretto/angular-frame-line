import { Injectable } from '@angular/core';

import { frameLineItemType } from './frame-line.declare';

@Injectable({
    providedIn: 'root'
})
export class FrameLineService {
    // frameLineMap 缓存
    frameLineMap = {
        keyChina: { open: true },

        keyZhangJiaJie: { open: false },
        keyCiLi: { open: false },

        keyHobby: { open: false },
        keyRouRou: { open: false },
        keyWuGui: { open: false },

        keyJiLin: { open: false },
        keyChangchun: { open: false },
        keyLiaoYuan: { open: false },
        keyBorn: { open: false },
    };

    // frameLineData 缓存
    frameLineData: frameLineItemType[] = [
        {
            topFrame: true,
            title: '中国',
            mapKey: 'keyChina',
            frameLineChildren: [
                {
                    topFrame: false,
                    title: '湖南省',
                    mapKey: 'keyZhangJiaJie',
                    frameLineChildren: [
                        {
                            topFrame: false,
                            title: '张家界市',
                            mapKey: 'keyCiLi',
                        }
                    ]
                },
                {
                    topFrame: false,
                    title: '爱好',
                    mapKey: 'keyHobby',
                    frameLineChildren: [
                        {
                            topFrame: false,
                            title: '肉肉',
                            mapKey: 'keyRouRou',
                        },
                        {
                            topFrame: false,
                            title: '乌龟',
                            mapKey: 'keyWuGui',
                        }
                    ]
                },
                {
                    topFrame: false,
                    title: '吉林省',
                    mapKey: 'keyJiLin',
                    frameLineChildren: [
                        {
                            topFrame: false,
                            title: '长春市',
                            mapKey: 'keyChangchun',
                        },
                        {
                            topFrame: false,
                            title: '辽源市',
                            mapKey: 'keyLiaoYuan',
                            frameLineChildren: [
                                {
                                    topFrame: false,
                                    title: '出生地',
                                    mapKey: 'keyBorn',
                                }
                            ]
                        }
                    ]
                },
            ]
        },
    ];

    constructor() {}

    // 折叠/打开
    toggleFrameItemOpen(parentFrameLine) {
        this.frameLineMap[parentFrameLine.mapKey].open = !this.frameLineMap[parentFrameLine.mapKey].open;
    }

    // 新并行元素
    addFrameLineIntoArray(parentFrameLine) {
        const mapKey = 'keyNewBingXing' + Date.now();

        if (parentFrameLine.frameLineChildren) {
            parentFrameLine.frameLineChildren.push({
                topFrame: false,
                title: '存在数组 则新增',
                mapKey,
            });
        } else { // 不存在数组 则创建数组
            parentFrameLine.frameLineChildren = [{
                topFrame: false,
                title: '不存在数组 则创建数组',
                mapKey,
            }];
        }
        this.frameLineMap[mapKey] = { open: false };
    }

    // 新 item
    addFrameLineItem(parentFrameLine) {
        const mapKey = 'keyNewAction' + Date.now();
        parentFrameLine.frameLineChildren = [{
            topFrame: false,
            title: '新 action',
            mapKey,
            frameLineChildren: parentFrameLine.frameLineChildren
        }];
        this.frameLineMap[mapKey] = { open: false };
    }

    // 清空缓存
    clearFrameLine() {}
}
