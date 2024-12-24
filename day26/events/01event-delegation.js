document.getElementById('parent').addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.child')) {
      console.log('Child button clicked:', event.target.textContent);
    }
  });
  
  // HTML
  /*
  <div id="parent">
    <button class="child">Button 1</button>
    <button class="child">Button 2</button>
  </div>
  */
  