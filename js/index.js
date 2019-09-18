function setUp() {
	let submitButton = document.getElementById("submitTodo");
	submitButton.addEventListener("click", (event) => {
		event.preventDefault();
		let todoLine = document.createElement("div");
		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.classList.add("todoCheckbox");
		let todoDesc = document.createElement("span");
		todoDesc.classList.add("todoDesc");
		todoDesc.textContent = todoInput.value;
		todoInput.value = "";
		todoLine.appendChild(checkbox);
		todoLine.appendChild(todoDesc);
		todoList.appendChild(todoLine);
	});

	let deleteButton = document.getElementById("todoDelete");
	deleteButton.addEventListener("click", (event) => {
		todoList.innerHTML = '';
	});

	let clearButton = document.getElementById("todoClear");
	clearButton.addEventListener("click", (event) => {
		let checkboxList = document.getElementsByClassName("todoCheckbox");
		for (let i = 0; i < checkboxList.length; i++){
			checkboxList[i].checked = false;
		}
	});

	let markButton = document.getElementById("todoMark");
	markButton.addEventListener("click", (event) => {
		let checkboxList = document.getElementsByClassName("todoCheckbox");
		for (let i = 0; i < checkboxList.length; i++){
			checkboxList[i].checked = true;
		}
	});
}

let todoList = document.getElementById("todoList");
let todoInput = document.getElementById("todoInput");
todoInput.value = "";
setUp();