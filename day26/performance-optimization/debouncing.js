// ensures a function is executed only after a specific delay 

function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Usage
  const handleInput = debounce((text) => {
    console.log("Search for:", text);
  }, 300);
  
  document.getElementById("searchBox").addEventListener("input", (event) => {
    handleInput(event.target.value);
  });
  