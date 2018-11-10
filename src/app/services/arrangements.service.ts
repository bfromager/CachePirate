// Arrangements
// http://jeux-et-mathematiques.davalan.org/mots/comb/arr/index.html
/*


fonction arrangements(Liste L, Liste F, k) {
    si k est égal à 0, {
        afficher  L
    } sinon {
        pour tous les éléments x de l'ensemble F  {
            Liste G = F moins x  (F auquel on a ôté l'élément x)
            Liste L2  = L plus x (on a concaténé x à la droite de la liste L)
            arrangements(L2, G , k-1)
        }
}

arrangements("", (1,2,3,4,5,6), 3);

*/

import {Piece} from './piece';
import {Position} from './position.interface';
import {debugMatrix, debugMatrixArray} from './matrix';

export class ArrangementService {

    public getArrangement(pieces: Piece[], k: number): any[] {
        let result = [];
        this.arrange(pieces, k, [], result);
        return result;
    }

    private arrange(remainList: any[], k, fixedList: any[], resultList: any[]) {
        if (k == 0) {
            resultList.push(fixedList);
        } else {
            for (let i=0; i < remainList.length; ++i) {

                let piece: Piece = remainList[i];
                let positionCount = piece.getPositionCount();

                for (let r=0; r < positionCount; ++r) {
                    let newFixedList = fixedList.slice();
                    let newRemainList = remainList.slice();

                    let position: Position = <Position>{piece: piece, rotation: r};

                    newFixedList.push(position);
                    newRemainList.splice(i, 1);

                    this.arrange(newRemainList, k - 1, newFixedList, resultList);
                }
            }
        }
    }
}