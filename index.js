function Output(){
    var a = parseInt(document.getElementById("numberA").value);
    var b = parseInt(document.getElementById("numberB").value);

    perfectSquares(a, b)
}

function perfectSquares(a, b){
    let rs = document.getElementById("result");
    for (let i = a; i <= b; i++)
    {
   
        if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
            rs.innerHTML += " " + i
    }
}