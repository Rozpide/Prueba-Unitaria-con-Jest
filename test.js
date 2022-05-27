// const {sum}= require("./app.js");
// test ("add 14 + 9 to equal 23",() => {
//     let total = sum(14, 9);
//     expect(total).toBe(23);
// });
 const { fromEuroToDollar } = require('./app.js');      
//

test("One euro should be 1.2 dollars", function (){
//     // importo la funcion desde app.js
const fromEuroToDollar=(a,b)=>{
    return a*b
      
  };
   console.log(fromEuroToDollar(1,1.2))
  
   module.exports={fromEuroToDollar};
//
    let total= fromEuroToDollar(3.5,1.2);
    
    
//  // hago mi comparacion (la prueba)

     expect(total).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
 });
const {fromDollarToYen}= require("./app.js");
test("One dollar should be 106.157 yen", function(){

    const fromDollarToYen=(a,b)=>{
        return a*b
    };
    console.log(fromDollarToYen(1,102.3))
    module.exports={fromDollarToYen};

    let totaly= fromDollarToYen(5,102.3)
    expect(totaly).toBe(511.5)
})

 const {fromYanToPound}= require("./app.js");
 test("One dollar should be 106.157 yen", function(){

    const fromYanToPound=(a,b)=>{
        return a*b
    };
    console.log(fromYanToPound(1,0.0063))
    module.exports={fromYanToPound};
     let totalyr= fromYanToPound(5,0.0063)
     expect(totalyr).toBe(0.0315)
 })