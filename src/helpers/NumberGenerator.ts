import produce from 'immer'

export default class NumberGenerator {
    
    static generateInRange = (min: number, max: number): number => {
        if (min > max) {
            throw new Error('min has to be bigger than max')
        }
    
        const random = min + Math.random() * (max + 1 - min)
    
        return Math.floor(random)
    }

    static generateArray = (n: number, min: number, max: number): number[] => {
        return produce([], (draft: number[]) => {
            while (draft.length < n) {
                const generated =
                    NumberGenerator.generateInRange(min, max)
        
                if (draft.includes(generated)) {
                    continue
                } else {
                    draft.push(generated)
                }
            }
        })
    }
}