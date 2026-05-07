/**
 * Smooth scroll with custom duration and easing.
 * @param {number} targetY - destination scroll position in px
 * @param {number} duration - duration in ms (default 900)
 */
export function smoothScrollTo(targetY, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;

  // ease-in-out cubic
  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/**
 * Smooth scroll to a DOM element by id.
 * @param {string} id - element id (without #)
 * @param {number} duration - duration in ms
 */
export function smoothScrollToId(id, duration = 900) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  smoothScrollTo(top, duration);
}
