// Smooth-scroll the #site-scroll container to a section, offsetting for the
// sticky header height.
export function scrollToId(id) {
  const root = document.getElementById('site-scroll');
  const el = document.getElementById(id);
  if (!root || !el) return;
  const top =
    el.getBoundingClientRect().top -
    root.getBoundingClientRect().top +
    root.scrollTop -
    76;
  root.scrollTo({ top, behavior: 'smooth' });
}
