

import {ArrangementService} from './arrangements.service';
import {Plateau} from './plateau';
import {Piece} from './piece';
import {debugMatrixArray} from './matrix';

export class SolutionsService {
    private arrangementService = new ArrangementService();

    constructor(private Plateau: Plateau, private pieces : Piece[]) {
        let arrangement = this.arrangementService.getArrangement(pieces,2);
        for (let a of arrangement) {
            console.log("-----------");
            debugMatrixArray(a);
        }
        console.log(arrangement.length);
    }
}
