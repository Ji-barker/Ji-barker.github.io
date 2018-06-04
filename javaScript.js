
function converter() {
    var binary_number = document.getElementById("num1").value;
    var index = 0;
    var number_index = 0;
    var pos;
    var neg;
    var answer;
    var i ;
    //This loop will check whether binary number is vaild
    //
    for (i = 0; i < binary_number.length; i++) {
      //checks whether the element is '1' or '0'
        if (binary_number[i] !== "1" && binary_number[i] !== "0"){
            if (binary_number[i] === "."){
                index = i;
                number_index += 1;
           }else {
             //if not number index will equal 2
            number_index = 2;
            break}
        }}
//this is for if the binary number is vaild and has one decimal point
    if (number_index === 1){
        pos = binary_number.slice(0,index);
        neg = binary_number.slice(index+1, binary_number.length);
        answer = pos_binary_to_decimal(pos) + neg_binary_to_decimal(neg);
        document.getElementById("yeah").innerHTML = answer;
    }
    //this is for if the binary number is a whole number
    else if (number_index === 0){
        document.getElementById("yeah").innerHTML = pos_binary_to_decimal(binary_number);
    }
    else{
    //this is if the binary number has more then one decimal place or contains not a '1' or '0'
        document.getElementById("yeah").innerHTML = "That is not a valid binary number";
    }
}
//this is the function for converting positive binary side to decimal
function pos_binary_to_decimal(binary_number) {
    var decimal_number = 0;
    var i;
    for (i = 0;i < binary_number.length; i++){
        decimal_number += (Math.pow(2, i) * (parseInt(binary_number[binary_number.length-1-i])));
    }
    return decimal_number
}
//this is the function for converting
function neg_binary_to_decimal(binary_number) {
    var decimal_number = 0;
    var i;
    for (i = 0;i < binary_number.length; i++){
        decimal_number += (Math.pow(2, (-i-1)) * (parseInt(binary_number[i])));
    }
    return decimal_number
}

function converter1() {
    var binary_number = document.getElementById("num2").value;
    var list_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    var i;
    var counter = 0;
    for (i = 0; i < binary_number.length; i++) {
        if (list_numbers.indexOf(binary_number[i]) > -1) {
            if (binary_number[i] === ".") {
                counter += 1;
            }
        }
        else {
            counter = 2;
            break;
        }
    }
    if (counter === 0 || counter === 1) {
        bin2dec()
    }
    else {
        document.getElementById("output2").innerHTML = "That is not a valid number"
    }
}
function bin2dec(){
    var bin=(document.getElementById("num2").value);
    document.getElementById("output2").innerHTML = (parseFloat(bin).toString(2));
}
