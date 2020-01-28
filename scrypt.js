var button = document.getElementById("button");
var inpt = document.querySelector("input");
var ul = document.getElementById("myList");
var ulItems =document.querySelectorAll("li button");
var li =document.querySelectorAll("li");

for (i=0; i< li.length; i++) {
  li[i].addEventListener("click", boldFunction)
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
    li.appendChild(document.createTextNode(inpt.value));
    btn = document.createElement("button");
    btn.appendChild(document.createTextNode("delite"));
    ul.appendChild(li);
    li.appendChild(btn);
    btn.addEventListener("click", myfunction);
    li.addEventListener("click", boldFunction);
    inpt.value = '';
} 