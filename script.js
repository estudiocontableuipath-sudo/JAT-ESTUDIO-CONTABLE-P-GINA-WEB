document.addEventListener("DOMContentLoaded", function(){

  // Fade-in al scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.1 });
  fadeElements.forEach(el => observer.observe(el));

  // Año dinámico
  document.getElementById('year').textContent = new Date().getFullYear();

  // FAQ toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      faqItems.forEach(i => {
        const a = i.querySelector('.faq-answer');
        if(i !== item) a.style.display = 'none';
      });
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    });
  });

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  hamburger.addEventListener('click', ()=>{
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '60px';
    nav.style.right = '20px';
    nav.style.background = 'rgba(30,32,36,0.95)';
    nav.style.padding = '20px';
    nav.style.borderRadius = '10px';
  });

});
