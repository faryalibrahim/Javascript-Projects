const pyramid = require("./mario");

test ("when height is 1 pyramid is #", () => {
    expect (pyramid(1)).toBe('#');
})