const sumAll = function(min,max) {

 if(min<0 ||max<0 || !(typeof min === "number")||!(typeof max === "number")){
    return "ERROR";
 }
    
if (min>max){
    first=max;
     last=min;  
}
else{
    first=min;
    last=max;  
}



    let result = 0;

for(let i=first; i<=last; i++){
    result += i;
}

return result
console.log(result);

//
};

sumAll("a",4);

// Do not edit below this line
module.exports = sumAll;
