document.getElementById("btn").onclick = function(){
    alert("Welcome to CYBORG-X!");
};
const text = "WELCOME TO THE FUTURE";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,100);
    }
}

typeWriter();

document.getElementById("btn").onclick = function(){
    alert("Welcome to CYBORG-X!");
};