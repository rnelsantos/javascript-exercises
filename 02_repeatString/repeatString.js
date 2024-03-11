
const repeatString = function(string, num) {
let initString=string;
if (num===0){string=''}
if (num<0){string="ERROR"}
for(let i=0; i<(num-1); i++){    
string = string + initString;
}
return string
};
repeatString('',4)
//console.log(repeatString('hey',4))
// Do not edit below this line
module.exports = repeatString;
