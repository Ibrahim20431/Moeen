document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  const htmlDoc = document.documentElement;
  
  // Language switcher
  langToggle.addEventListener('click', () => {
    const isAr = htmlDoc.getAttribute('lang') === 'ar';
    const newLang = isAr ? 'en' : 'ar';
    const newDir = isAr ? 'ltr' : 'rtl';
    
    htmlDoc.setAttribute('lang', newLang);
    htmlDoc.setAttribute('dir', newDir);
    langToggle.textContent = isAr ? 'AR' : 'EN';
    
    updateContent(newLang);
  });

  function updateContent(lang) {
    const elements = document.querySelectorAll('[data-ar]');
    elements.forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text; // Using innerHTML to support potential small icons or breaks
        }
      }
    });

    // Update document title
    if (lang === 'ar') {
      document.title = 'فنيين | أسهل طريقة للوصول لفني محترف';
    } else {
      document.title = 'Fanyin | The easiest way to reach a pro';
    }
  }

  // Hamburger menu toggle (basic for demo)
  const hamburger = document.querySelector('.header__hamburger');
  hamburger.addEventListener('click', () => {
    alert('Mobile menu clicked! (Feature not requested in details but added hamburger for completeness)');
  });

  // Sticky header scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
});
