// https://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image
// https://devdactic.com/ionic-canvas-drawing-files/

// https://ionicframework.com/docs/api/components/content/Content/

import { Component } from '@angular/core';
import {Piece} from '../services/piece';
import {Plateau} from '../services/plateau';
import {debugMatrix, Matrix, rotateMatrix} from '../services/matrix';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {
        // let a: number = 20;
        // let b: number = 50;
        // let c: boolean = true;
        // let d: boolean = false;
        // console.log(a && c, b && d, c && a, d && b);
        // let piece = new Piece([0,1,2,3,4,5,6,7,8]);
        // console.log("------------");
        // piece.setMask([0,0,0,0,0,0,0,0,8]);
        // console.log("------------");
        // piece.setMask([1,0,0,0,0,0,0,0,8]);
        // console.log("------------");
        // piece.setMask([1,0,0,0,1,0,0,0,8]);
        //
        // let plateau = new Plateau( [
        //     [0,1,2,3,4,5,6,7,8],
        //     [0,1,2,3,4,5,6,7,8],
        //     [0,1,2,3,4,5,6,7,8],
        //     [0,1,2,3,4,5,6,7,8]
        //     ]
        // );
        // let m: Matrix<number> = [[11,12,13,14,15], [21,22,23,24,25], [31,32,33,34,35],[41,42,43,44,45],[51,52,53,54,55]];
        let m: Matrix<number> = [[11,12,13], [21,22,23], [31,32,33]];
        // debugMatrix(m);
        debugMatrix(rotateMatrix(m,0));
        debugMatrix(rotateMatrix(m,1));
        debugMatrix(rotateMatrix(m,2));
        debugMatrix(rotateMatrix(m,3));
        debugMatrix(rotateMatrix(m,4));
    }
}
