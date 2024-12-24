// Create a custom event
const myEvent = new CustomEvent('myEvent', {
    detail: { message: 'Hello from Custom Event!' }
  });
  
  // Event listener
  document.addEventListener('myEvent', function (e) {
    console.log(e.detail.message); // Access data from 'detail'
  });
  
  // Dispatch the event
  document.dispatchEvent(myEvent);
  