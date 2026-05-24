/* Shared page header for choro.html, forro.html, pagode.html */
(function () {
  'use strict';

  const NAV_PAGES = [
    { id: 'choose', href: 'index.html',  labelIt: 'Scegli il percorso' },
    { id: 'choro',  href: 'choro.html',  labelIt: 'Choro' },
    { id: 'forro',  href: 'forro.html',  labelIt: 'Forró' },
    { id: 'pagode', href: 'pagode.html', labelIt: 'Pagode' }
  ];

  const renderPageHeader = function (pageId) {
    const header = document.getElementById('top');
    if (!header) return;

    const flagStripe = document.createElement('div');
    flagStripe.className = 'flag-stripe';
    flagStripe.setAttribute('aria-hidden', 'true');
    flagStripe.innerHTML = '<span></span><span></span><span></span>';

    const nav = document.createElement('nav');
    nav.className = 'genre-nav';
    nav.setAttribute('aria-label', 'Percorsi del sito');
    NAV_PAGES.forEach(function (page) {
      const link = document.createElement('a');
      link.className = 'genre-link' + (page.id === pageId ? ' is-active' : '');
      link.href = page.href;
      link.setAttribute('data-nav', page.id);
      link.textContent = page.labelIt;
      if (page.id === pageId) {
        link.setAttribute('aria-current', 'page');
      }
      nav.append(link);
    });

    const desktopPrefs = document.createElement('div');
    desktopPrefs.className = 'desktop-preferences';
    desktopPrefs.innerHTML = '<div class="language-switcher"></div><div class="instrument-switcher"></div>';

    const h1 = document.createElement('h1');
    h1.id = 'page-title';

    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.id = 'page-subtitle';

    header.replaceChildren(flagStripe, nav, desktopPrefs, h1, subtitle);
  };

  /* Auto-init: read pageId from <header id="top" data-page="..."> */
  const header = document.getElementById('top');
  if (header && header.dataset.page) {
    renderPageHeader(header.dataset.page);
  }

  window.CavaquinhoLayout = { renderPageHeader };
})();
