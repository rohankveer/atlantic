(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const year = document.getElementById('year');

  // ── Lightbox ──
  const lightbox     = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lightbox-img');
  const lbCaption    = document.getElementById('lightbox-caption');
  const lbClose      = document.getElementById('lightbox-close');
  const lbPrev       = document.getElementById('lightbox-prev');
  const lbNext       = document.getElementById('lightbox-next');

  let lbImages = [];
  let lbIndex  = 0;

  function lbOpen(index) {
    lbIndex = index;
    const img = lbImages[lbIndex];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function lbClose_fn() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function lbStep(dir) {
    lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
    const img = lbImages[lbIndex];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = img.alt;
    // restart zoom animation
    lbImg.style.animation = 'none';
    lbImg.offsetHeight; // reflow
    lbImg.style.animation = '';
  }

  document.querySelectorAll('#products img[data-lightbox]').forEach(function (img, i) {
    lbImages.push(img);
    img.addEventListener('click', function () { lbOpen(i); });
  });

  if (lightbox) {
    lbClose.addEventListener('click', lbClose_fn);
    lbPrev.addEventListener('click', function () { lbStep(-1); });
    lbNext.addEventListener('click', function () { lbStep(1); });

    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lbClose_fn();
    });

    // Keyboard: Escape closes, arrow keys navigate
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape')      lbClose_fn();
      if (e.key === 'ArrowLeft')   lbStep(-1);
      if (e.key === 'ArrowRight')  lbStep(1);
    });
  }

  // Returns 'dark' between 19:00 and 06:59, 'light' otherwise.
  function timeBasedTheme() {
    const hour = new Date().getHours();
    return (hour >= 19 || hour < 7) ? 'dark' : 'light';
  }

  // Priority: user's manual choice > time-of-day default.
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme || timeBasedTheme();

  root.setAttribute('data-theme', initialTheme);

  if (toggle) {
    toggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Re-check every minute and update only if the user hasn't set a preference.
  setInterval(function () {
    if (!localStorage.getItem('theme')) {
      root.setAttribute('data-theme', timeBasedTheme());
    }
  }, 60 * 1000);

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
