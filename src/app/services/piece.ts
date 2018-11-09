
/*
    0   1   2
    7   8   3
    6   5   4
*/

import {Matrix} from './matrix';

export type MaskArray = Matrix<number>;

export class Piece {
    private _mask: MaskArray;
    private _positions: MaskArray[];

    constructor(mask?:MaskArray) {
        if (mask) this.setMask(mask);
    }

    getPositions(): MaskArray[] {
        return this._positions.slice();
    }

    setMask(mask : MaskArray)  {
        // this._positions = [];
        // this._mask = mask.slice();
        // this._positions.push(this._mask);
        // this.debugMask(this._mask);
        //
        // for (let i=0; i<4; ++i) {
        //     let newMask = this.rotateMask(this._mask,i);
        //     if (this.isNewMask(newMask)) {
        //         this._positions.push(newMask);
        //         this.debugMask(newMask);
        //     }
        // }
    }

    // private debugMask(mask: MaskArray) {
    //     console.log("");
    //     console.log(mask[0] + " " + mask[1] + " " + mask[2]);
    //     console.log(mask[7] + " " + mask[8] + " " + mask[3]);
    //     console.log(mask[6] + " " + mask[5] + " " + mask[4]);
    // }
    //
    // private rotateMask(mask : MaskArray, nbQuartDeTour: number): MaskArray {
    //     let result: MaskArray = [];
    //     result[mask.length-1] = mask[mask.length-1];
    //     for (let i=0; i<8; ++i) {
    //         let newIndex = (i + 2*nbQuartDeTour)%8;
    //         result[newIndex] = mask[i];
    //     }
    //     return result;
    // }
    //
    // private isEqualMask(fromMask : MaskArray, toMask : MaskArray): boolean {
    //     for (let i in  fromMask) {
    //         if (fromMask[i] != toMask[i]) return false;
    //     }
    //     return true;
    // }
    //
    // private isNewMask(newMask : MaskArray): boolean {
    //     for (let mask of this._positions) {
    //         if (this.isEqualMask(newMask,mask))
    //             return false;
    //     }
    //     return true;
    // }
}
