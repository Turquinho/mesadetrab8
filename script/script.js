
function msg(){
    alert("Você clicou no 2")
};
function cor1(){
    document.getElementById("btn3").style.backgroundColor="#fff"  
};
function cor2(){
    document.getElementById("btn3").style.backgroundColor="hsl(213, 19%, 18%)"
};
function width1(){
    document.getElementById("btn5").style.borderRadius="5%"
}


document.getElementById("btn3").addEventListener("mouseover",cor1);
document.getElementById("btn3").addEventListener("mouseout",cor2);
document.getElementById("btn5").addEventListener("dblclick", width1)

document.addEventListener("keypress", function(e) {
    if(e.key === "4"){
        document.getElementById("btn4").style.backgroundColor="#fff";
    } else {
        document.getElementById("btn4").style.backgroundColor="hsl(213, 19%, 18%)"
    }
})


var submitBtn = window.document.getElementById('submit')
submitBtn.addEventListener('click', clicar)
submitBtn.addEventListener('mouseenter', entrar)
submitBtn.addEventListener('mouseout', sair)

function clicar() {
    submitBtn.innerText = 'Clicou!'
    submitBtn.style.background = 'red'
}
function entrar () {
    submitBtn.innerText = 'Você tem certeza??'
}
function sair (){
    submitBtn.innerText = 'Submit!!'
    submitBtn.style.background = 'black'
}
