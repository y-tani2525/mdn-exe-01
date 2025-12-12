(() => {
  const btn = document.getElementById('js-btnHamburger');
  const nav = document.querySelector('.gnav');
  if (!btn || !nav) return;

  // 初期状態
  btn.setAttribute('aria-expanded', 'false');

  // クリックで開閉（クラスの付け外しのみ）
  btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('_open');
    nav.classList.toggle('_open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // PC幅に戻ったら状態をリセット
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      btn.classList.remove('_open');
      nav.classList.remove('_open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();