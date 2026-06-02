const ROOT = document.body.dataset.root ?? '';

async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(`${ROOT}${file}`);
    if (!res.ok) return;
    const html = await res.text();
    el.insertAdjacentHTML('beforebegin', html);
    el.remove();
  } catch (e) {
    console.warn('Could not load component:', file);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('header-placeholder', 'components/header.html'),
    loadComponent('footer-placeholder', 'components/footer.html'),
  ]);
  initNav();
});

function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('mobileMenu');

  if (!nav) return;

  // On non-home pages, keep nav solid always
  if (!document.body.classList.contains('page-home')) {
    nav.classList.remove('nav--transparent');
    nav.classList.add('nav--solid');
  }

  // Scroll: make nav solid after 60px
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Burger toggle
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      burger.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
}
