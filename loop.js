function loop(){
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let text=""
    for (let i = a1; i <= a2; i++) 
    text += i + '</br>';
        document.getElementById('n').innerHTML= text;


}
function looping(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let hasil=""
    while (a1 >= a2)
    hasil +=a1 + '</br>';
    a2--;
    document.getElementById('a').innerHTML = hasil;
}

