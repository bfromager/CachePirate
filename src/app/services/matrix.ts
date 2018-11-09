export type Matrix<T> = T[][];

export function debugMatrix<T>(matrix: Matrix<T>) {
    console.log("");
    for (let row of matrix) {
        let S = "";
        for (let col of row) {
            S +=  (S == "" ? "" : " ") + col.toString();
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
