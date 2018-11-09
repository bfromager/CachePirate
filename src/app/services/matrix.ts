export type Matrix<T> = T[][];

export function debugMatrix<T>(matrix: Matrix<T>) {
    debugMatrixArray([matrix]);
}

export function debugMatrixArray<T>(matrix: Matrix<T>[]) {
    console.log("");
    for (let row = 0; row < matrix[0].length; ++row) {
        let S = "";
        for (let m of matrix) {
            S += (S == "" ? "" : "      ");
            for (let col of m[row]) {
                S +=  " " + col.toString();
            }
        }
        console.log(S);
    }
}

export function rotateMatrix<T>(matrix: Matrix<T>, nbQuartDeTour: number): Matrix<T> {
    let yMax = matrix.length -1;
    let xMax = matrix[0].length -1;

    let x0 = xMax/2;
    let y0 = yMax/2;

    let cosT = 1;
    let sinT = 0;

    switch (nbQuartDeTour%4) {
        case 1 : { cosT = 0;  sinT = -1;  break; }
        case 2 : { cosT = -1; sinT = 0;   break; }
        case 3 : { cosT = 0;  sinT = 1;   break; }
    }

    let result: Matrix<T> = [];

    for (let row=0; row <= yMax; ++row) {
        result[row] = [];
        for (let col=0; col <= xMax; ++col ) {
            let dX = col - x0;
            let dY = row - y0;
            // S +=  (S == "" ? "" : " ") + "(" + dX.toString() + "," + dY.toString() + ")";
            let rX = (dX * cosT - dY * sinT + x0);
            let rY = (dX * sinT + dY * cosT + y0);
            // S +=  (S == "" ? "" : " ") + "(" + rX.toString() + "," + rY.toString() + ")";
            result[row][col] = matrix[rY][rX];
        }
    }

    return result;
}

export function compareMatrix<T>(m1: Matrix<T>, m2: Matrix<T>): boolean {
    if (m1.length != m2.length) return false;
    if (m1[0].length != m2[0].length) return false;

    for (let row in m1) {
        for (let col in m1[row]) {
            if (m1[row][col] != m2[row][col]) return false;
        }
    }
    return true;

}
