/* global React */
const { useState, useEffect, useRef } = React;

// Re-render Lucide icons after mounts/updates
function useLucide() {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

function Icon({ name, size = 20, color, style }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, ...style }}></i>;
}

// The NWCEX wordmark — Cinzel caps with gold EX, + tracked subline
function Logo({ size = 24, subline = true, light = true }) {
  const fg = light ? '#fff' : 'var(--on-light-1)';
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, letterSpacing: '.04em' }}>
        <span style={{ color: fg }}>NWC</span><span style={{ color: 'var(--gold-500)' }}>EX</span>
      </div>
      {subline && (
        <div style={{ marginTop: size * 0.22, fontSize: Math.max(8, size * 0.33), letterSpacing: '.30em', textTransform: 'uppercase', fontWeight: 500, color: light ? 'var(--on-dark-2)' : 'var(--on-light-2)', fontFamily: 'var(--font-sans)' }}>
          North-West Care Exchange
        </div>
      )}
    </div>
  );
}

function Eyebrow({ children, style }) {
  return <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 12, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gold-500)', ...style }}>{children}</div>;
}

function Btn({ children, variant = 'primary', size = 'md', onClick, style }) {
  const pad = size === 'lg' ? '17px 34px' : size === 'sm' ? '10px 18px' : '14px 26px';
  const fs = size === 'sm' ? 11 : 12.5;
  const base = {
    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: fs, letterSpacing: '.18em',
    textTransform: 'uppercase', borderRadius: 3, padding: pad, cursor: 'pointer',
    border: '1px solid transparent', transition: 'all var(--dur) var(--ease)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, ...style,
  };
  const variants = {
    primary: { background: 'var(--gold-500)', color: 'var(--ink-900)' },
    dark: { background: 'var(--ink-800)', color: '#fff' },
    ghostDark: { background: 'transparent', color: 'var(--gold-400)', borderColor: 'var(--gold-500)' },
    ghostLight: { background: 'transparent', color: 'var(--gold-600)', borderColor: 'var(--gold-500)' },
  };
  const [hover, setHover] = useState(false);
  const hoverStyles = {
    primary: { background: 'var(--gold-400)', transform: 'translateY(-1px)', boxShadow: 'var(--shadow-gold)' },
    dark: { background: 'var(--ink-600)', boxShadow: 'var(--shadow-md)' },
    ghostDark: { background: 'rgba(193,138,46,.12)' },
    ghostLight: { background: 'var(--gold-100)' },
  };
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...(hover ? hoverStyles[variant] : {}) }}>
      {children}
    </button>
  );
}

// Thin gold bracket frame motif from the posters
function GoldFrame({ inset = 12, children, style }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <span style={{ position: 'absolute', inset, border: '1px solid var(--line-gold)', borderRadius: 4, pointerEvents: 'none' }}></span>
      {children}
    </div>
  );
}

function IconChip({ name, label, light }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ width: 42, height: 42, borderRadius: 999, background: 'var(--gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <Icon name={name} size={19} color="var(--ink-900)" />
      </span>
      {label && <span style={{ color: light ? '#fff' : 'var(--on-light-1)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 500 }}>{label}</span>}
    </div>
  );
}

// A tasteful charcoal/gold image placeholder — a stand-in for real photography.
// `label` describes the intended subject; subtle gold frame + linear icon.
function PhotoPlaceholder({ label, icon = 'image', ratio = '4/3', radius = 6, style }) {
  return (
    <div style={{
      position: 'relative', aspectRatio: ratio, borderRadius: radius, overflow: 'hidden',
      background: 'linear-gradient(150deg, var(--ink-700) 0%, var(--ink-800) 55%, var(--ink-900) 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14,
      border: '1px solid var(--line-dark)', ...style,
    }}>
      {/* gold light leak */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '70%', background: 'radial-gradient(circle, rgba(193,138,46,.18), transparent 65%)', filter: 'blur(8px)' }}></div>
      <span style={{ position: 'absolute', inset: 12, border: '1px solid var(--line-gold)', borderRadius: Math.max(2, radius - 2), pointerEvents: 'none' }}></span>
      <Icon name={icon} size={30} color="var(--gold-500)" style={{ position: 'relative', opacity: 0.85 }} />
      {label && <span style={{ position: 'relative', fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--on-dark-3)', fontWeight: 600, textAlign: 'center', padding: '0 18px' }}>{label}</span>}
    </div>
  );
}

Object.assign(window, { useLucide, Icon, Logo, Eyebrow, Btn, GoldFrame, IconChip, PhotoPlaceholder, useState, useEffect, useRef });
