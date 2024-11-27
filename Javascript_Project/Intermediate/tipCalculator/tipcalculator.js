const price = document.getElementById('price')

function calculateTipAmount() {
    const tip = (price.value * 0.15);
    if (price.value == '' || isNaN(price.value)) {
        
        alert('Please enter a price');

    }
    else {
        document.getElementById('output').style.visibility = 'visible';
        return tip;
        
    }
}

function totalAmount() {
    const total = parseFloat(price.value) + calculateTipAmount();
    //const result = total.toFixed(2)
    return total;
};

// function clear() {
//     console.log('clear');
//     price.value = "";
//     document.getElementById("tip_amount").innerText = "";
//     document.getElementById("total_amount").innerText = "";
//     document.getElementById("output").style.visibility = 'hidden';

    
//     console.log('hey')
// };
document.getElementById('clr_btn').addEventListener('click', () =>{
    console.log('clear');
    price.value = "";
    document.getElementById("tip_amount").innerText = "";
    document.getElementById("total_amount").innerText = "";
    document.getElementById("output").style.visibility = 'hidden';
})


document.getElementById('calculate_btn').addEventListener('click', () => {
    console.log("hello");
    console.log(totalAmount())
    console.log(calculateTipAmount())

    document.getElementById('tip_amount').innerText = calculateTipAmount();
    document.getElementById('total_amount').innerText = totalAmount();
    // document.getElementById('output').style.visibility = 'visible';




});