// https://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image
// https://devdactic.com/ionic-canvas-drawing-files/

// https://ionicframework.com/docs/api/components/content/Content/

import { Component } from '@angular/core';
import {Piece} from '../services/piece';
import {Plateau} from '../services/plateau';
import {compareMatrix, debugMatrix, debugMatrixArray, Matrix, rotateMatrix} from '../services/matrix';
import {ArrangementService} from '../services/arrangements.service';
import {Solution, SolutionsService} from '../services/solutions.service';

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

        // // let m: Matrix<number> = [[11,12,13,14,15], [21,22,23,24,25], [31,32,33,34,35],[41,42,43,44,45],[51,52,53,54,55]];
        // let m: Matrix<number> = [[11,12,13], [21,22,23], [31,32,33]];
        // // debugMatrix(m);
        // let m1 = (rotateMatrix(m,0));
        // let m2 = (rotateMatrix(m,1));
        // let m3 = (rotateMatrix(m,1));
        // let m4 = (rotateMatrix(m,1));
        // debugMatrix(m);
        // debugMatrix(m1);
        // console.log(compareMatrix(m,m1));
        // debugMatrix(m2);
        // console.log(compareMatrix(m,m2));
        // debugMatrix(m3);
        // console.log(compareMatrix(m,m3));
        // debugMatrix(m4);
        // console.log(compareMatrix(m,m4));

        // let piece = new Piece([
        //     [0,1,2],
        //     [3,4,5],
        //     [6,7,8]
        // ]);
        // console.log("------------");
        // piece.setMask([[0,0,0], [0,8,0], [0,0,0]]);
        // console.log("------------");
        // piece.setMask([[1,0,0], [0,8,0], [0,0,0]]);
        // console.log("------------");
        // piece.setMask([[1,0,0], [0,8,0], [0,0,1]]);

        // let plateau = new Plateau( [
        //     [[111,112,113],[121,122,123],[131,132,133]],
        //     [[211,212,213],[221,222,223],[231,232,233]],
        //     // [[311,312,313],[321,322,323],[331,332,333]],
        //     // [[411,412,413],[421,422,423],[431,432,433]]
        //     ]
        // );
        let plateau = new Plateau( [
                [   [1,0,1],
                    [0,0,0],
                    [2,0,3]],

                [   [0,0,3],
                    [0,4,0],
                    [5,0,2]],

                [   [4,0,2],
                    [0,5,0],
                    [0,0,2]],

                [   [1,0,4],
                    [0,2,0],
                    [0,0,5]]
            ]
        );

        let pieces: Piece[] = [
            new Piece([
                [true,false,false],
                [false,false,false],
                [false,false,false]
            ]),
            new Piece([
                [true,false,false],
                [false,false,false],
                [false,false,true]
            ]),
            new Piece([
                [true,false,true],
                [false,false,false],
                [false,false,false]
            ]),
            new Piece([
                [true,false,false],
                [false,true,false],
                [false,false,false]
            ])
        ];

        // debugMatrixArray(pieces[0].getPositions());

        let solutionsService = new SolutionsService(plateau,pieces);
        let uniqueSolution: Solution[] = solutionsService.getSolutions();
        console.log(uniqueSolution);

    }
}
