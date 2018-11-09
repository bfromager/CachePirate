import {debugMatrix, Matrix} from './matrix';

export type Case = Matrix<number>;

export class Plateau {
    private _cases : Case[] = [];

    constructor(cases?: Case[]) {
        if (cases) this.setCases(cases);
    }

    getCases(): Case[] {
        return this._cases.slice();
    }

    setCases(cases: Case[]) {
        this._cases = cases;
        this.debugPlateau();
    }

    private debugPlateau() {
        console.log("");
        for (let _case of this._cases) {
            debugMatrix(_case);
        }
    }

}
