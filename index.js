function display(value){
    document.getElementById('textarea').value+=value;
}
function clr(){
document.getElementById('textarea').value=''
}
function calculate(){
    var expression=document.getElementById('textarea').value
    var answer=eval(expression)
    if(answer===undefined)
    answer="Invalid Input"
    document.getElementById('textarea').value=answer
}