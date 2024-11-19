//ReadMore to bar-awal
document.getElementById("readMoreButton").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default behavior
    let target = document.getElementById("bar-awal");
    let start = window.pageYOffset; // Current scroll position
    let targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100; // Target position
    let distance = targetPosition - start; // Distance to travel
    let duration = 200; // Time duration in milliseconds (faster)
    let startTime = null;
  
    function smoothScroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, start, distance, duration); // Easing function for smoothness
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(smoothScroll); // Continue animation
    }
  
    // Ease function for smooth animation
    function ease(t, b, c, d) {
      let p = t / d;
      return c * p * (2 - p) + b; // Slightly smoother easing for moderate speed
    }
  
    requestAnimationFrame(smoothScroll); // Start animation
  });
