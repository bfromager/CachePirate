

import {ArrangementService} from './arrangements.service';
import {Case, Plateau} from './plateau';
import {Mask, Piece} from './piece';
import {debugMatrix, debugMatrixArray, Matrix} from './matrix';

export class SolutionsService {
    private arrangementService = new ArrangementService();

    constructor(private plateau: Plateau, private pieces : Piece[]) {
    }

    public getSolutions(){
        let arrangements = this.arrangementService.getArrangement(this.pieces,Math.min(this.pieces.length,4));
        for (let a of arrangements) {
            console.log("-----------");
            for (let p of a) {
                debugMatrix(p.piece.getMask(p.rotation));
            }
        }

        // for (let a of arrangements) {
        //     console.log("-----------");
        //     for (let p of a) {
        //         debugMatrix(p.piece.getMask(p.rotation));
        //     }
        // }

        // console.log(arrangements.length);
        // let _cases : Case[] = this.plateau.getCases();
        //
        // let c: Case = this.maskCase(_cases[1],arrangements[0][1]);
        // debugMatrix(c);
    }

    private maskCase(_case: Case, mask: Mask): Case  {
        let result: Case = [];
        for (let row in _case) {
            result[row]=[];
            for (let col in _case[row]) {
                result[row][col] = (mask[row][col] ? _case[row][col] : 0);
            }
        }
        return result;
    }
}
