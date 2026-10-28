// The CDN script runs first (both scripts use defer). The API reuses an
// existing instance, including one created by the widget's auto-init.
(() => {
  const configId = 'DuTviGMDRbWzWY1hL5IK';
  const getWidget = () => window.WiilWidget?.getInstance(configId)
    || window.WiilWidget?.init();

  try {
    getWidget();
  } catch (error) {
    console.warn('Academy chat could not load; booking links remain available.', error);
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-wiil-open]');
    // Preserve new-tab, download, and other standard browser link behavior.
    if (!link || event.defaultPrevented || event.button !== 0
      || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    try {
      const widget = getWidget();
      if (typeof widget?.open !== 'function') return;
      widget.open();
      event.preventDefault();
    } catch (error) {
      // Leave the original href intact so a CDN failure never blocks booking.
      console.warn('Academy chat is unavailable; opening the booking page.', error);
    }
  });
})();
