const inputText = document.getElementById('text')
var changeText = document.getElementById('change_text')

document.getElementById('button').addEventListener('click', () => {
   const textConvert = inputText.value;
   const result =textConvert.trim().toUpperCase();
   changeText.innerHTML = result;
   console.log(result);
   if(textConvert== ''){
    alert('Enter a valid text');
   }
   else{
    return result;
   }
  
   changeText.innerHTML = result;

   
    
})
// textConvert ==" "




