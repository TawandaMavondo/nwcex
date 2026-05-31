import { Eyebrow, Btn, GoldFrame, IconChip } from './primitives.jsx';

// ---- Featured event with programme (charcoal) ----
export function FeaturedEvent({ onBook }) {
  const agenda = [
    ['09:00', 'Registration & networking breakfast'],
    ['10:00', 'Keynote — Redefining the Norm'],
    ['11:30', 'Panel — Financial sustainability in care'],
    ['13:00', 'Networking lunch'],
    ['14:00', 'Workshops — leadership & governance'],
    ['17:30', 'Conference close'],
    ['19:00', 'Evening gala & dinner — until late'],
  ];

  return (
    <section id="programme" style={{ background: 'var(--ink-900)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow style={{ marginBottom: 18 }}>Flagship Conference · 2026</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 44, letterSpacing: '.02em', color: '#fff', margin: 0, lineHeight: 1.06 }}>Redefining the Norm</h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--on-dark-2)', lineHeight: 1.5, marginTop: 18, maxWidth: 460 }}>
            A full day of keynotes, panels and workshops with the leaders redefining social care followed by an evening gala dinner.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, margin: '28px 0 32px' }}>
            <IconChip name="map-pin" label="Deansgate Hotel, Manchester" light />
            <IconChip name="calendar" label="22 August 2026 · 09:00 – 17:30" light />
            <IconChip name="wine" label="Evening gala & dinner from 19:00" light />
          </div>
          <Btn size="lg" onClick={onBook}>Book Your Ticket</Btn>
        </div>
        <GoldFrame inset={14} style={{ background: 'var(--ink-700)', borderRadius: 6, padding: 36 }}>
          <div style={{ fontSize: 11, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 20 }}>Programme · 22 Aug</div>
          {agenda.map(([time, label], i) =>
            <div key={i} style={{ display: 'flex', gap: 18, padding: '13px 0', borderTop: i ? '1px solid var(--line-dark)' : 'none' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--gold-500)', width: 52, flex: 'none', letterSpacing: '.02em' }}>{time}</span>
              <span style={{ fontSize: 14, color: 'var(--on-dark-1)', lineHeight: 1.45 }}>{label}</span>
            </div>
          )}
        </GoldFrame>
      </div>
    </section>
  );
}

// ---- Network stats band (charcoal, quote + stats) ----
export function NetworkBand() {
  const stats = [['320+', 'Care leaders in the network'], ['UK-wide', 'Providers & commissioners'], ['4', 'Flagship events a year'], ['1', 'National exchange']];
  return (
    <section style={{ background: 'var(--ink-800)', padding: '84px 40px', position: 'relative', borderTop: '1px solid var(--line-dark)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 24 }}>The Exchange</Eyebrow>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 31, lineHeight: 1.4, color: '#fff', margin: '0 auto', maxWidth: 780 }}>
          More than an event — a growing national community of executives committed to improving outcomes for service users.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 56 }}>
          {stats.map(([n, l]) =>
            <div key={l} style={{ borderLeft: '1px solid var(--line-gold)', paddingLeft: 22, textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36, color: 'var(--gold-500)', letterSpacing: '.02em' }}>{n}</div>
              <div style={{ fontSize: 13, color: 'var(--on-dark-2)', letterSpacing: '.04em', marginTop: 6 }}>{l}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
