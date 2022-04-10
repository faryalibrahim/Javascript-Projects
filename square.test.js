
const square = require("./square");

test ("square of 1 equals 1 * 1 =1", () => {
    expect ( square(1)).toBe(1);
    
})

test ("square of 2 equals 2 *2 = 4", () => {
    expect (square(2)).toBe(4);
})