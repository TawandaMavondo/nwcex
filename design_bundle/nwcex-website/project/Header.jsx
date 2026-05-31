/* global React, Logo, Btn, Icon, Eyebrow, IconChip, GoldFrame, PhotoPlaceholder, useState, useEffect */

const NAV = [
['About', 'about'],
['Event', 'programme'],
['Speakers', 'speakers'],
['Tickets', 'tickets'],
['Contact', 'contact']];


function scrollToId(id) {
  const root = document.getElementById('site-scroll');
  const el = document.getElementById(id);
  if (!root || !el) return;
  const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 76;
  root.scrollTo({ top, behavior: 'smooth' });
}

function Header({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');
  useEffect(() => {
    const el = document.getElementById('site-scroll');
    const fn = () => {
      const y = el ? el.scrollTop : window.scrollY;
      setScrolled(y > 24);
      // active section
      let cur = NAV[0][1];
      for (const [, id] of NAV) {
        const s = document.getElementById(id);
        if (s && s.getBoundingClientRect().top - el.getBoundingClientRect().top <= 120) cur = id;
      }
      setActive(cur);
    };
    const t = el || window;
    t.addEventListener('scroll', fn);
    return () => t.removeEventListener('scroll', fn);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(18,19,21,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--line-dark)' : 'transparent'}`,
      transition: 'all 320ms var(--ease)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ cursor: 'pointer' }} onClick={() => scrollToId('top')}><Logo size={24} /></div>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV.map(([l, id]) =>
          <span key={id} onClick={() => scrollToId(id)} style={{
            cursor: 'pointer', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
            fontWeight: 500, color: active === id ? 'var(--gold-400)' : 'var(--on-dark-2)',
            transition: 'color var(--dur) var(--ease)'
          }}>{l}</span>
          )}
        </nav>
        <Btn size="sm" onClick={onBook}>Book Your Ticket</Btn>
      </div>
    </header>);

}

function Hero({ onBook }) {
  return (
    <section id="top" style={{ position: 'relative', background: 'radial-gradient(120% 90% at 72% 8%, #22231f 0%, var(--ink-800) 46%, var(--ink-900) 100%)', overflow: 'hidden' }}>
      {/* warm gold light leaks */}
      <div style={{ position: 'absolute', top: -140, left: -100, width: 560, height: 560, background: 'radial-gradient(circle, rgba(193,138,46,.20), transparent 60%)', filter: 'blur(24px)' }}></div>
      <div style={{ position: 'absolute', bottom: -160, right: -60, width: 460, height: 460, background: 'radial-gradient(circle, rgba(193,138,46,.12), transparent 62%)', filter: 'blur(24px)' }}></div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 40px 124px', position: 'relative' }}>
        <div style={{ animation: 'rise 600ms var(--ease) both', maxWidth: 720 }}>
          <Eyebrow style={{ marginBottom: 24 }}>A National Forum for Social Care Leaders</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 72, lineHeight: 1.04, letterSpacing: '.03em', color: '#fff', margin: 0 }}>
            RE<span style={{ color: 'var(--gold-500)' }}>DEFINING</span><br />THE NORM
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 23, lineHeight: 1.5, color: 'var(--on-dark-2)', maxWidth: 560, marginTop: 26 }}>
            The national exchange where providers, commissioners and sector leaders convene to share best practice and shape the future of social care.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center', flexWrap: 'wrap' }}>
            <Btn size="lg" onClick={onBook}>Book Your Ticket</Btn>
            <Btn size="lg" variant="ghostDark" onClick={() => scrollToId('programme')}>View Programme</Btn>
          </div>
          <div style={{ display: 'flex', gap: 30, marginTop: 44, flexWrap: 'wrap' }}>
            <IconChip name="map-pin" label="Deansgate Hotel, Manchester" light />
            <IconChip name="calendar" label="22 August 2026" light />
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Header, Hero, scrollToId });