document.getElementById('addBtn').addEventListener('click', function() {
  var taskInput = document.getElementById('taskInput');
  var taskText = taskInput.value.trim();
  if (taskText !== '') {
      var taskList = document.getElementById('taskList');
      var newTask = document.createElement('li');
      newTask.textContent = taskText;
      taskList.appendChild(newTask);
      taskInput.value = ''; // Clear the input field after adding task
  }
});

document.getElementById('selectBtn').addEventListener('click', function() {
  var taskList = document.getElementById('taskList');
  var tasks = taskList.getElementsByTagName('li');

  for (var i = 0; i < tasks.length; i++) {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'taskCheckbox';
      tasks[i].appendChild(checkbox);
  }

  this.style.display = 'none'; // Hide the select button after checkboxes are added
});

document.getElementById('deleteBtn').addEventListener('click', function() {
  var checkboxes = document.getElementsByClassName('taskCheckbox');
  var taskList = document.getElementById('taskList');

  for (var i = checkboxes.length - 1; i >= 0; i--) {
      if (checkboxes[i].checked) {
          taskList.removeChild(checkboxes[i].parentNode);
      }
  }
});
