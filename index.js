document.getElementById("add").addEventListener("click", addItem);

function addItem() {
    const newDiv = document.createElement("div");
    const list = document.getElementsByClassName("inventory");
    document.body.appendChild(newDiv);
    newDiv.className = "test";   
}