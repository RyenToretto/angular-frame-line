import { Component, OnInit } from '@angular/core';

import {FrameLineService} from './frame-line.service';

@Component({
    selector: 'app-frame-line',
    templateUrl: './frame-line.component.html'
})
export class FrameLineComponent implements OnInit {

    // 属性必须是公共属性，因为你将会在模板中绑定到它
    constructor(public frameLineService: FrameLineService) {}

    ngOnInit(): void {}

}
