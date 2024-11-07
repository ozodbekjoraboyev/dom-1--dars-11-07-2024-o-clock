let soat = document.querySelector(".taym");
let haur = document.querySelector(".haur");
let mint = document.querySelector(".mint");
let sekond = document.querySelector(".sekond");
let body = document.querySelector("body")
setInterval(()=>{
    let deyt = new Date();
    haur.innerHTML = deyt.getHours().toString().padStart(2, "0");
    mint.innerHTML = deyt.getMinutes().toString().padStart(2, "0");
    sekond.innerHTML = deyt.getSeconds().toString().padStart(2, "0");
    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}, 1000 );
