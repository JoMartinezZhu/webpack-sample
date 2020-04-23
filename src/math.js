export function add(a, b) {
    console.log("add function");
    return a + b;
}

export function minus(a, b) {
    console.log("minus function");
    return a - b;
}

Object.defineProperty(Array.prototype, "sum", {
    value: function () {
        console.log("sum function");
        return this.reduce((sum, num) => (sum += num), 0);
    },
});

console.log("math sideEffects");
