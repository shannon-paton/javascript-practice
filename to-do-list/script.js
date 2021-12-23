function addItem () {
	var ul = document.getElementById('to-do-list');
	var li = document.createElement("li");

	var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.value = 1;
		checkbox.name = 'todo[]';
		checkbox.onchange = handleChange; // assigns handleChange function
	li.appendChild(checkbox);

	var listItem = document.getElementById('list-item');
	li.appendChild(document.createTextNode(listItem.value));
	ul.appendChild(li); //adds list item to unordered list
}

function handleChange(event) {
	var completedList = document.getElementById('completed-list');
	var checkbox = event.currentTarget;
	if(checkbox.checked == true) {
		var listItem = document.getElementById("list-item");
		completedList.appendChild(document.createTextNode(listItem.value));
		completedList.appendChild(listItem); //adds list item to completed list
		
	}
}




// function removeItem() {
// 	var listItem = document.getElementById("list-item");
// 	var ul = document.getElementById("completed-list");
// 	ul.appendChild(listItem);
// }


//debugger;



	//li.setAttribute('id',listItem.value); //gets value of list item from text???
