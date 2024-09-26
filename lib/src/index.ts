/**
 * Add numbers.
 * @param numbers The numbers to add
 * @returns The sum of all the `numbers`
 * @example
 * ```ts
 * import { addNumbers } from "my-lib"
 *
 * const values: number[] = [1, 2, 3, 4, 5]
 * const total = addNumers(values)
 * ```
 */
export function addNumbers(numbers: number[]) {
    return numbers.reduce((accumulator, value) => accumulator + value, 0)
}

/**
 * Average numbers.
 * @param numbers The numbers to average
 * @returns The average of `numbers`
 * @example
 * ```ts
 * import { averageNumbers } from "my-lib"
 *
 * const values: number[] = [1, 2, 3, 4, 5]
 * const average = averageNumers(values)
 * ```
 */
export function averageNumbers(numbers: number[]) {
    if (numbers.length === 0) return 0

    return addNumbers(numbers) / numbers.length
}
