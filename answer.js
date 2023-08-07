function divisors(integer) {
  let arr = []
  let x=2
  while(x<integer){
    if(integer%x==0){
      arr.push(x)
    }
    else{
      arr
    }
    x++
  }
  return arr.length != 0 ? arr : `${integer} is prime`
}

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

function divisors(integer) {
	var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
    	divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};
