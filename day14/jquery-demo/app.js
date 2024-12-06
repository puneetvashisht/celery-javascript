jquery(document).ready(function() {
    // Add a new task
    $('#add-task').click(function() {
      const taskText = $('#new-task').val().trim();
      if (taskText !== '') {
        const taskItem = `
          <li class="todo-item">
            <span>${taskText}</span>
            <button class="remove-btn">Remove</button>
          </li>`;
        $('#todo-list').append(taskItem);
        $('#new-task').val(''); // Clear input field
      }
    });
  
    // Mark task as completed
    $('#todo-list').on('click', '.todo-item', function() {
      $(this).toggleClass('completed');
    });
  
    // Remove a task
    $('#todo-list').on('click', '.remove-btn', function(event) {
      $(this).parent().remove();
      event.stopPropagation(); // Prevent event bubbling
    });
  });
  