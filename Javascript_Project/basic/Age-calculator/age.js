
document.getElementById('button').addEventListener('click',()=>{
    const actualAge = document.getElementById('date');

    const date = new Date(actualAge.value);
    const presentyear = new Date()
    const calculateAge = presentyear.getFullYear() - date.getFullYear()  
    console.log(calculateAge)
    document.getElementById('result').innerHTML = `your age is ${calculateAge} years old`
});
