document.getElementById("add").addEventListener("click", addItem);

function addItem() {
    const newDiv = document.createElement("div");
    const list = document.querySelector(".inventory div:nth-child(1)");
    list.appendChild(newDiv);
    newDiv.className = "test";   
};