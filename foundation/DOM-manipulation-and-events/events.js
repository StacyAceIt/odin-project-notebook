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

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function(e){
    console.log(e.target);
    
    alert("Hello World");
    e.target.style.background = "blue";
    
});

const buttons = document.querySelectorAll(".click-me");
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        alert(button.id);
    }

    )
}

);