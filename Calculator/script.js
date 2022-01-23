

function buttonclick(val) {
 
    document.getElementById("screen").value+=val;
    
}
function clearscreen(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    var text = document.getElementById("screen").value=result
}