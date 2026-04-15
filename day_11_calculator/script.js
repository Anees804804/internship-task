const inputField = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");

// Task add karne ka function
function addTask() {
    if (inputField.value === '') {
        alert("Please write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);

        // Delete button banana
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Yeh 'x' ka symbol hai
        li.appendChild(span);
    }
    inputField.value = "";
    saveData();
}

// Click events handle karna (Check ya Delete)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Data ko Browser memory mein save karna
function saveData() {
    localStorage.setItem("myTasks", listContainer.innerHTML);
}

// Page refresh hone par data wapas lana
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("myTasks");
}

showTasks();