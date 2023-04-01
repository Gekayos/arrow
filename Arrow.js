


function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }


//#1 

const double= arr => arr.map( val => val * 2 );


//# 2


function squareAndFindEvens(numbers){
    var squares = numbers.map( ( num)=>{
      return num ** 2;
    });
    var evens = squares.filter( (square)=>{return square % 2 === 0;
    });
    return evens;
  }
  
  const squareAndFindEvens = numbers => numbers.map ( val => val ** 2 ).filter( square => square % 2 === 0 )