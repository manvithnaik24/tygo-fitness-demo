/**
 * TYGO FITNESS – Shared JS
 * Nav toggle, WhatsApp helpers
 */

(function () {
  'use strict';

  // WhatsApp config – replace with your business number (no + or spaces)
  // WhatsApp config – replace with your business number (no + or spaces)
  window.TYGO_WHATSAPP = '918553535553';

  function openWhatsApp(message) {
    var num = window.TYGO_WHATSAPP || '918553535553';
    var text = encodeURIComponent(message || 'Hi, I want to know more about TYGO FITNESS.');
    window.open('https://wa.me/' + num + '?text=' + text, '_blank');
  }

  window.openWhatsApp = openWhatsApp;

  // Join membership CTA
  function joinPlan(planName) {
    var msg = 'Hi, I want to join TYGO FITNESS ' + (planName || 'Membership') + '.';
    openWhatsApp(msg);
  }

  window.joinPlan = joinPlan;

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Book trial form
  var trialForm = document.getElementById('trial-form');
  if (trialForm) {
    trialForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('trial-name') && document.getElementById('trial-name').value) || '';
      var phone = (document.getElementById('trial-phone') && document.getElementById('trial-phone').value) || '';
      var email = (document.getElementById('trial-email') && document.getElementById('trial-email').value) || '';
      var time = (document.getElementById('trial-time') && document.getElementById('trial-time').value) || '';
      var goal = (document.getElementById('trial-goal') && document.getElementById('trial-goal').value) || '';
      var msg = 'Hi, I would like to book a FREE TRIAL at TYGO FITNESS.%0A%0A';
      msg += 'Name: ' + name + '%0A';
      msg += 'Phone: ' + phone + '%0A';
      msg += 'Email: ' + email + '%0A';
      msg += 'Preferred Time: ' + time + '%0A';
      msg += 'Goal: ' + goal;
      openWhatsApp(decodeURIComponent(msg));
      var confirmEl = document.getElementById('trial-confirm');
      if (confirmEl) {
        confirmEl.style.display = 'block';
        confirmEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
})();
