/*To-do list
Neste projeto, iremos criar uma simples lista de tarefas.

Instruções
Antes de clonar o projeto, tente fazer seguindo as instruções abaixo:

Crie um campo de input de texto e um botão para adicionar a tarefa à lista;
Quando o botão for pressionado, o texto deve aparecer na lista com um checkbox ao lado;
Quando o usuário selecionar o checkbox, o item correspondente deve ficar com o texto riscado. (ex.: tarefa completa. dica: você pode resolver isso facilmente com CSS)
O resultado esperado é parecido com este:

Exemplo de to-do list*/

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}