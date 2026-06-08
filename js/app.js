/* ============================================================
   NWCEX — North-West Care Exchange · Landing page behaviour
   Vanilla JS recreation of the prototype's React interactivity:
   smooth-scroll + scroll-spy nav, speaker carousel, mock
   Eventbrite checkout totals, contact form, and ticket modal.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Data ---------- */
  var SPEAKERS = [
    { name: 'Salome Rumbi Chamboko', role: 'Qualified Accountant (FCCA) · Tax Specialist · Tax Coach · Financial Wellbeing Advocate · Speaker · Author', img: 'assets/sp-salome.png', pos: 'center 4%' },
    { name: 'Effie Smillie', role: 'CEO, Rainbow Medical Services', img: 'assets/sp-effie.png', pos: 'center top' },
    { name: 'Nyasha Gwatidzo', role: 'Social Entrepreneur · Award-Winning CEO · Global Change Maker', img: 'assets/sp-nyasha.png', pos: 'center top' },
    { name: 'Andrew Nyamayaro', role: 'Director, Tann Law Solicitors', img: 'assets/sp-andrew.png', pos: 'center 12%' },
    { name: 'Tapiwa Madovi', role: 'Investor · NED · Supported Living Consultant', img: 'assets/sp-tapiwa.png', pos: 'center top' },
    { name: 'Muzzie Nduna', role: 'Property Entrepreneur · Business Mentor · Public Speaker', img: 'assets/sp-muzzie.png', pos: 'center top' },
    { name: 'Bonita Santos', role: 'Co-Founder & CEO, NWCEX', img: 'assets/sp-bonita.png', pos: 'center top', scale: 1.42, origin: 'center 34%' },
    { name: 'Chris Dzikiti', role: 'Interim Chief Inspector of Mental Health, CQC', img: 'assets/sp-chris.png', pos: 'center top' },
    { name: 'Christine Fraser-Thomson', role: 'RMN · Mental Health Specialist Nurse · ADHD & Autism Clinical Lead', img: 'assets/sp-christine.png', pos: 'center top' }
  ];

  var TIERS = [
    { name: 'Conference Only', price: '£224', priceNum: 224 },
    { name: 'Conference + Gala Dinner', price: '£300', priceNum: 300 },
    { name: 'Gala Dinner Only', price: '£146', priceNum: 146 }
  ];

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function icon(name) { return '<i data-lucide="' + name + '"></i>'; }
  function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }

  /* ============================================================
     SCROLL — smooth scroll, sticky header, scroll-spy
     ============================================================ */
  var HEADER_OFFSET = 76;
  var NAV_IDS = ['about', 'programme', 'speakers', 'tickets', 'contact'];

  function scrollToId(id) {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  function initScroll() {
    $$('[data-scroll]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToId(a.getAttribute('data-scroll'));
      });
    });

    var header = $('#site-header');
    var navLinks = $$('.main-nav a[data-nav]');

    function onScroll() {
      header.classList.toggle('scrolled', window.pageYOffset > 24);

      var current = NAV_IDS[0];
      NAV_IDS.forEach(function (id) {
        var s = document.getElementById(id);
        if (s && s.getBoundingClientRect().top <= 120) current = id;
      });
      navLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('data-nav') === current);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     SPEAKER CAROUSEL
     ============================================================ */
  function initCarousel() {
    var track = $('[data-car-track]');
    var dotsWrap = $('[data-car-dots]');
    var nav = $('[data-car-nav]');
    var prev = $('[data-car-prev]');
    var next = $('[data-car-next]');
    if (!track) return;

    // Build cards
    track.innerHTML = SPEAKERS.map(function (s) {
      var tf = s.scale ? 'transform:scale(' + s.scale + ');transform-origin:' + (s.origin || 'center top') + ';' : '';
      return '' +
        '<div class="car-slide">' +
          '<div class="speaker-card" style="background-image:url(assets/fig-card-bg.png)">' +
            '<img class="portrait" src="' + s.img + '" alt="' + s.name + '" style="object-position:' + (s.pos || 'center top') + ';' + tf + '">' +
            '<div class="scrim"></div>' +
            '<div class="banner">' +
              '<h3>' + s.name + '</h3>' +
              '<p>' + s.role + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
    }).join('');

    var idx = 0;
    var perView = 3;

    function calcPerView() {
      return window.innerWidth < 760 ? 1 : window.innerWidth < 1080 ? 2 : 3;
    }

    function render() {
      var maxIdx = Math.max(0, SPEAKERS.length - perView);
      idx = Math.min(idx, maxIdx);
      var pages = maxIdx + 1;

      track.style.transform = 'translateX(calc(-' + idx + ' * (100% + 26px) / ' + perView + '))';

      // arrows
      nav.style.display = pages > 1 ? 'flex' : 'none';
      prev.disabled = idx === 0;
      next.disabled = idx >= maxIdx;

      // dots
      dotsWrap.style.display = pages > 1 ? 'flex' : 'none';
      if (dotsWrap.children.length !== pages) {
        dotsWrap.innerHTML = '';
        for (var i = 0; i < pages; i++) {
          var d = document.createElement('span');
          d.className = 'dot';
          d.setAttribute('data-page', i);
          d.addEventListener('click', function (e) {
            idx = parseInt(e.currentTarget.getAttribute('data-page'), 10);
            render();
          });
          dotsWrap.appendChild(d);
        }
      }
      $$('.dot', dotsWrap).forEach(function (d, i) {
        d.classList.toggle('active', i === idx);
      });
    }

    prev.addEventListener('click', function () { idx = Math.max(0, idx - 1); render(); });
    next.addEventListener('click', function () {
      var maxIdx = Math.max(0, SPEAKERS.length - perView);
      idx = Math.min(maxIdx, idx + 1); render();
    });

    window.addEventListener('resize', function () {
      var pv = calcPerView();
      if (pv !== perView) { perView = pv; render(); }
    });

    perView = calcPerView();
    render();
  }

  /* ============================================================
     EVENTBRITE MOCK CHECKOUT
     ============================================================ */
  function initEventbrite() {
    var rowsWrap = $('[data-eb-rows]');
    if (!rowsWrap) return;
    var qty = [0, 1, 0];

    rowsWrap.innerHTML = TIERS.map(function (t, i) {
      return '' +
        '<div class="eb-row">' +
          '<div><div class="name">' + t.name + '</div><div class="price">' + t.price + '</div></div>' +
          '<div class="eb-stepper-group">' +
            '<button class="stepper" data-step="-1" data-i="' + i + '" aria-label="Remove one">' + icon('minus') + '</button>' +
            '<span class="eb-qty" data-qty="' + i + '">' + qty[i] + '</span>' +
            '<button class="stepper" data-step="1" data-i="' + i + '" aria-label="Add one">' + icon('plus') + '</button>' +
          '</div>' +
        '</div>';
    }).join('');

    function update() {
      var subtotal = qty.reduce(function (s, q, i) { return s + TIERS[i].priceNum * q; }, 0);
      var fee = subtotal ? Math.round(subtotal * 0.035 * 100) / 100 : 0;
      $('[data-eb-subtotal]').textContent = '£' + subtotal.toFixed(2);
      $('[data-eb-fee]').textContent = '£' + fee.toFixed(2);
      $('[data-eb-total]').textContent = '£' + (subtotal + fee).toFixed(2);
    }

    rowsWrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.stepper');
      if (!btn) return;
      var i = parseInt(btn.getAttribute('data-i'), 10);
      var d = parseInt(btn.getAttribute('data-step'), 10);
      qty[i] = Math.max(0, Math.min(10, qty[i] + d));
      $('[data-qty="' + i + '"]').textContent = qty[i];
      update();
    });

    update();
  }

  /* ============================================================
     CONTACT FORM
     ============================================================ */
  function initContact() {
    var form = $('[data-contact-form]');
    if (!form) return;
    var submit = $('[data-contact-submit]');
    var success = $('[data-contact-success]');

    function valid() {
      var name = form.elements['name'].value.trim();
      var email = form.elements['email'].value.trim();
      var message = form.elements['message'].value.trim();
      return name && email.indexOf('@') !== -1 && message;
    }
    function sync() {
      var ok = valid();
      submit.disabled = !ok;
      submit.classList.toggle('is-disabled', !ok);
    }
    form.addEventListener('input', sync);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!valid()) return;
      form.hidden = true;
      success.hidden = false;
      refreshIcons();
    });
    sync();
  }

  /* ============================================================
     TICKET MODAL
     ============================================================ */
  function initModal() {
    var overlay = $('[data-modal]');
    if (!overlay) return;
    var tiersWrap = $('[data-modal-tiers]', overlay);
    var formView = $('[data-modal-form]', overlay);
    var successView = $('[data-modal-success]', overlay);
    var title = $('[data-modal-title]', overlay);
    var confirm = $('[data-modal-confirm]', overlay);
    var selName = $('[data-modal-sel-name]', overlay);
    var sel = 1;

    tiersWrap.innerHTML = TIERS.map(function (t, i) {
      return '' +
        '<div class="modal-tier' + (i === 1 ? ' selected' : '') + '" data-tier="' + i + '">' +
          '<div class="mt-left">' +
            '<span class="radio"><span class="dot"></span></span>' +
            '<span class="mt-name">' + t.name + '</span>' +
          '</div>' +
          '<span class="mt-price">' + t.price + '</span>' +
        '</div>';
    }).join('');

    function selectTier(i) {
      sel = i;
      $$('.modal-tier', tiersWrap).forEach(function (el, j) {
        el.classList.toggle('selected', j === i);
      });
      confirm.textContent = 'Confirm Booking — ' + TIERS[i].price;
    }

    tiersWrap.addEventListener('click', function (e) {
      var el = e.target.closest('.modal-tier');
      if (!el) return;
      selectTier(parseInt(el.getAttribute('data-tier'), 10));
    });

    function open() {
      // reset to form view each open
      formView.hidden = false;
      successView.hidden = true;
      title.textContent = 'Book your ticket';
      selectTier(1);
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';
      refreshIcons();
    }
    function close() {
      overlay.hidden = true;
      document.body.style.overflow = '';
    }

    confirm.addEventListener('click', function () {
      formView.hidden = true;
      successView.hidden = false;
      title.textContent = 'You’re booked';
      selName.textContent = TIERS[sel].name;
      refreshIcons();
    });

    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    $$('[data-modal-close]', overlay).forEach(function (b) { b.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !overlay.hidden) close(); });
    $$('[data-book]').forEach(function (b) { b.addEventListener('click', open); });

    selectTier(1);
  }

  /* ---------- Boot ---------- */
  function init() {
    initScroll();
    initCarousel();
    initEventbrite();
    initContact();
    initModal();
    refreshIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
