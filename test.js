// const {sum}= require("./app.js");
// test ("add 14 + 9 to equal 23",() => {
//     let total = sum(14, 9);
//     expect(total).toBe(23);
// });
// const { fromEuroToDollar } = require('./app.js');      
// test("One euro should be 1.206 dollars", function(){
//     // importo la funcion desde app.js
   
//    let total= fromEuroToDollar(3.5,1.2)
    
    
//  // hago mi comparacion (la prueba)
//     expect(total).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
// });
const {fromDollarToYen}= require("./app.js");
test("One dollar should be 106.157 yen", function(){
    let totaly= fromDollarToYen(5,106.157)
    expect(totaly).toBe(530.785)
})

// const {fromYanToPound}= require("./app.js");
// test("One dollar should be 106.157 yen", function(){
//     let totalyr= fromYanToPound(5,0.0063)
//     expect(totalyr).toBe(0.0315)
// })