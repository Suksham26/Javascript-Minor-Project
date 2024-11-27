const paragraph = document.getElementById('text')
const button = document.getElementById('button')

function result(){
    let string = paragraph.value;
    //  string.trim().split(" ").filter(word => word !== "");
    let array = string.trim().split(" ").filter(word => word !== "");
    const output= array.length;
    return output;
}
    

button.addEventListener('click',()=>{
    document.getElementById('count').innerHTML = `Number of words ${result()} in this paragraph`
    console.log(result())
    paragraph.value = '';
});


