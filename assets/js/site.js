// site.js

document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll for nav links that start with #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      // Prevents the default jump-to-anchor behavior
      e.preventDefault(); 
      
      // Scrolls smoothly to the element referenced by the href
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Simple fade-in on scroll effect
  const faders = document.querySelectorAll(".fade-in");
  
  // Options for the IntersectionObserver
  const appearOptions = {
    // Sets a threshold of 20%, meaning the element will
    // trigger the fade-in when 20% of it is visible
    threshold: 0.2 
  };

  // The IntersectionObserver callback function
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      // If the element is not intersecting (not in view), do nothing
      if (!entry.isIntersecting) {
        return;
      }
      
      // If it is intersecting, add the 'appear' class to trigger the CSS transition
      entry.target.classList.add("appear");
      
      // Stop observing the element once it has appeared
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  // Loop through all elements with the 'fade-in' class and observe them
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
