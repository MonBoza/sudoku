export function Grid(a1,a2,a3,b1,b2,b3,c1,c2,c3) {
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
}

Grid.prototype.checkGrid = function () {
    let uniqueValues = [];

    for (const key in this) {
        if (!uniqueValues.includes(this[key])) {
            uniqueValues.push(this[key])
        } else {
            return false;
        }
    }
    return true;
};

export function Columns(a1,a2,a3,b1,b2,b3,c1,c2,c3) {
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
}