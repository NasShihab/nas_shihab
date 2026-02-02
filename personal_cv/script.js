document.addEventListener('DOMContentLoaded', () => {
  // Scroll Reveal Animation
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', reveal);

  // Initial call to reveal elements on load
  reveal();

  // Subtle parallax for circles
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const circle1 = document.querySelector('.circle-1');
    const circle2 = document.querySelector('.circle-2');

    if (circle1) {
      circle1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    }
    if (circle2) {
      circle2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
    }
  });
});
