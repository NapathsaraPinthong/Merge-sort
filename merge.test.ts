import { merge } from './merge';

describe('merge function', () => {
    it('merges two sorted arrays of equal lengths', () => {
        const arr1 = [1, 4, 5];
        const arr2 = [2, 3, 6];
        const result = merge(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('merges two sorted arrays of different lengths', () => {
        const arr1 = [1, 3, 6, 7];
        const arr2 = [2, 4, 5];
        const result = merge(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('handles one empty array', () => {
        const arr1: number[] = [];
        const arr2 = [2, 4, 6];
        const result = merge(arr1, arr2);
        expect(result).toEqual([2, 4, 6]);
    });

    it('handles both empty arrays', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = merge(arr1, arr2);
        expect(result).toEqual([]);
    });

});
