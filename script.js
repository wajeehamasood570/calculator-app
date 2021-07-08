function getNumber(num){
  
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}
 
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
    console.log(result.value);
}
function backSpace(){
  var input= document.getElementById("result");
  input.value = input.value.slice(0,-1);
  }
