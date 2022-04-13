/*As a Mario User I want to specify the height so that I can produce a Mario Pyramid.
requirement is passing one numer to produce Mario Pyramid. 
Number cant be less than 1
Number cant be greater than 20
Pyramid will be left aligned 
*/

// naive implementation 
// function pyramid(heightValue) {
//     console.log('heightValue', heightValue, heightValue === 2)
//     if(heightValue === 1) {
//         return `#`;
//     }
//     if(heightValue === 2) {
//         const height2 = 
//     `
//     #
//     ##
//     `
//         return height2;
//     }
// };

function pyramid(heightValue) {
    let result = ''
    
    for (let y = 1; y <= heightValue; y++) {
        
       var line = `#`.repeat(y);
  }
  return line
}
module.exports = pyramid;
