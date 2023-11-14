

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

let selected = document.querySelector(".selected-photo");

let all = document.querySelector(".all-photos");


first.addEventListener("click", ()=>{
        selected.innerHTML = ``;
        

    selected.innerHTML += `
    <img src="images/image3.png" alt="">
    `
})

second.addEventListener("click", ()=>{
    selected.innerHTML = ``;
    

selected.innerHTML += `
<img src="images/image 4.png" alt="">
`
})

third.addEventListener("click", ()=>{
    selected.innerHTML = ``;
    

selected.innerHTML += `
<img src="images/image 5.png" alt="">
`
})
