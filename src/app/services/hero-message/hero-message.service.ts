import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroMessageService {

    _timerId = 0;

    heroMessages: string[] = []; // heroMessages 缓存

    constructor() { }

    // 往缓存中添加一条消息
    addHeroMessage(heroMessage: string) {
        this.heroMessages.push(heroMessage);
        if (this._timerId) {
            clearTimeout(this._timerId);
        }
        this._timerId = setTimeout(() => this.clearHeroMessages(), 10000);
    }

    // 清空缓存
    clearHeroMessages() {
        this.heroMessages = [];
    }
}
