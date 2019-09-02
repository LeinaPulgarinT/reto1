function processData(input) {
    //Enter your code here
    var H = { 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 6 : "six", 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten", 11 : "eleven", 12 : "twelve" };
    
    var M = { 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 6 : "six", 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten", 11: "eleven", 12 : "twelve", 13 : "thirteen", 14 : "fourteen", 15: "quarter", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19 : "nineteen", 20 : "twenty", 21 : "twenty one", 22 : "twenty two", 23 : "twenty three", 24 : "twenty four", 25 : "twenty five", 26 : "twenty six", 27 : "twenty seven", 28 : "twenty eight" , 29 : "twenty nine", 30 : "half" };
    
    var value = input.split("\n");
    
    if(value[1] == 0){
        console.log(H[parseInt(value[0])]+" o' clock");        
    } else if(value[1] == 30 || value[1] == 15){
        console.log(M[parseInt(value[1])]+" past "+H[parseInt(value[0])]);        
    } else if(value[1] == 45){
        console.log(M[60-parseInt(value[1])]+" to "+H[parseInt(value[0])+1]);               
    } else if(value[1] == 59){
        console.log(M[60-parseInt(value[1])]+" minute to "+H[parseInt(value[0])+1]);
    } else if(value[1] == 1){
        console.log(M[parseInt(value[1])]+" minute past "+H[parseInt(value[0])]);
    } else if(value[1] > 30){
        console.log(M[60-parseInt(value[1])]+" minutes to "+H[parseInt(value[0])+1]);
    } else {
        console.log(M[parseInt(value[1])]+" minutes past "+H[parseInt(value[0])]);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});