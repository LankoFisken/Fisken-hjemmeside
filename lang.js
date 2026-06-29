(function(){
  var KEY = 'fisken-lang';
  var current = localStorage.getItem(KEY); // null = first visit, show HTML as-is

  function apply(lang) {
    current = lang;
    localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'da';

    document.querySelectorAll('[data-da]').forEach(function(el) {
      var val = lang === 'da' ? el.dataset.da : el.dataset.en;
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-da-ph]').forEach(function(el) {
      el.placeholder = lang === 'da' ? el.dataset.daPh : (el.dataset.enPh || el.dataset.daPh);
    });

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (current) apply(current);
    else {
      // No preference stored — show HTML as-is, highlight DA visually as suggested default
      document.querySelectorAll('.lang-btn[data-lang="da"]').forEach(function(b){ b.style.opacity = '.75'; });
    }
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { apply(btn.dataset.lang); });
    });
  });
})();
