function valueToDisplay(operand){
    document.getElementById("display").value += operand
}

function calculate(){
    const result = eval(document.getElementById('display').value);
    console.log(result);
    document.getElementById('display').value = result;
    // return result;
    
}

function clean(){
    document.getElementById('display').value = '';
}