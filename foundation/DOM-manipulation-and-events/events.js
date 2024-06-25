const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("set onclick properties on DOM node");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener(
    "click",
    () =>{
        alert("I'm an event listener");
    }
);

function alertFunction(){
    alert("Hello world");
}

const btn4 = document.querySelector("#btn4");
btn4.onclick = alertFunction;

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", alertFunction);