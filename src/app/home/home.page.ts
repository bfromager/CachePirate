// https://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image
// https://devdactic.com/ionic-canvas-drawing-files/

// https://ionicframework.com/docs/api/components/content/Content/

import { Component } from '@angular/core';
import {Piece} from '../services/piece';
import {Plateau} from '../services/plateau';
import {compareMatrix, debugMatrix, debugMatrixArray, Matrix, rotateMatrix} from '../services/matrix';
import {ArrangementService} from '../services/arrangements.service';
import {Solution, SolutionsService} from '../services/solutions.service';
import {shuffleArray} from '../services/array';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public imgs: string[] = [
        "",
        "assets/img/Boussole.png",
        "assets/img/Drapeau.png",
        "assets/img/LongueVue.png",
        "assets/img/Bateau.png",
        "assets/img/Carte.png",
    ]

    private _plateau = new Plateau( [
        [   [1,0,1],
            [0,0,0],
            [2,0,3]
        ],
        [   [0,0,3],
            [0,4,0],
            [5,0,2]
        ],
        [   [4,0,2],
            [0,5,0],
            [0,0,2]
        ],
        [   [1,0,4],
            [0,2,0],
            [0,0,5]
        ]
    ]);

    private _pieces: Piece[] = [
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
        ]),
        // new Piece([
        //     [true,false,true],
        //     [false,false,false],
        //     [true,false,false]
        // ]),
    ];

    private _uniqueSolutions: Solution[] = []
    private _problems: Solution[] = []
    public display: string[][];

    constructor() {
        let solutionsService = new SolutionsService(this._plateau,this._pieces);
        this._uniqueSolutions = solutionsService.getSolutions();
        console.log(this._uniqueSolutions);
        this.updateDisplay();
    }

    initProblems() {
        for (let p of this._uniqueSolutions)
            this._problems.push(p);

        shuffleArray(this._problems);
    }

    updateDisplay() {
        if (this._problems.length == 0) this.initProblems();

        let currentProblem = this._problems.shift();
        let imgs = [];
        for (let i=1; i < currentProblem.imagesCount.length; ++i) {
            let count = currentProblem.imagesCount[i];
            if (count != 0) {
                let line = [];
                for (let j = 0; j< count; ++j )
                    line.push(this.imgs[i]);
                imgs.push(line);
            }
        }
        shuffleArray(imgs);
        this.display = [];
        for (let line of imgs)
            this.display.push(line);

        // console.log(this.display);
        console.log(currentProblem);
    }

    refresh(event) {
        this.updateDisplay()
        event.target.complete();
    }
}
