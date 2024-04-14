document.getElementById("add").addEventListener("click", addItem);
document.getElementById("add").addEventListener("click", submitForm);

function addItem() {
    const newDiv = document.createElement("div");
    const list = document.querySelector(".inventory div:nth-child(1)");
    list.appendChild(newDiv);
    newDiv.className = "test";   
};

function submitForm() {
    
    //new element
    const newName = document.createElement("p");
    newName.className = "test-2"
    const listName = document.querySelector(".item-start div:nth-child(2)");

    //get text from form
    const itemName = document.getElementById("item-name").innerHTML;

    //set text from form to class of new
    document.getElementsByClassName("new-name").innerHTML = itemName;
    
    listName.appendChild(newName);
};