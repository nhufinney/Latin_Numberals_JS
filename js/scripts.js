var roman = function(input) {
  var unit=[0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  var roman = [1000, 500, 100, 50, 10];
  var temp =[["M",0],["D",0], ["C",0],["L",0],["X",0]];
  var result = [];

  //divide value of the input number into roman values
  for (var i =0; i<=4; i++){
     var divide = Math.floor(input/roman[i]);
     if(divide>=1){
       temp[i][1]=divide;
       input = input - (roman[i]*divide);
     }
  };

  //deal with special case:40
  if ((temp[3][1]===0) && (temp[4][1]===4)){
    temp[4][1]=1;
    temp[4][0]="XL";
  };

  //deal with special case: 90
  if ((temp[3][1]===1) && (temp[4][1]===4)){
    temp[3][1]=0;
    temp[4][0]="XC";
    temp[4][1]=1;
  };

  //deal with special case 400
  if((temp[1][1]===0) && (temp[2][1]===4)){
    temp[2][0]="CD";
    temp[2][1]=1;
  };

  //deal with special case 900
  if((temp[1][1]===1) && (temp[2][1]===4)){
    temp[1][1]=0;
    temp[2][0]="CM";
    temp[2][1]=1;
  };

  //push respective values under Latin values into the result array
  for (var i =0; i<=4; i++){
    for (var a =1; a<=temp[i][1]; a++){
      if (temp[i][1] !==0){
        result.push(temp[i][0]);
      };
    };
  };

  //put the rest value (unit) into the result array
  result[result.length]=unit[input];

  //turn result array into a string
  result= result.join("");

  return result;
};

$(document).ready(function() {
    $("form#latin").submit(function(event) {
        var input = parseInt($('input#input').val());
        var result = roman (input);

        $(".input_number").text("The number "+input+" in Latin Number is:");
        $(".latin_result").text(result);

        $("#result").show();

        event.preventDefault();
    });
});
