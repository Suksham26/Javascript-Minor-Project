
const number = document.getElementById('input_value');

function guessNumber() {
    const randomNum = Math.floor(Math.random() * 11) + 1;
    // const storeNum = localStorage.setItem("randomNum");
    localStorage.setItem("randomNum", randomNum);
    const storeNum = localStorage.getItem("randomNum"); // Retrieve the stored value
    if(number.value <= 10 && number.value>=1){
        if (number.value == storeNum) {
            alert('You win');
        }
        else {
            alert("you fail")
        }
    }
    else{
        alert('Enter a number between 1-10');
    }
    
}
document.getElementById('guess_btn').addEventListener('click', () => {
    
    guessNumber();
    number.value = "";
})
