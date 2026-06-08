/* global React, Eyebrow, Icon, Btn, GoldFrame, useState */

const TIERS = [
{ name: 'Conference Only', price: '£224', feats: ['Full-day conference access', 'Keynotes, panels & workshops', 'Networking breakfast & lunch', 'Programme & resources'], tag: null, dark: false },
{ name: 'Conference + Gala Dinner', price: '£300', feats: ['Everything in Conference', 'Evening gala & dinner', 'Reserved networking table', 'Drinks reception'], tag: 'Most popular', dark: true },
{ name: 'Gala Dinner Only', price: '£146', feats: ['Evening gala & dinner', 'Drinks reception', 'Evening networking', 'After-dinner address'], tag: null, dark: false }];

const EARLY_BIRD = 'Early Bird Offer: Prices shown include a 25% Early Bird Discount for bookings made on or before 30 June 2026. Ticket prices will increase by 25% for bookings made from 1 July 2026 onwards.';

function EarlyBirdNote({ light }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', maxWidth: 760, margin: '0 auto', padding: '16px 22px', borderRadius: 6, border: '1px solid var(--line-gold)', background: light ? 'rgba(193,138,46,.06)' : 'rgba(193,138,46,.08)' }}>
      <Icon name="info" size={17} color={light ? 'var(--gold-600)' : 'var(--gold-400)'} style={{ marginTop: 2, flex: 'none' }} />
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: light ? 'var(--on-light-2)' : 'var(--on-dark-2)' }}>
        <strong style={{ color: light ? 'var(--gold-600)' : 'var(--gold-400)', fontWeight: 700 }}>Early Bird Offer:</strong> Prices shown include a 25% Early Bird Discount for bookings made on or before 30 June 2026. Ticket prices will increase by 25% for bookings made from 1 July 2026 onwards.
      </p>
    </div>);

}


// ---- Booking event tiers (beige) ----
function Booking({ onBook }) {
  return (
    <section id="tickets" style={{ background: 'var(--beige-100)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Eyebrow style={{ color: 'var(--gold-600)', marginBottom: 16 }}>Book Your Ticket · Early Bird until 30 June 2026</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 42, letterSpacing: '.02em', color: 'var(--on-light-1)', margin: 0 }}>Event ticket tiers</h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--on-light-2)', margin: '16px auto 0', maxWidth: 560 }}>Redefining the Norm · Deansgate Hotel, Manchester · 22 August 2026

          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'stretch', maxWidth: 1000, margin: '0 auto 36px' }}>
          {TIERS.map((t) =>
          <div key={t.name} style={{
            background: t.dark ? 'var(--ink-800)' : '#fff', borderRadius: 8, padding: '32px 26px',
            border: t.dark ? 'none' : '1px solid var(--line-light)', position: 'relative',
            boxShadow: t.dark ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
            transform: t.dark ? 'translateY(-12px)' : 'none', display: 'flex', flexDirection: 'column'
          }}>
              {t.tag ?
            <span style={{ alignSelf: 'flex-start', fontSize: 9.5, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--ink-900)', background: 'var(--gold-500)', padding: '5px 10px', borderRadius: 999, marginBottom: 16 }}>{t.tag}</span> :
            <span style={{ height: 23, marginBottom: 16 }}></span>}
              <div style={{ fontSize: 11.5, letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 600, color: t.dark ? 'var(--gold-400)' : 'var(--gold-600)' }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '16px 0 22px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 38, color: t.dark ? '#fff' : 'var(--on-light-1)' }}>{t.price}</span>
                <span style={{ fontSize: 12.5, color: t.dark ? 'var(--on-dark-3)' : 'var(--on-light-3)' }}>per person</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 26, flex: 1 }}>
                {t.feats.map((f) =>
              <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Icon name="check" size={15} color={t.dark ? 'var(--gold-400)' : 'var(--gold-600)'} style={{ marginTop: 3, flex: 'none' }} />
                    <span style={{ fontSize: 13.5, lineHeight: 1.45, color: t.dark ? 'var(--on-dark-2)' : 'var(--on-light-2)' }}>{f}</span>
                  </div>
              )}
              </div>
              <Btn variant={t.dark ? 'primary' : 'ghostLight'} onClick={onBook} style={{ width: '100%' }}>Select</Btn>
            </div>
          )}
        </div>
        <EarlyBirdNote light />
      </div>
    </section>);

}

// ---- Mock Eventbrite embedded checkout (charcoal) ----
function Eventbrite() {
  const [qty, setQty] = useState({ 0: 0, 1: 1, 2: 0 });
  const prices = [224, 300, 146];
  const total = Object.entries(qty).reduce((s, [i, q]) => s + prices[i] * q, 0);
  const fees = total ? Math.round(total * 0.035 * 100) / 100 : 0;
  const step = (i, d) => setQty((p) => ({ ...p, [i]: Math.max(0, Math.min(10, p[i] + d)) }));

  return (
    <section style={{ background: 'var(--ink-800)', padding: '96px 40px', borderTop: '1px solid var(--line-dark)', backgroundColor: "rgb(32, 33, 35)" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow style={{ marginBottom: 16 }}>Secure Checkout</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 38, letterSpacing: '.02em', color: '#fff', margin: 0 }}>Reserve tickets via Eventbrite</h2>
        </div>

        <GoldFrame inset={14} style={{ background: 'var(--ink-700)', borderRadius: 8, boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr' }}>
            {/* left: ticket selection */}
            <div style={{ padding: '36px 38px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
                <span style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Icon name="ticket" size={20} color="var(--ink-900)" />
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 19, color: '#fff' }}>Redefining the Norm 2026</div>
                  <div style={{ fontSize: 12, color: 'var(--on-dark-3)', letterSpacing: '.04em' }}>Sat 22 Aug 2026 · Manchester</div>
                </div>
              </div>
              {TIERS.map((t, i) =>
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderTop: '1px solid var(--line-dark)' }}>
                  <div>
                    <div style={{ fontSize: 14.5, color: '#fff', fontWeight: 500, letterSpacing: '.01em' }}>{t.name}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--gold-500)', marginTop: 4 }}>{t.price}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <Stepper onClick={() => step(i, -1)} icon="minus" />
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: '#fff', width: 20, textAlign: 'center' }}>{qty[i]}</span>
                    <Stepper onClick={() => step(i, 1)} icon="plus" />
                  </div>
                </div>
              )}
            </div>

            {/* right: order summary */}
            <div style={{ background: 'var(--ink-800)', padding: '36px 34px', borderLeft: '1px solid var(--line-dark)', display: 'flex', flexDirection: 'column', backgroundColor: "rgb(32, 33, 35)" }}>
              <div style={{ fontSize: 11, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 20 }}>Order Summary</div>
              <Row label="Subtotal" value={`£${total.toFixed(2)}`} />
              <Row label="Booking fee" value={`£${fees.toFixed(2)}`} muted />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '18px 0', borderTop: '1px solid var(--line-dark)', marginTop: 8 }}>
                <span style={{ fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--on-dark-2)', fontWeight: 600 }}>Total</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--gold-500)' }}>£{(total + fees).toFixed(2)}</span>
              </div>
              <Btn size="lg" style={{ width: '100%', marginTop: 'auto' }} onClick={() => window.open('https://www.eventbrite.co.uk', '_blank')}>
                <Icon name="lock" size={15} /> Checkout
              </Btn>
              <p style={{ margin: '14px 0 0', fontSize: 10.5, lineHeight: 1.55, color: 'var(--on-dark-3)' }}>
                <strong style={{ color: 'var(--gold-400)', fontWeight: 700 }}>Early Bird</strong> pricing (25% off) ends 30 June 2026. Prices rise 25% from 1 July 2026.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, marginTop: 14, fontSize: 11, color: 'var(--on-dark-3)', letterSpacing: '.06em' }}>
                 <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--on-dark-2)', letterSpacing: '.01em' }}></span>
              </div>
            </div>
          </div>
        </GoldFrame>
      </div>
    </section>);

}

function Stepper({ onClick, icon }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line-gold)', background: h ? 'var(--gold-500)' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--dur) var(--ease)' }}>
      <Icon name={icon} size={15} color={h ? 'var(--ink-900)' : 'var(--gold-400)'} />
    </button>);

}

function Row({ label, value, muted }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 14, color: muted ? 'var(--on-dark-3)' : 'var(--on-dark-1)' }}>
      <span>{label}</span><span style={{ fontFamily: 'var(--font-sans)' }}>{value}</span>
    </div>);

}

Object.assign(window, { Booking, Eventbrite });