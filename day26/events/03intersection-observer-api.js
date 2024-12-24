//Observes visibility changes without continuous polling. Lazy loading, infinite scroll.
// Target element
const target = document.querySelector('#image');

// Intersection Observer

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible');
      entry.target.src = 'image.jpg'; // Lazy load the image
      observer.unobserve(entry.target); // Stop observing
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% visible

observer.observe(target);
