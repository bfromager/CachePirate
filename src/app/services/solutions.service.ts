

import {ArrangementService} from './arrangements.service';
import {Case, Plateau} from './plateau';
import {Mask, Position, Piece} from './piece';
import {debugMatrix, debugMatrixArray, Matrix} from './matrix';

export interface Solution {
    imagesCount: number[],
    positions: Position[]
}

interface SolutionCounter{
    solutions: Solution[]
}

export class SolutionsService {
    private arrangementService = new ArrangementService();
    private maxImage: number;


    constructor(private plateau: Plateau, private pieces : Piece[]) {
        this.maxImage = 0;
        for (let c of this.plateau.getCases()) {
            for (let row of c)
                for (let n of row) {
                    if (this.maxImage < n)
                        this.maxImage = n;
                }
        }
        alert(this.maxImage);
    }

    public getSolutions(): Solution[]{
        let arrangements = this.arrangementService.getArrangement(this.pieces,Math.min(this.pieces.length,4));
        // for (let a of arrangements) {
        //     console.log("-----------");
        //     for (let p of a) {
        //         debugMatrix(p.piece.getMask(p.rotation));
        //     }
        // }

        console.log(arrangements.length);

        let cases : Case[] = this.plateau.getCases();
        debugMatrixArray(cases);

        let uniqueSolution: Solution[] = [];
        let solutionCounter: SolutionCounter[] = [];

        for (let a of arrangements) {
            let positionPlateau: Case[] = [];
            let imageCount: number[] = [];
            for (let i in cases) {
                let mask = a[i].piece.getMask(a[i].rotation);
                positionPlateau.push(this.maskCase(cases[i], mask));
            }
            // debugMatrixArray(positionPlateau);

            let solution: Solution = <Solution>{
                positions: a,
                imagesCount: this.getImagesFromPositionPlateau(positionPlateau)
            }

            // console.log(solution.positions, solution.imagesCount);
            this.pushSolution(solution, solutionCounter);
        }

        // for (let sc of solutionCounter) {
        //     console.log("--------------")
        //     for (let s of sc.solutions) {
        //         console.log(s.imagesCount);
        //     }
        // }

        for (let s of solutionCounter) {
            if (s.solutions.length == 1)
                uniqueSolution.push(s.solutions[0]);
        }

        return uniqueSolution;
    }

    private maskCase(_case: Case, mask: Mask): Case  {
        let result: Case = [];
        for (let row in _case) {
            result[row]=[];
            for (let col in _case[row]) {
                result[row][col] = (mask[row][col] ? _case[row][col] : 0);
            }
        }
        return result;
    }

    private getImagesFromPositionPlateau(positionPlateau: Case[]): number[] {
        let result: number[]= new Array(this.maxImage + 1).fill(0);

        //Pour chacun des cases
        for (let c of positionPlateau) {
            for (let row of c)
                for (let n of row) {
                    if (n != 0) {
                        // console.log(n);
                        if (result[n])
                            ++result[n]
                        else
                            result[n] = 1
                    }
                }
        }
        return result;
    }

    private compareArray(a1: any[], a2: any[]): boolean {
        if (a1.length != a2.length) return false;

        for (let i in a1) {
            if (a1[i] != a2[i])
                return false;
        }
        return true;
    }

    private pushSolution(solution : Solution, solutionCounter: SolutionCounter[]) {
        for (let s of solutionCounter) {
            if (this.compareArray(solution.imagesCount, s.solutions[0].imagesCount)) {
                s.solutions.push(solution);
                return;
            }
        }
        let sc: SolutionCounter = <SolutionCounter> {
            solutions: []
        }
        sc.solutions.push(solution);
        solutionCounter.push(sc);
    }
}
