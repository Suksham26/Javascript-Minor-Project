const store = document.getElementById('counter');
const data = document.getElementById('data');


let count = 0;
function randomRgbColor(){

    red = Math.floor(Math.random() * 257);
    green = Math.floor(Math.random() * 257);
    blue = Math.floor(Math.random() * 257);

     return [red,green,blue]
}


store.addEventListener('click', () => {
    count++;
    document.body.style.background = `rgb(${randomRgbColor().join(',')})`
    data.innerHTML= `rgb(${randomRgbColor().join(',')})`
    console.log(`rgb(${randomRgbColor().join(',')})`);
})





