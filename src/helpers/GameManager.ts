import GameResultModel from "../models/GameResultModel"
import NumberGenerator from "./NumberGenerator"
import Comparator from "./Сomparator"

export default class GameManager {
    private _arr8: number[]
    private _arr1: number[]
    private _arr8generated: number[]
    private _arr1generated: number[]

    constructor(arr8: number[], arr1: number[]) {
        this._arr8 = arr8
        this._arr1 = arr1
        this._arr1generated = NumberGenerator.generateArray(8, 1, 19)
        this._arr8generated = NumberGenerator.generateArray(1, 1, 2)
    }

    public init = (): GameResultModel => {
        const result1 = Comparator.compareTwoArrays(this._arr8, this._arr8generated)
        const result2 = Comparator.compareTwoArrays(this._arr1, this._arr1generated)

        const finalResult = this.getFinalResult(result1, result2)

        return this.generateGameResult(result1, result2, finalResult)
    }

    private getFinalResult = (result1: number, result2: number): boolean => (
        (result1 >= 4) ||  (result1 >= 3 && result2 >= 1)
    )

    private generateGameResult = (result1: number, result2: number, finalResult: boolean): GameResultModel => ({
        message: this.generateMessage(result1, result2, finalResult),
        finished: true,
        winner: finalResult
    })

    private generateMessage = (result1: number, result2: number, finalResult: boolean): string => (
        [
            finalResult ? 'Вы выиграли!' : 'Вы проиграли :(',
            '1 поле:',
            `Вы загадали: ${[...this._arr8].sort().join(', ')}`,
            `Выпали числа: ${[...this._arr8generated].sort().join(', ')}`,
            `Совпали ${result1}`,
            '2 поле:',
            `Вы загадали: ${[...this._arr1].sort().join(', ')}`,
            `Выпало число: ${[...this._arr1generated].sort().join(', ')}`,
            `Совпало: ${result1}`,
        ].join('\n')
    )
}