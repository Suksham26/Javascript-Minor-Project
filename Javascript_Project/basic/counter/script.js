const store = document.getElementById('counter');
const data = document.getElementById('data')
let count = 0;


store.addEventListener('click', ()=>{
    
    if(count< 20){
        count++
       
    }
    else{
        alert('Limit increase')
    }
   
    console.log(count);
    data.innerHTML = count;
})



// const store = document.getElementById('counter');
// const data = document.getElementById('data');
// // let count = 0;
// let number = 0;

// const showData = ()=>{
//     for(let count=0; count<10; count++){
//         number++
//         }
//     console.log(number);
//     data.innerHTML = number;        
// }

// store.addEventListener('click',()=>{
    
//    showData();
//     // data.innerHTML = count;
// })

