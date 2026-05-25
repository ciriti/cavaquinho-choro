(function () {
  'use strict';

  function getStorageKey() {
    return 'rdb-progress-' + location.pathname;
  }

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(getStorageKey()) || '{}'); } catch(e) { return {}; }
  }

  function saveProgress(state) {
    try { localStorage.setItem(getStorageKey(), JSON.stringify(state)); } catch(e) {}
  }

  function circleIcon() {
    return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1"/></svg>';
  }

  function checkIcon() {
    return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#2D6A4F"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#52B788" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function buildSidebar() {
    const sidebar = document.getElementById('progress-sidebar');
    if (!sidebar) return;

    const headings = document.querySelectorAll('.content-column h2.section-title');
    const progress = getProgress();

    const total = headings.length;
    const doneCount = Object.values(progress).filter(Boolean).length;
    const pct = total > 0 ? Math.round(doneCount / total * 100) : 0;

    let html = '<div class="progress-wrap">' +
      '<div class="progress-bar"><div class="progress-fill" id="prog-fill" style="width:' + pct + '%"></div></div>' +
      '<span class="progress-label" id="prog-label">' + doneCount + '/' + total + ' completati</span>' +
      '</div>' +
      '<p class="sidebar-title">Moduli</p>';

    headings.forEach(function(h, i) {
      if (!h.id) h.id = 'mod-' + i;
      const done = !!progress[h.id];
      html += '<div class="sidebar-item' + (done ? ' done' : '') + '" data-target="' + h.id + '">' +
        '<button class="check-btn" data-id="' + h.id + '" aria-label="Segna come completato">' +
        (done ? checkIcon() : circleIcon()) +
        '</button>' +
        '<a class="sidebar-label" href="#' + h.id + '">' + h.textContent.trim() + '</a>' +
        '</div>';
    });

    sidebar.innerHTML = html;

    sidebar.addEventListener('click', function(e) {
      const btn = e.target.closest('.check-btn');
      if (!btn) return;
      const id = btn.dataset.id;
      const st = getProgress();
      st[id] = !st[id];
      saveProgress(st);
      buildSidebar();
    });
  }

  function initScrollSpy() {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.sidebar-item').forEach(function(item) {
          item.classList.toggle('active', item.dataset.target === entry.target.id);
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    document.querySelectorAll('.content-column h2.section-title[id]').forEach(function(h) {
      observer.observe(h);
    });
  }

  window.RitmosProgress = { buildSidebar, initScrollSpy };

  document.addEventListener('DOMContentLoaded', function() {
    buildSidebar();
    initScrollSpy();
  });
})();
