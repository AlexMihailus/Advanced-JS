const solve = (str) => str.split(/(\W)/).reverse().join("");
console.log(solve("100*b/y"));
console.log(solve("a+b-c/d*30"));
console.log(solve("a*b/c+50"));