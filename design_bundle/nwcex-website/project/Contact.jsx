/* global React, Eyebrow, Icon, Btn, Logo, GoldFrame, IconChip, useState, scrollToId */

const inpStyle = { width: '100%', padding: '14px 16px', background: '#fff', border: '1px solid var(--beige-300)', borderRadius: 4, color: 'var(--on-light-1)', fontFamily: 'var(--font-sans)', fontSize: 14.5, outline: 'none', transition: 'border var(--dur) var(--ease)' };

function Field({ label, children }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--on-light-2)', marginBottom: 8 }}>{label}</span>
      {children}
    </label>);

}

// ---- Contact form (beige) ----
function Contact() {
  const [sent, setSent] = useState(false);
  const [v, setV] = useState({ name: '', email: '', org: '', message: '' });
  const ok = v.name && v.email.includes('@') && v.message;
  const set = (k) => (e) => setV((p) => ({ ...p, [k]: e.target.value }));

  return (
    <section id="contact" style={{ background: 'var(--beige-50)', padding: '100px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 72, alignItems: 'start' }}>
        <div>
          <Eyebrow style={{ color: 'var(--gold-600)', marginBottom: 18 }}>Get in Touch</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 38, letterSpacing: '.02em', color: 'var(--on-light-1)', margin: 0, lineHeight: 1.12 }}>
            Speak with the team
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: 'var(--on-light-2)', margin: '20px 0 32px', maxWidth: 380 }}>Whether you attending, speaking, partnering or joining the network we be glad to hear from you.

          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <ContactRow icon="mail" label="Email" value="hello@northwestcareexchange.org" />
            <ContactRow icon="phone" label="Phone" value="+44 (0)161 000 0000" />
            <ContactRow icon="map-pin" label="Address" value="Deansgate Hotel, Deansgate, Manchester, M3 4LQ" />
          </div>
        </div>

        <GoldFrame inset={-1} style={{ borderRadius: 8 }}>
          <div style={{ background: '#fff', border: '1px solid var(--line-light)', borderRadius: 8, padding: '40px 40px 44px', boxShadow: 'var(--shadow-md)' }}>
            {sent ?
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <span style={{ width: 60, height: 60, borderRadius: 999, background: 'var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name="check" size={28} color="var(--ink-900)" />
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 24, color: 'var(--on-light-1)', margin: 0 }}>Thank you</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--on-light-2)', margin: '10px auto 0', maxWidth: 320, lineHeight: 1.6 }}>
                  Your message has been received. A member of the team will be in touch shortly.
                </p>
              </div> :

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field label="Full name"><input style={inpStyle} placeholder="Jane Smith" value={v.name} onChange={set('name')} /></Field>
                  <Field label="Email"><input style={inpStyle} placeholder="jane@org.uk" value={v.email} onChange={set('email')} /></Field>
                </div>
                <Field label="Organisation"><input style={inpStyle} placeholder="Your care organisation" value={v.org} onChange={set('org')} /></Field>
                <Field label="Message"><textarea style={{ ...inpStyle, minHeight: 120, resize: 'vertical' }} placeholder="How can we help?" value={v.message} onChange={set('message')} /></Field>
                <Btn onClick={() => ok && setSent(true)} style={{ width: '100%', opacity: ok ? 1 : 0.5, cursor: ok ? 'pointer' : 'not-allowed' }}>Send Message</Btn>
              </div>
            }
          </div>
        </GoldFrame>
      </div>
    </section>);

}

function ContactRow({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span style={{ width: 42, height: 42, borderRadius: 999, background: 'var(--gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <Icon name={icon} size={18} color="var(--ink-900)" />
      </span>
      <div>
        <div style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--on-light-3)', marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 15, color: 'var(--on-light-1)', fontWeight: 500, maxWidth: 280, lineHeight: 1.5 }}>{value}</div>
      </div>
    </div>);

}

// ---- Footer with address + banking details (charcoal) ----
function Footer() {
  const cols = [
  ['Platform', [['About', 'about'], ['Programme', 'programme'], ['Speakers', 'speakers'], ['Tickets', 'tickets']]],
  ['Sectors', [['Children\u2019s Care', 'about'], ['Adult Care', 'about'], ['Commissioners', 'about'], ['Sector Leaders', 'about']]]];

  return (
    <footer style={{ background: 'var(--ink-900)', padding: '76px 40px 36px', borderTop: '1px solid var(--line-dark)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr .8fr .8fr 1.3fr', gap: 44 }}>
        <div>
          <Logo size={24} />
          <p style={{ fontSize: 13, color: 'var(--on-dark-3)', lineHeight: 1.65, marginTop: 18, maxWidth: 250 }}>
            A national exchange for the UK social care sector. Sharing best practice, building the network, improving outcomes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
            <FootLine icon="map-pin" text="Deansgate Hotel, Deansgate, Manchester, M3 4LQ" />
            <FootLine icon="mail" text="hello@northwestcareexchange.org" />
            <FootLine icon="globe" text="northwestcareexchange.org" />
          </div>
        </div>
        {cols.map(([h, items]) =>
        <div key={h}>
            <div style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--on-dark-2)', marginBottom: 18 }}>{h}</div>
            {items.map(([label, id]) => <div key={label} onClick={() => scrollToId(id)} style={{ fontSize: 13.5, color: 'var(--on-dark-3)', padding: '6px 0', cursor: 'pointer' }}>{label}</div>)}
          </div>
        )}
        {/* Banking details */}
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--on-dark-2)', marginBottom: 18 }}>Payment Details</div>
          <div style={{ border: '1px solid var(--line-gold)', borderRadius: 6, padding: '20px 22px' }}>
            <BankRow label="Account holder" value="The North-West Care Exchange Limited" />
            <BankRow label="Account number" value="40040363" mono />
            <BankRow label="Sort code" value="20-55-41" mono last />
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '48px auto 0', paddingTop: 24, borderTop: '1px solid var(--line-dark)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--on-dark-3)', letterSpacing: '.04em', flexWrap: 'wrap', gap: 12 }}>
        <span>© 2026 The North-West Care Exchange Limited</span>
        <span>Privacy · Terms · northwestcareexchange.org</span>
      </div>
    </footer>);

}

function FootLine({ icon, text }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <Icon name={icon} size={15} color="var(--gold-500)" style={{ marginTop: 2, flex: 'none' }} />
      <span style={{ fontSize: 13, color: 'var(--on-dark-3)', lineHeight: 1.5 }}>{text}</span>
    </div>);

}

function BankRow({ label, value, mono, last }) {
  return (
    <div style={{ padding: last ? '12px 0 0' : '0 0 12px', marginBottom: last ? 0 : 12, borderBottom: last ? 'none' : '1px solid var(--line-dark)' }}>
      <div style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--on-dark-3)', marginBottom: 5 }}>{label}</div>
      <div style={{ fontSize: mono ? 16 : 13.5, color: '#fff', fontWeight: mono ? 600 : 500, letterSpacing: mono ? '.08em' : '.01em', fontFamily: mono ? 'var(--font-display)' : 'var(--font-sans)' }}>{value}</div>
    </div>);

}

Object.assign(window, { Contact, Footer });