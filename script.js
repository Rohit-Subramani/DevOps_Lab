const input = document.getElementById("studentName");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addStudent();
    }
});

function addStudent() {

    let name = input.value.trim();

    if (name === "") {
        alert("Please enter a student name.");
        return;
    }

    // Check duplicate names
    let students = document.querySelectorAll("#studentList li span");

    for (let student of students) {
        if (student.innerText.toLowerCase() === name.toLowerCase()) {
            alert("Student already exists!");
            return;
        }
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = name;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("studentList").appendChild(li);

    input.value = "";
    input.focus();
}