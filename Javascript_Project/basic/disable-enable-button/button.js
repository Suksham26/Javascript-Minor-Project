const inputBox = document.querySelectorAll('.value')

// function disable() {
   
//     for ( let i = 0; i < inputBox.length; i++){
//         if (inputBox[i].value == "") {
//             document.getElementById('button').disabled = true;
//         }
//         else{
//             document.getElementById('button').disabled =false;
//         }
//     }
    


// }
document.getElementById("button").addEventListener("keyup",(e)=>{
    for ( let i = 0; i < inputBox.length; i++){
        if (inputBox[i].value == "") {
            document.getElementById('button').disabled = true;
        }
        else{
            document.getElementById('button').disabled =false;
        }
    }
})  
    