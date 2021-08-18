var todosList = new Vue({
  el: '#todos__list',
  data: {
    finalId: 0,
    todos: [],
  },
});

var formInput = new Vue({
  el: '#newTodoTitle',
  data: {
    newTodoTitle: '',
  },
});

document.getElementById('addTaskForm').onsubmit = (event) => {
  event.preventDefault();
  if (formInput.newTodoTitle != '') {
    todosList.todos.push({
      id: todosList.finalId,
      title: formInput.newTodoTitle,
    });
    formInput.newTodoTitle = '';
    todosList.finalId += 1;
  }
};
