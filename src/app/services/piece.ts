
/*
    0   1   2
    7   8   3
    6   5   4
*/

import {compareMatrix, debugMatrix, Matrix, rotateMatrix} from './matrix';

export type Mask = Matrix<boolean>;

export interface Position {
    piece: Piece;
    rotation: number;

}
export class Piece {
    private _mask: Mask;
    private _positions: Mask[];

    constructor(mask?:Mask) {
        if (mask) this.setMask(mask);
    }

    getMasks(): Mask[] {
        return this._positions.slice();
    }

    getMask(p: number): Mask {
        return this._positions[p];
    }

    getPositionCount(): number {
        return this._positions.length;
    }

    setMask(mask : Mask)  {
        this._positions = [];
        this._mask = mask;
        this._positions.push(this._mask);
        // debugMatrix(this._mask);

        for (let i=1; i<4; ++i) {
            let newMask = rotateMatrix(this._mask,i);
            if (this.isNewMask(newMask)) {
                this._positions.push(newMask);
                // debugMatrix(newMask);
            }
        }
    }

    private isNewMask(newMask : Mask): boolean {
        for (let mask of this._positions) {
            // Si les matrices sont égale
            if (compareMatrix(newMask,mask))
                return false;
        }
        return true;
    }
}
