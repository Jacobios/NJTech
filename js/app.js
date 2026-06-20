/**
 * NJTech Freshman Guide - Shared JavaScript
 * Handles: QQ modal, copy-to-clipboard, active nav highlighting
 */
(function () {
  'use strict';

  // === Active nav highlighting ===
  var page = document.body.getAttribute('data-page');
  if (page) {
    // Sidebar nav
    var sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(function (link) {
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });

    // Bottom nav
    var bottomLinks = document.querySelectorAll('.bottom-nav a');
    bottomLinks.forEach(function (link) {
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });
  }

  // === QQ Modal ===
  var qqFloat = document.getElementById('qq-float-btn');
  var qqModal = document.getElementById('qq-modal');
  var qqClose = document.getElementById('qq-modal-close');
  var qqCopyBtn = document.getElementById('qq-copy-btn');
  var qqToast = document.getElementById('qq-toast');
  var QQ_NUMBER = '123456789';

  // Show modal
  if (qqFloat) {
    qqFloat.addEventListener('click', function () {
      qqModal.classList.add('show');
    });
  }

  // Hide modal
  function hideModal() {
    qqModal.classList.remove('show');
  }

  if (qqClose) {
    qqClose.addEventListener('click', hideModal);
  }

  // Click overlay to close
  if (qqModal) {
    qqModal.addEventListener('click', function (e) {
      if (e.target === qqModal) {
        hideModal();
      }
    });
  }

  // Copy QQ number
  if (qqCopyBtn) {
    qqCopyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(QQ_NUMBER).then(function () {
          showToast();
        }).catch(function () {
          fallbackCopy();
        });
      } else {
        fallbackCopy();
      }
    });
  }

  function fallbackCopy() {
    var ta = document.createElement('textarea');
    ta.value = QQ_NUMBER;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (err) {
      // ignore
    }
    document.body.removeChild(ta);
  }

  function showToast() {
    if (qqToast) {
      qqToast.classList.add('show');
      setTimeout(function () {
        qqToast.classList.remove('show');
      }, 2000);
    }
  }

  // === Handle QQ banner copy buttons (in-page) ===
  var bannerCopyBtns = document.querySelectorAll('.qq-banner-copy');
  bannerCopyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(QQ_NUMBER).then(function () {
          showBannerToast(btn);
        }).catch(function () {
          fallbackCopyBanner(btn);
        });
      } else {
        fallbackCopyBanner(btn);
      }
    });
  });

  function fallbackCopyBanner(btn) {
    var ta = document.createElement('textarea');
    ta.value = QQ_NUMBER;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showBannerToast(btn);
    } catch (err) {
      // ignore
    }
    document.body.removeChild(ta);
  }

  function showBannerToast(btn) {
    var origText = btn.textContent;
    btn.textContent = '✅ 已复制！';
    btn.style.background = '#4caf50';
    btn.style.borderColor = '#4caf50';
    btn.style.color = '#fff';
    setTimeout(function () {
      btn.textContent = origText;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 2000);
  }
})();
