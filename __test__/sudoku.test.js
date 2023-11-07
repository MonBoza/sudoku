import { Grid } from "./../src/sudoku.js"

describe ("grid", () => {
    let grid;

    beforeEach(() => {
        grid = new Grid(1,2,3,4,5,6,7,8,9);
    });

    test("should create a grid object with 9 properties", () => {
        expect(grid.a1).toEqual(1);
        expect(grid.a2).toEqual(2);
        expect(grid.a3).toEqual(3);
        expect(grid.b1).toEqual(4);
        expect(grid.b2).toEqual(5);
        expect(grid.b3).toEqual(6);
        expect(grid.c1).toEqual(7);
        expect(grid.c2).toEqual(8);
        expect(grid.c3).toEqual(9);   
    });
    
    test("should return true if all values are unique", () => {
        expect(checkGrid()).toEqual(true);
    })
});