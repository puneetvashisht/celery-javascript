// function is executed at most once in a specified time interval

function throttle(func, interval) {
    let lastTime = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastTime >= interval) {
        lastTime = now;
        func.apply(this, args);
      }
    };
  }
  
  // Usage
  const handleScroll = throttle(() => {
    console.log("Scroll event triggered!");
  }, 200);
  
  window.addEventListener("scroll", handleScroll);
  