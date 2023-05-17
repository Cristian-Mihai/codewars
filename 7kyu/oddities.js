// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
  const oddOnes = []
 for(i=0; i<= values.length - 1; i++){
   if(values[i] % 2 === 0) {
     oddOnes.push(values[i])
   }
   else { continue}
 }
  return oddOnes
}

// :)