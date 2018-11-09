
export type CaseArray = number [];

export class Plateau {
    private _cases : CaseArray[] = [];

    constructor(cases?: CaseArray[]) {
        if (cases) this.setCases(cases);
    }

    getCases(): CaseArray[] {
        return this._cases.slice();
    }

    setCases(cases: CaseArray[]) {
        this._cases = cases.slice();
        this.debugPlateau();
    }

    private debugPlateau() {
        console.log("");
        console.log(this._cases[0][0] + " " + this._cases[0][1] + " " + this._cases[0][2] + "     " + this._cases[1][0] + " " + this._cases[1][1] + " " + this._cases[1][2]);
        console.log(this._cases[0][7] + " " + this._cases[0][8] + " " + this._cases[0][3] + "     " + this._cases[1][7] + " " + this._cases[1][8] + " " + this._cases[1][3]);
        console.log(this._cases[0][6] + " " + this._cases[0][5] + " " + this._cases[0][4] + "     " + this._cases[1][6] + " " + this._cases[1][5] + " " + this._cases[1][4]);
        console.log("");
        console.log(this._cases[2][0] + " " + this._cases[2][1] + " " + this._cases[2][2] + "     " + this._cases[3][0] + " " + this._cases[3][1] + " " + this._cases[3][2]);
        console.log(this._cases[2][7] + " " + this._cases[2][8] + " " + this._cases[2][3] + "     " + this._cases[3][7] + " " + this._cases[3][8] + " " + this._cases[3][3]);
        console.log(this._cases[2][6] + " " + this._cases[2][5] + " " + this._cases[2][4] + "     " + this._cases[3][6] + " " + this._cases[3][5] + " " + this._cases[3][4]);
    }

}
