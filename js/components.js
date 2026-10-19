const ROOT = document.body.dataset.root ?? '';
// Reuse this script's ?v= so the shared header busts the cache on each deploy too
const VERSION = new URL(document.currentScript.src).searchParams.get('v');

function rewriteRelativeLinks(container) {
  container.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (/^(https?:|tel:|mailto:|#)/.test(href)) return;
    a.setAttribute('href', ROOT + href);
  });
  container.querySelectorAll('img[src]').forEach(img => {
    const src = img.getAttribute('src');
    if (/^(https?:|data:)/.test(src)) return;
    img.setAttribute('src', ROOT + src);
  });
}

async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(`${ROOT}${file}${VERSION ? `?v=${VERSION}` : ''}`);
    if (!res.ok) return;
    const html = await res.text();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    rewriteRelativeLinks(wrapper);
    while (wrapper.firstChild) {
      el.parentNode.insertBefore(wrapper.firstChild, el);
    }
    el.remove();
  } catch (e) {
    console.warn('Could not load component:', file);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header-placeholder', 'components/header.html');
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

  // Home: hide the nav logo while the big hero logo is on screen
  const heroLogo = document.querySelector('.hero__logo-img');
  if (heroLogo && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      nav.classList.toggle('nav--logo-hidden', entry.isIntersecting);
    }, { rootMargin: `-${nav.offsetHeight}px 0px 0px 0px` }).observe(heroLogo);
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
