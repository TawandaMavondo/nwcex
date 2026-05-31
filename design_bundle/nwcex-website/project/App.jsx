/* global React, ReactDOM, Header, Hero, About, Pillars, FeaturedEvent, NetworkBand, Speakers, Booking, Eventbrite, Contact, Footer, TicketModal, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, useState, useEffect, useLucide, scrollToId */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C18A2E",
  "display": "Cinzel",
  "showTopics": true
}/*EDITMODE-END*/;

// lighten a hex by mixing toward white
function lighten(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const mix = (c) => Math.round(c + (255 - c) * amt);
  return `#${[mix(r), mix(g), mix(b)].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [modal, setModal] = useState(false);
  useLucide();
  const book = () => setModal(true);

  useEffect(() => { window.__nwcScrollTo = scrollToId; }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--gold-500', t.accent);
    root.style.setProperty('--gold-400', lighten(t.accent, 0.22));
    root.style.setProperty('--gold-600', lighten(t.accent, -0.0)); // keep
    root.style.setProperty('--line-gold', t.accent + '8C');
    root.style.setProperty('--font-display', t.display === 'Cinzel'
      ? "'Cinzel', 'Trajan Pro', 'Times New Roman', serif"
      : "'Cormorant Garamond', Georgia, serif");
  }, [t.accent, t.display]);

  return (
    <div id="site-scroll" style={{ height: '100vh', overflowY: 'auto', background: 'var(--ink-800)' }}>
      <Header onBook={book} />
      <Hero onBook={book} />
      <About />
      {t.showTopics && <Pillars />}
      <Speakers />
      <FeaturedEvent onBook={book} />
      <NetworkBand />
      <Booking onBook={book} />
      <Eventbrite />
      <Contact />
      <Footer />
      <TicketModal open={modal} onClose={() => setModal(false)} />

      <TweaksPanel>
        <TweakSection label="Brand accent" />
        <TweakColor label="Gold" value={t.accent} options={['#C18A2E', '#A26B11', '#D2A24A', '#B8902F']} onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Typography" />
        <TweakRadio label="Display face" value={t.display} options={['Cinzel', 'Cormorant']} onChange={(v) => setTweak('display', v)} />
        <TweakSection label="Sections" />
        <TweakToggle label="Topics band" value={t.showTopics} onChange={(v) => setTweak('showTopics', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
