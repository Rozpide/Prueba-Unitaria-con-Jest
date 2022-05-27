// esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// solo un registro en consola para nosotros.
// console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum };
//  const sum = (a,b)=>{
//       return a+b
//   }
//   console.log(sum(7,3));

//   module.exports={sum};

 const fromEuroToDollar=(a,b)=>{
  return a*b
    
};
 console.log(fromEuroToDollar(1,1.2))

 module.exports={fromEuroToDollar};

 const fromDollarToYen=(a,b)=>{
     return a*b
 };
 console.log(fromDollarToYen(1,102.3))
 module.exports={fromDollarToYen};

 const fromYanToPound=(a,b)=>{
     return a*b
 };
 console.log(fromYanToPound(1,0.0063))
 module.exports={fromYanToPound};

