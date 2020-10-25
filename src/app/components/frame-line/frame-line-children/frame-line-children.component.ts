import { Component, Input, OnInit } from '@angular/core';

import { frameLineItem } from '../frame-line.declare';

@Component({
    selector: 'app-frame-line-children',
    templateUrl: './frame-line-children.component.html'
})
export class FrameLineChildrenComponent implements OnInit {

    @Input() frameLineChildren: frameLineItem[];

    constructor() {}

    ngOnInit(): void {}

}
