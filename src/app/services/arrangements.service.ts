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

import {Mask, Piece} from './piece';
import {debugMatrix, debugMatrixArray} from './matrix';

export class ArrangementService {

    public getArrangement(pieces: Piece[], k: number): any[] {
        let result = [];
        this.arrange(pieces, k, [], result);
        return result;
    }

    private arrange(remainList: any[], k, usedList: any[], resultList: any[]) {
        if (k == 0) {
            resultList.push(usedList);
        } else {
            for (let p=0; p < remainList.length; ++p) {
                let masks : Mask[] = remainList[p].getPositions();
                for (let r=0; r < masks.length; ++r) {
                    let newUsedList = usedList.slice();
                    let newRemainList = remainList.slice();

                    // newUsedList.push(remainList[p]);
                    newUsedList.push(masks[r]);
                    newRemainList.splice(p, 1);

                    this.arrange(newRemainList, k - 1, newUsedList, resultList);
                }
            }
        }
    }
}