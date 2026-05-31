import { useState, useEffect } from 'react';
import { Eyebrow } from './primitives.jsx';
import { Icon } from './Icon.jsx';

import cardBg from '../assets/fig-card-bg.png';
import salomImg from '../assets/fig-salom.png';
import effieImg from '../assets/fig-effie.png';
import nyashaImg from '../assets/fig-nyasha.png';
import andrewImg from '../assets/fig-andrew.png';
import tapiwaImg from '../assets/fig-tapiwa.png';
import muzieImg from '../assets/fig-muzie.png';
import bonitaImg from '../assets/fig-bonita.png';

const SPEAKERS = [
  { name: 'Salom Rumbi Chamboko', role: 'ACCA Accountant · Financial Wellbeing Advocate', img: salomImg, pos: 'center top' },
  { name: 'Effie Smillie', role: 'CEO, Rainbow Medical Services', img: effieImg, pos: 'center top' },
  { name: 'Nyasha Gwatidzo', role: 'Social Entrepreneur · Award-Winning CEO', img: nyashaImg, pos: '46% top' },
  { name: 'Andrew Nyamayaro', role: 'Director, Tann Law Solicitors', img: andrewImg, pos: '52% top' },
  { name: 'Tapiwa Madovi', role: 'Investor, NED & Supported Living Consultant', img: tapiwaImg, pos: 'center top' },
  { name: 'Muzie Nduna', role: 'Property Entrepreneur · Business Mentor', img: muzieImg, pos: 'center top' },
  { name: 'Bonita Santos', role: 'Co-Founder & CEO, NWCEX', img: bonitaImg, pos: 'center top' },
];

function SpeakerCard({ s }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: 6, overflow: 'hidden',
        background: `var(--ink-900) center/cover url(${cardBg})`,
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)', transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'all var(--dur) var(--ease)' }}>
      {/* gold hairline frame motif */}
      <span style={{ position: 'absolute', inset: 12, border: '1px solid var(--line-gold)', borderRadius: 3, pointerEvents: 'none', zIndex: 3 }}></span>
      {/* cutout portrait */}
      <img src={s.img} alt={s.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos || 'center top', zIndex: 1 }} />
      {/* charcoal protection gradient toward the banner */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '52%', background: 'linear-gradient(to top, var(--ink-900) 18%, rgba(17,18,20,.72) 48%, transparent)', zIndex: 1 }}></div>
      {/* angled charcoal name banner */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 2,
        background: 'rgba(20,21,23,.92)', clipPath: 'polygon(0 14%, 100% 0, 100% 100%, 0 100%)',
        padding: '34px 24px 22px', textAlign: 'center',
      }}>
        <h3 style={{ fontFamily: "'Inknut Antiqua', var(--font-display)", fontWeight: 700, fontSize: 20, color: '#fff', margin: 0, letterSpacing: '.03em', textTransform: 'uppercase', lineHeight: 1.2 }}>{s.name}</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, color: 'var(--gold-400)', margin: '9px 0 0', letterSpacing: '.16em', textTransform: 'uppercase', lineHeight: 1.5 }}>{s.role}</p>
      </div>
    </div>
  );
}

export function Speakers() {
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const fn = () => setPerView(window.innerWidth < 760 ? 1 : window.innerWidth < 1080 ? 2 : 3);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  const maxIdx = Math.max(0, SPEAKERS.length - perView);
  const clamped = Math.min(idx, maxIdx);
  const go = (d) => setIdx((p) => Math.max(0, Math.min(maxIdx, p + d)));
  const pages = maxIdx + 1;

  return (
    <section id="speakers" style={{ background: 'var(--beige-50)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow style={{ color: 'var(--gold-600)', marginBottom: 14 }}>The Voices</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 38, letterSpacing: '.02em', color: 'var(--on-light-1)', margin: 0 }}>Meet the Speakers</h2>
          </div>
          <div style={{ display: pages > 1 ? 'flex' : 'none', gap: 12 }}>
            <CarBtn dir="left" disabled={clamped === 0} onClick={() => go(-1)} />
            <CarBtn dir="right" disabled={clamped >= maxIdx} onClick={() => go(1)} />
          </div>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 26, transform: `translateX(calc(-${clamped} * (100% + 26px) / ${perView}))`, transition: 'transform 480ms var(--ease)' }}>
            {SPEAKERS.map((s, i) =>
              <div key={i} style={{ flex: `0 0 calc((100% - ${(perView - 1) * 26}px) / ${perView})` }}>
                <SpeakerCard s={s} />
              </div>
            )}
          </div>
        </div>

        <div style={{ display: pages > 1 ? 'flex' : 'none', gap: 9, justifyContent: 'center', marginTop: 38 }}>
          {Array.from({ length: pages }).map((_, i) =>
            <span key={i} onClick={() => setIdx(i)} style={{
              width: i === clamped ? 30 : 9, height: 9, borderRadius: 999, cursor: 'pointer',
              background: i === clamped ? 'var(--gold-500)' : 'var(--beige-300)', transition: 'all var(--dur) var(--ease)'
            }}></span>
          )}
        </div>
      </div>
    </section>
  );
}

function CarBtn({ dir, disabled, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onClick} disabled={disabled} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 46, height: 46, borderRadius: 999, border: `1px solid ${disabled ? 'var(--line-light)' : 'var(--gold-500)'}`,
        background: hover && !disabled ? 'var(--gold-500)' : 'transparent', cursor: disabled ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: disabled ? 0.4 : 1,
        transition: 'all var(--dur) var(--ease)' }}>
      <Icon name={dir === 'left' ? 'arrow-left' : 'arrow-right'} size={19} color={hover && !disabled ? 'var(--ink-900)' : 'var(--gold-600)'} />
    </button>
  );
}
