const users = []

let body=document.querySelector(".body")
let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let list = document.querySelector(".list")
let ul = document.querySelector("ul")
let li=document.querySelector(".li")
let todo = document.querySelector(".todo")
let errorMsg=document.querySelector(".error")



btn.addEventListener("click", function () {
    let li = document.createElement("li");
    let newUser = {
        input: input.Value
    }
    users.push(newUser)
    li.innerText = `${input.value}`
    ul.append(li)
    input.Value = "";
    ageInput.value=0;
    if (input.Value.trim=="") {
        errorMsg.classList.replace("d-none","d-block");
    }
    else{
        errorMsg.classList.replace("d-block","d-none");
    }
    console.log(users);
})