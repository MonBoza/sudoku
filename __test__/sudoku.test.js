import { Grid, Columns } from "./../src/sudoku.js"

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
        expect(grid.checkGrid()).toEqual(true);
    });
    test("return false if any values are the same", () => {
        let grid2 = new Grid(2,1,4,5,6,8,8,9,3);
        expect(grid2.checkGrid()).toEqual(false);
    });
});

describe("Columns", () => {
    let columns;

    beforeEach(() => {
        columns = new Columns(1,2,3,4,5,6,7,8,9);
    });
    test("should create column object with 9 properties", () =>{
        expect(columns.a1).toEqual(1);
        expect(columns.a2).toEqual(2);
        expect(columns.a3).toEqual(3);
        expect(columns.b1).toEqual(4);
        expect(columns.b2).toEqual(5);
        expect(columns.b3).toEqual(6);
        expect(columns.c1).toEqual(7);
        expect(columns.c2).toEqual(8);
        expect(columns.c3).toEqual(9); 
    });

    test("should return true if all values are unique", () => {
        expect(columns.checkColumns()).toEqual(true);
    });
});