
function binary_checker() {
    var binary_number = document.getElementById("num1").value;
    var index_decimal_point = 0;
    var counter = 0;
    var whole_number;
    var fractional_number;
    var answer;
    var i ;
    //This loop will check whether binary number is vaild
    for (i = 0; i < binary_number.length; i++) {
      //checks whether the element is '1' or '0'
        if (binary_number[i] !== "1" && binary_number[i] !== "0"){
            if (binary_number[i] === "."){
                index_decimal_point = i;
                counter += 1;
           }else {
             //if not number index will equal 2
            counter = 2;
            break}
        }}
//this is for if the binary number is vaild and has one decimal point
    if (counter === 1){
        whole_number = binary_number.slice(0,index_decimal_point);
        fractional_number = binary_number.slice(index_decimal_point+1, binary_number.length);
        answer = whole_binary_to_decimal(whole_number) + fractional_binary_to_decimal(fractional_number);
        document.getElementById("yeah").innerHTML = answer;
    }
    //this is for if the binary number is a whole number
    else if (counter === 0){
        document.getElementById("yeah").innerHTML = whole_binary_to_decimal(binary_number);
    }
    else{
    //this is if the binary number has more then one decimal place or contains not a '1' or '0'
        document.getElementById("yeah").innerHTML = "That is not a valid binary number";
    }
}
//this is the function for converting positive binary side to decimal
function whole_binary_to_decimal(binary_number) {
    var whole_decimal = 0;
    var i;
    for (i = 0;i < binary_number.length; i++){
        whole_decimal += (Math.pow(2, i) * (parseInt(binary_number[binary_number.length-1-i])));
    }
    return whole_decimal
}
//this is the function for converting
function fractional_binary_to_decimal(binary_number) {
    var fractional_decimal = 0;
    var i;
    for (i = 0;i < binary_number.length; i++){
        fractional_decimal += (Math.pow(2, (-i-1)) * (parseInt(binary_number[i])));
    }
    return fractional_decimal
}
//checks the validation of the decimal number
function decimal_checker() {
    var decimal_number = document.getElementById("num2").value;
    var list_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    var i;
    var counter = 0;
    window.alert("YES into function")
    for (i = 0; i < decimal_number.length; i++) {
        if (list_numbers.indexOf(decimal_number[i]) > -1) {
            if (decimal_number[i] === ".") {
                counter += 1;
            }
        }
        else {
            counter = 2;
            break;
        }
    }
    window.alert(counter)
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
