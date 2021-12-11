var button = document.getElementById("button");
var inpt = document.querySelector("input");
var ul = document.getElementById("myList");
var ulItems =document.querySelectorAll("li button");
var li =document.querySelectorAll("li");

for (i=0; i< li.length; i++) {
  li[i].querySelector("h4").addEventListener("click", boldFunction)
}
function boldFunction() {
  this.classList.toggle("bold");
}   


button.addEventListener("click" ,function() {
  if (inpt.value !=="") {
    addLi();
  }
})

inpt.addEventListener("keypress" ,function(event) {
  if (inpt.value !=="" && event.key === "Enter"  ) {
  addLi(); 
  }
})

for (i=0; i< ulItems.length; i++) {
  ulItems[i].addEventListener("click", myfunction );
}

function myfunction() {
  this.parentNode.remove();
}

function addLi() {
  li = document.createElement("li");
  let item = document.createElement("h4");
  item.textContent = inpt.value;
  li.appendChild(item);
  btn = document.createElement("button");
  btn.appendChild(document.createTextNode("delite"));
  li.appendChild(btn);
  ul.appendChild(li);
  btn.addEventListener("click", myfunction);
  item.addEventListener("click", boldFunction);
  inpt.value = '';
} 