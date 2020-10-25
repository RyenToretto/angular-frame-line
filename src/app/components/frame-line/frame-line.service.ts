import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FrameLineService {

    frameLineData: string[] = [
        '0',
        '1',
        '22',
        '333',
    ]; // frameLineData 缓存

    constructor() {}

    // 往缓存中添加一条消息
    addFrameLine(heroMessage: string) {}

    // 清空缓存
    clearFrameLine() {}
}
