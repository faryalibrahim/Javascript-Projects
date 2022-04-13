const pyramid = require("./mario");

test.only("when height is 1 pyramid is #", () => {
    expect (pyramid(1)).toBe('#');
})

test ("when the height is 2, pyramid is '#', /n '##'", () => {
    const result = 
    `
    #
    ##
    `
    expect (pyramid(2)).toBe(result);
})