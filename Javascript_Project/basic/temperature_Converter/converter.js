const storeDegree = document.getElementById('temp');
const storeFahrenheit = document.getElementById('feh');
const button = document.getElementById('deg_button');
// let fahrenite= 0



button.addEventListener('click', ()=>{
    console.log("hello");
    const convert = parseFloat(storeDegree.value) * (9/5) + 32;

    if (storeDegree.value.trim() === "") {
        alert('write a proper value');
    }
    
    
    storeFahrenheit.value = convert.toFixed(2); 
    console.log("hello");
})



// = °C × (9/5) + 32.