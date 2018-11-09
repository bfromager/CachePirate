import {debugMatrixArray, Matrix} from './matrix';

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
        // console.log("");
        // debugMatrixArray([this._cases[0],this._cases[1]]);
        // debugMatrixArray([this._cases[2],this._cases[3]]);
    }

}
