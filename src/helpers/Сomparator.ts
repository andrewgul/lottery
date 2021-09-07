export default class Сomparator {

    static compareTwoArrays = (arr1: number[], arr2: number[]): number => (
        arr1.reduce((acc, n) => (acc + Number(arr2.includes(n))), 0)
    )
}