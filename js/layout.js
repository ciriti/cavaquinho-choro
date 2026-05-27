(function () {
  'use strict';

  const NAV_PAGES = [
    { id: 'choro',   href: 'choro.html',   label: 'Choro' },
    { id: 'forro',   href: 'forro.html',   label: 'Forró' },
    { id: 'pagode',  href: 'pagode.html',  label: 'Pagode' },
    { id: 'armonia', href: 'armonia.html', label: 'Armonia' }
  ];

  const renderSiteNav = function (pageId) {
    const nav = document.createElement('header');
    nav.className = 'site-nav';

    const brand = document.createElement('a');
    brand.className = 'nav-brand';
    brand.href = 'index.html';
    brand.textContent = 'Ritmos do Brasil';

    const paths = document.createElement('nav');
    paths.className = 'nav-paths';
    paths.setAttribute('aria-label', 'Percorsi del sito');

    NAV_PAGES.forEach(function (page) {
      const link = document.createElement('a');
      link.className = 'nav-link' + (page.id === pageId ? ' active' : '');
      link.href = page.href;
      link.setAttribute('data-path', page.id);
      link.textContent = page.label;
      if (page.id === pageId) link.setAttribute('aria-current', 'page');
      paths.append(link);
    });

    const controls = document.createElement('div');
    controls.className = 'nav-controls';

    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'language-switcher';

    const instrSwitcher = document.createElement('div');
    instrSwitcher.className = 'instrument-switcher';

    controls.append(langSwitcher, instrSwitcher);
    nav.append(brand, paths, controls);
    return nav;
  };

  const renderPageHero = function (pageId) {
    const header = document.getElementById('top');
    if (!header) return;

    const flagStripe = document.createElement('div');
    flagStripe.className = 'flag-stripe';
    flagStripe.setAttribute('aria-hidden', 'true');
    flagStripe.innerHTML = '<span></span><span></span><span></span>';

    const h1 = document.createElement('h1');
    h1.id = 'page-title';

    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.id = 'page-subtitle';

    header.replaceChildren(flagStripe, h1, subtitle);
  };

  const header = document.getElementById('top');
  if (header && header.dataset.page) {
    const pageId = header.dataset.page;
    const siteNav = renderSiteNav(pageId);
    document.body.insertBefore(siteNav, header);
    renderPageHero(pageId);
  }

  window.CavaquinhoLayout = { renderSiteNav, renderPageHero };
})();
