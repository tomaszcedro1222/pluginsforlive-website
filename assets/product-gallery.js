(() => {
  const dialog = document.querySelector('.screenshot-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const preview = dialog.querySelector('img');
  const close = dialog.querySelector('.screenshot-close');
  let priorOverflow;
  document.querySelectorAll('.screenshot-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      preview.src = link.href;
      preview.alt = link.querySelector('img').alt;
      priorOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = priorOverflow || '';
    preview.removeAttribute('src');
  });
})();
