let paragraph = document.getElementById("greeting");
console.log(paragraph.textContent); // "Hello"


//Returns the first matching element

let msg = document.querySelector(".message");
console.log(msg.textContent); // "Hi"



//Returns all matching elements as a NodeList

let items = document.querySelectorAll("li");
items.forEach(item => console.log(item.textContent));



//Modifying the DOM
let title = document.getElementById("title");
title.textContent = "New Title";


//add a HTML
let container = document.querySelector(".box");
container.innerHTML = "<strong>Bold text</strong>";


//Change css
let btn = document.querySelector("button");
btn.style.backgroundColor = "blue";
btn.style.color = "white";


//Add an element
let newItem = document.createElement("li");
newItem.textContent = "New Item";
document.querySelector("ul").appendChild(newItem);


//Delete an element
let toDelete = document.querySelector(".remove-me");
toDelete.remove(); //new way

  //2.way
    let parent = document.querySelector("ul");
    let child = document.querySelector("li");
    parent.removeChild(child); // old way


    
