/* global React, Eyebrow, Icon, Btn, useState */

function TicketModal({ open, onClose }) {
  const tiers = [
    ['Conference Only', '£95'],
    ['Conference + Gala Dinner', '£165'],
    ['Gala Dinner Only', '£75'],
    ['All-Inclusive (+ Overnight Hotel)', '£245'],
  ];
  const [sel, setSel] = useState(1);
  const [done, setDone] = useState(false);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,10,11,0.74)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'fade 220ms var(--ease)' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 580, maxWidth: '100%', maxHeight: '92vh', overflowY: 'auto', background: 'var(--ink-800)', borderRadius: 8, boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
        <span style={{ position: 'absolute', inset: 10, border: '1px solid var(--line-gold)', borderRadius: 5, pointerEvents: 'none' }}></span>
        <div style={{ padding: '34px 38px 38px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Eyebrow style={{ marginBottom: 12 }}>Redefining the Norm · 22 Aug 2026</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, letterSpacing: '.02em', color: '#fff', margin: 0 }}>{done ? 'You\u2019re booked' : 'Book your ticket'}</h3>
            </div>
            <span onClick={onClose} style={{ cursor: 'pointer', color: 'var(--on-dark-3)', padding: 4 }}><Icon name="x" size={22} /></span>
          </div>

          {done ? (
            <div style={{ textAlign: 'center', padding: '26px 0 6px' }}>
              <span style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon name="check" size={30} color="var(--ink-900)" />
              </span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--on-dark-1)', lineHeight: 1.5, margin: '0 auto', maxWidth: 380 }}>
                Confirmation and joining details for <span style={{ color: 'var(--gold-400)' }}>{tiers[sel][0]}</span> are on their way to your inbox.
              </p>
              <Btn variant="ghostDark" onClick={onClose} style={{ marginTop: 26 }}>Close</Btn>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '26px 0 24px' }}>
                {tiers.map(([name, price], i) => (
                  <div key={i} onClick={() => setSel(i)} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 18px',
                    border: `1px solid ${sel === i ? 'var(--gold-500)' : 'var(--line-dark)'}`, borderRadius: 4,
                    background: sel === i ? 'rgba(193,138,46,.10)' : 'transparent', cursor: 'pointer',
                    transition: 'all var(--dur) var(--ease)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ width: 18, height: 18, borderRadius: 999, border: `2px solid ${sel === i ? 'var(--gold-500)' : 'var(--on-dark-3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                        {sel === i && <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--gold-500)' }}></span>}
                      </span>
                      <span style={{ fontSize: 14, color: '#fff', letterSpacing: '.02em', fontWeight: 500 }}>{name}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--gold-500)' }}>{price}</span>
                  </div>
                ))}
              </div>
              <input placeholder="Full name" style={inp} />
              <input placeholder="Work email" style={{ ...inp, marginTop: 10 }} />
              <input placeholder="Organisation" style={{ ...inp, marginTop: 10 }} />
              <Btn onClick={() => setDone(true)} style={{ width: '100%', marginTop: 18 }}>Confirm Booking — {tiers[sel][1]}</Btn>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
const inp = { width: '100%', padding: '13px 15px', background: 'var(--ink-700)', border: '1px solid var(--line-dark)', borderRadius: 4, color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 14, outline: 'none' };

Object.assign(window, { TicketModal });
