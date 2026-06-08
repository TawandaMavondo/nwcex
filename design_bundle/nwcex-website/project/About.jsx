/* global React, Eyebrow, Icon, Btn, GoldFrame, PhotoPlaceholder */

// ---- About section (beige, editorial) ----
function About() {
  const points = [
  'Children\u2019s & adult social care providers',
  'Commissioners & local-authority partners',
  'Industry experts & sector entrepreneurs'];

  return (
    <section id="about" style={{ background: 'var(--beige-50)', padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <Eyebrow style={{ color: 'var(--gold-600)', marginBottom: 18 }}>About the Exchange</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 40, letterSpacing: '.02em', color: 'var(--on-light-1)', margin: 0, lineHeight: 1.12, maxWidth: 520 }}>
            A national platform for the people who shape social care
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 23, lineHeight: 1.45, color: 'var(--gold-600)', margin: '22px 0 0', maxWidth: 520 }}>
            A national exchange for providers, commissioners and sector leaders.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: 'var(--on-light-2)', margin: '20px 0 0', maxWidth: 520 }}>Though North-West rooted, NWCEX convenes leaders from across the UK to share best practice, confront the sector hardest challenges, and build the relationships that improve outcomes for service users. We are a premium forum, a growing executive network, and the place where the future of care is discussed candidly.

          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: '30px 0 34px' }}>
            {points.map((p) =>
            <div key={p} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ width: 28, height: 28, borderRadius: 999, border: '1px solid var(--line-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Icon name="check" size={15} color="var(--gold-600)" />
                </span>
                <span style={{ fontSize: 15, color: 'var(--on-light-1)', fontWeight: 500 }}>{p}</span>
              </div>
            )}
          </div>
          <Btn variant="ghostLight" onClick={() => window.__nwcScrollTo && window.__nwcScrollTo('tickets')}>Join the Network</Btn>
        </div>

        {/* image collage — placeholders */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 16 }}>
          <PhotoPlaceholder label="Executive conference" icon="presentation" ratio="3/4" style={{ gridRow: 'span 2' }} />
          <PhotoPlaceholder label="Networking" icon="users" ratio="4/3" />
          <PhotoPlaceholder label="Panel discussion" icon="mic" ratio="4/3" />
        </div>
      </div>
    </section>);

}

// ---- The pillars / topics band (charcoal) ----
function Pillars() {
  const items = [
  ['shield-check', 'Regulatory Insight', 'Stay ahead of compliance, inspection and policy change across adult and children\u2019s care.'],
  ['trending-up', 'Financial Sustainability', 'Practical strategy for funding, margins and long-term operational resilience.'],
  ['users', 'Workforce & Leadership', 'Develop leaders and tackle workforce pressures with peers who understand them.'],
  ['handshake', 'Working with Commissioners', 'Build effective, transparent relationships that improve outcomes for service users.'],
  ['scale', 'Leadership & Governance', 'Strengthen boards, governance and decision-making at the top of care organisations.'],
  ['rocket', 'Innovation & Scaling', 'Grow and modernise care services without losing sight of quality and people.']];

  return (
    <section style={{ background: 'var(--ink-800)', padding: '92px 40px', backgroundColor: "rgb(32, 33, 35)" }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 700 }}>
          <Eyebrow style={{ marginBottom: 16 }}>Why It Matters</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 38, letterSpacing: '.02em', color: '#fff', margin: 0, lineHeight: 1.12 }}>
            The conversations that move the sector forward
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, marginTop: 56, background: 'var(--line-dark)', border: '1px solid var(--line-dark)' }}>
          {items.map(([ic, t, d]) =>
          <div key={t} style={{ background: 'var(--ink-800)', padding: '34px 30px' }}>
              <Icon name={ic} size={26} color="var(--gold-500)" />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, color: '#fff', margin: '18px 0 8px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.65, color: 'var(--on-dark-2)', margin: 0 }}>{d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { About, Pillars });