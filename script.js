let btn = document.getElementById("button_1");
btn.addEventListener("click", addItems);
let parentList = document.getElementById("parentList");
let x = 0;
function addItems(e) {
  if (x == 1) {
    if (parentList.children[0].className.includes("empty")) {
      parentList.children[0].remove();
    }
  }

  let a = e.currentTarget;
  console.log(a);
  let b = a.previousElementSibling;
  let c = b.value;
  let newLi = document.createElement("li");
  newLi.className = "list";
  if(!c){
    alert("enter your list")
  }
  else{
  newLi.innerHTML = `
    <h4>${c}</h4>
    <button class="btn btn_1" onclick="editOption(this)">Edit</button>&nbsp;
    <button class="btn btn_2" onclick="removeOption(this)">Remove</button>
    `;
  parentList.appendChild(newLi);
  }
  console.log(parentList.children.length);
}
function removeOption(re) {
  x = 1;
  re.parentElement.remove();
  console.log(re.currentTarget);
  if (parentList.children.length <= 0) {
    let emt = document.createElement("h5");
    emt.className = "list";
    emt.classList.add("empty");
    emt.textContent = "EMPTY";
    parentList.append(emt);
    console.log(parentList.children[0].className);
  }
}
function editOption(c) {
  if (c.textContent == "Edit") {
    c.textContent = "Done";
    let currentInputValue = c.previousElementSibling.textContent;
    let inputValue = document.createElement("input");
    inputValue.type = "text";
    inputValue.className = "input";
    inputValue.value=currentInputValue
    c.parentElement.replaceChild(inputValue,c.previousElementSibling)
  } else {
    c.textContent = "Edit";
    let currentInputValue=c.previousElementSibling.value;
    console.log(currentInputValue)
    let currHeading=document.createElement("h4")
     currHeading.type="text"
    currHeading.textContent=currentInputValue
    c.parentElement.replaceChild(currHeading,c.previousElementSibling)
  }
}
