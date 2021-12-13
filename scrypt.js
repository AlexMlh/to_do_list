let button = document.getElementById("button");
let inpt = document.querySelector("input");
let ul = document.getElementById("myList");
let ulItems =document.querySelectorAll("li button");
let li =document.querySelectorAll("li");
let delBtn = document.getElementById("del");

if(localStorage.length != 0) {
  storege =JSON.parse(localStorage.getItem("storage"));
  console.log(storege)
;  storege.forEach(i => addLi(Object.keys(i)[0], i[Object.keys(i)[0]]));
}

button.addEventListener("click" ,function() {
  if (inpt.value !=="") {
    addLi(inpt.value);
  }
})

inpt.addEventListener("keypress" ,function(event) {
  if (inpt.value !=="" && event.key === "Enter"  ) {
    addLi(inpt.value); 
  }
})


window.onunload =  function() {
  localStorage.clear();
  let li =document.querySelectorAll("li");
  if(li.length == 0) return;
  let str = [];
  li.forEach(function(item) {
    text = item.querySelector("h4").textContent;
    str.push({[text] : item.querySelector("h4").classList.contains("crossLine")});
  })
  localStorage.setItem("storage",JSON.stringify(str));
}

function removeItem() {
  this.parentNode.remove();
  if(delBtn.style.visibility == "visible" && document.querySelectorAll("ul li").length < 3) {
    delBtn.style.visibility = "hidden";
  } 
}

function crossLine() {
  this.classList.toggle("crossLine");
}   

function clearFunc() {
  ul.innerHTML = "";  
  delBtn.style.visibility = "hidden";
  console.log("clear")
}

function addLi(itm, cross = false) {
  li = document.createElement("li");
  let textItem = document.createElement("h4");
  textItem.addEventListener("click", crossLine);
  if(cross) {textItem.classList.add('crossLine')};
  textItem.textContent = itm;
  li.appendChild(textItem);
  btn = document.createElement("button");
  let rmv = document.createTextNode("X");
  rmv.addEventListener("click", removeItem)
  btn.appendChild(rmv);
  li.appendChild(btn);
  ul.appendChild(li);
  btn.addEventListener("click", removeItem);
  textItem.addEventListener("click", crossLine);
  inpt.value = '';
  if(delBtn.style.visibility == "hidden" && document.querySelectorAll("ul li").length > 2) {
    delBtn.style.visibility = "visible";
  } 
} 