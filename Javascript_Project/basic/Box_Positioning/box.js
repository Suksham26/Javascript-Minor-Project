const box = document.getElementById('box');
let count = 0;
var maxsize = 400;
var minsize = 50;


let s = 100;

function size() {
   count++
   if(s<maxsize){
      s = s + 10;
   }
   
   return s;

}
let rs = size()
function resize(){
   count++
   if(rs>minsize){
      rs = rs - 10;
   }
   
   return rs;
}

function color() {
   r = Math.floor(Math.random() * 256)
   b = Math.floor(Math.random() * 256)
   g = Math.floor(Math.random() * 256)
   return [r, g, b]
}

document.addEventListener('click', (e) => {
   count++;
   if (count <30) {
      count++
      box.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
      box.style.width = `${size()}px`
      box.style.height = `${size()}px`
      box.style.backgroundColor = `rgb(${color().join(',')})`
      console.log(size());
   }
   else {
      if(count>30){
         count--
         box.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
         box.style.width = `${resize()}px`
         box.style.height = `${resize()}px`
         box.style.backgroundColor = `rgb(${color().join(',')})`
         console.log(size());
      }
   }

   


   // console.log(e.clientX ,e.clientY);
   //   
   // box.style.width,height = `${size()}px`
   // box.style.height = `${size()}px`

})