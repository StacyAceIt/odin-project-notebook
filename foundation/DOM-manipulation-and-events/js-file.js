document.addEventListener("DOMContentLoaded", () => {
    // Create a new body element
    //const newBody = document.createElement("body");
    const newBody = document.querySelector("body");
    //1. <p>
    const p = document.createElement("p");
    p.textContent = "Hey, I'm red";
    p.style.color = "red";
    newBody.appendChild(p);

    //2. <h3>
    const h3 = document.createElement("h3");
    h3.textContent = "I'm a blue h3";
    h3.style.color = "blue";
    newBody.appendChild(h3);

    //3. <div>
    const div = document.createElement("div");
    div.style.borderColor = "black";
    div.style.backgroundColor = "pink";

    const h1 = document.createElement("h1");
    h1.textContent = "I'm in a div";
    const pp = document.createElement("p");
    pp.textContent = "ME TOO";
    div.appendChild(h1);
    div.appendChild(pp);
    
    newBody.appendChild(div);
    

    // Replace the existing body with the new body
    //document.documentElement.replaceChild(newBody, document.body);
});
