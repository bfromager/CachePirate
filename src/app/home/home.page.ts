// https://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image
// https://devdactic.com/ionic-canvas-drawing-files/

// https://ionicframework.com/docs/api/components/content/Content/

import { Component } from '@angular/core';
import {Piece} from '../services/piece';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {
        let a: number = 20;
        let b: number = 50;
        let c: boolean = true;
        let d: boolean = false;
        console.log(a && c, b && d, c && a, d && b);
        let piece = new Piece([0,1,2,3,4,5,6,7,8]);
        console.log("------------");
        piece.setMask([0,0,0,0,0,0,0,0,8]);
        console.log("------------");
        piece.setMask([1,0,0,0,0,0,0,0,8]);
        console.log("------------");
        piece.setMask([1,0,0,0,1,0,0,0,8]);
    }
}
