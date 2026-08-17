function checkNumber(number){
    if(number > 0){
        console.log(number + " - Given number is Positive Number");
    } else if(number <0){
        console.log(number + " - Given number is Negative Number");
     } else {
        console.log("Number is Neutral");
    }
}

let number = 0;
checkNumber(number)