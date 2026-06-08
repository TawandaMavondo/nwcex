/* @ds-bundle: {"format":3,"namespace":"NWCEXDesignSystem_137018","components":[],"sourceHashes":{"ui_kits/website/App.jsx":"331858dbce4c","ui_kits/website/Content.jsx":"58a285de2e87","ui_kits/website/Header.jsx":"0c0e5b922428","ui_kits/website/Sections.jsx":"913b4e19215b","ui_kits/website/TicketModal.jsx":"b9b5b5830288","ui_kits/website/primitives.jsx":"bba6ed70f1a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NWCEXDesignSystem_137018 = window.NWCEXDesignSystem_137018 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/App.jsx
try { (() => {
/* global React, ReactDOM, Header, Hero, Pillars, FeaturedEvent, Speakers, NetworkBand, Membership, Footer, TicketModal, useState, useLucide */

function App() {
  const [modal, setModal] = useState(false);
  useLucide();
  const book = () => setModal(true);
  return /*#__PURE__*/React.createElement("div", {
    id: "site-scroll",
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(FeaturedEvent, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Speakers, null), /*#__PURE__*/React.createElement(NetworkBand, null), /*#__PURE__*/React.createElement(Membership, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TicketModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Content.jsx
try { (() => {
/* global React, Eyebrow, Icon, Btn, GoldFrame, useState */

// ---- The pillars / topics band (on beige) ----
function Pillars() {
  const items = [['shield-check', 'Regulatory Insight', 'Stay ahead of compliance, inspection and policy change across adult and children’s care.'], ['trending-up', 'Financial Sustainability', 'Practical strategy for funding, margins and long-term operational resilience.'], ['users', 'Workforce & Leadership', 'Develop leaders and tackle workforce pressures with peers who understand them.'], ['briefcase', 'Working with Commissioners', 'Build effective, transparent relationships that improve outcomes for service users.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--beige-100)',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--gold-600)',
      marginBottom: 16
    }
  }, "Why It Matters"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: '.02em',
      color: 'var(--on-light-1)',
      margin: 0,
      maxWidth: 680,
      lineHeight: 1.1
    }
  }, "A space to share best practice and solve the sector\u2019s hardest problems"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 28,
      marginTop: 52
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '2px solid var(--gold-500)',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--on-light-1)',
      margin: '18px 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--on-light-2)',
      margin: 0
    }
  }, d))))));
}

// ---- Featured event with programme (charcoal) ----
function FeaturedEvent({
  onBook
}) {
  const agenda = [['09:00', 'Registration & networking breakfast'], ['10:00', 'Keynote — Redefining the Norm'], ['11:30', 'Panel — Financial sustainability in care'], ['14:00', 'Workshops — leadership & governance'], ['17:30', 'Close — evening gala & dinner from 19:00']];
  return /*#__PURE__*/React.createElement("section", {
    id: "events",
    style: {
      background: 'var(--ink-800)',
      padding: '92px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18
    }
  }, "Flagship Conference \xB7 2026"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 44,
      letterSpacing: '.02em',
      color: '#fff',
      margin: 0,
      lineHeight: 1.06
    }
  }, "Redefining the Norm"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--on-dark-2)',
      lineHeight: 1.5,
      marginTop: 18,
      maxWidth: 440
    }
  }, "A full day of keynotes, panels and workshops with the leaders redefining social care \u2014 followed by an evening gala dinner."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      margin: '26px 0 30px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(IconChip, {
    name: "map-pin",
    label: "Manchester",
    light: true
  }), /*#__PURE__*/React.createElement(IconChip, {
    name: "calendar",
    label: "22 Aug 2026",
    light: true
  }), /*#__PURE__*/React.createElement(IconChip, {
    name: "clock",
    label: "09:00 \u2013 17:30",
    light: true
  })), /*#__PURE__*/React.createElement(Btn, {
    size: "lg",
    onClick: onBook
  }, "Book Your Ticket")), /*#__PURE__*/React.createElement(GoldFrame, {
    inset: 14,
    style: {
      background: 'var(--ink-700)',
      borderRadius: 6,
      padding: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      fontWeight: 600,
      marginBottom: 18
    }
  }, "Programme"), agenda.map(([time, label], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 18,
      padding: '13px 0',
      borderTop: i ? '1px solid var(--line-dark)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      color: 'var(--gold-500)',
      width: 52,
      flex: 'none',
      letterSpacing: '.02em'
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--on-dark-1)',
      lineHeight: 1.45
    }
  }, label))))));
}

// ---- Speakers strip ----
function Speakers() {
  const people = [['Salom Rumbi Chamboko', 'Tax specialist & financial wellness coach', '../../assets/speaker-portrait.jpg'], ['Speaker to be announced', 'Children’s social care leadership', null], ['Speaker to be announced', 'Commissioning & partnerships', null]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--beige-50)',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--gold-600)',
      marginBottom: 14
    }
  }, "The Voices"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      letterSpacing: '.02em',
      color: 'var(--on-light-1)',
      margin: 0
    }
  }, "Keynote speakers & panellists")), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghostLight",
    size: "sm"
  }, "Full Line-up")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 26
    }
  }, people.map(([name, role, img], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid var(--line-light)',
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: img ? `#1a1a1a center/cover url(${img})` : 'linear-gradient(135deg,var(--ink-700),var(--ink-600))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !img && /*#__PURE__*/React.createElement(Icon, {
    name: "user-round",
    size: 40,
    color: "var(--gold-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 21,
      color: 'var(--on-light-1)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'var(--gold-600)',
      margin: '6px 0 0'
    }
  }, role)))))));
}
Object.assign(window, {
  Pillars,
  FeaturedEvent,
  Speakers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* global React, Logo, Btn, Icon, useState, useEffect */

function Header({
  onBook
}) {
  const [scrolled, setScrolled] = useState(false);
  const links = ['Events', 'The Network', 'Insight', 'Membership', 'About'];
  const [active, setActive] = useState('Events');
  useEffect(() => {
    const el = document.getElementById('site-scroll');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 24);
    const t = el || window;
    t.addEventListener('scroll', fn);
    return () => t.removeEventListener('scroll', fn);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(18,19,21,0.86)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--line-dark)' : 'transparent'}`,
      transition: 'all 300ms var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 34,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    onClick: () => setActive(l),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: active === l ? 'var(--gold-400)' : 'var(--on-dark-2)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, l))), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    onClick: onBook
  }, "Book Your Ticket")));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'radial-gradient(120% 90% at 70% 10%, #20211d 0%, var(--ink-800) 45%, var(--ink-900) 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      left: -80,
      width: 520,
      height: 520,
      background: 'radial-gradient(circle, rgba(193,138,46,.20), transparent 60%)',
      filter: 'blur(20px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '70px 40px 90px',
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 56,
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 22
    }
  }, "A National Forum for Social Care Leaders"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 66,
      lineHeight: 1.03,
      letterSpacing: '.03em',
      color: '#fff',
      margin: 0
    }
  }, "RE", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "DEFINING"), /*#__PURE__*/React.createElement("br", null), "THE NORM"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      lineHeight: 1.5,
      color: 'var(--on-dark-2)',
      maxWidth: 480,
      marginTop: 24
    }
  }, "The national exchange where providers, commissioners and sector leaders convene to share best practice and shape the future of social care."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "lg",
    onClick: onBook
  }, "Book Your Ticket"), /*#__PURE__*/React.createElement(Btn, {
    size: "lg",
    variant: "ghostDark"
  }, "View Programme")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(IconChip, {
    name: "map-pin",
    label: "Deansgate Hotel, Manchester",
    light: true
  }), /*#__PURE__*/React.createElement(IconChip, {
    name: "calendar",
    label: "22 August 2026",
    light: true
  }))), /*#__PURE__*/React.createElement(GoldFrame, {
    inset: -14,
    style: {
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/speaker-portrait.jpg",
    alt: "Featured speaker",
    style: {
      width: '100%',
      display: 'block'
    }
  })))));
}
Object.assign(window, {
  Header,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* global React, Eyebrow, Icon, Btn, Logo, GoldFrame, useState */

// ---- Network stats band (charcoal, gold frame) ----
function NetworkBand() {
  const stats = [['320+', 'Care leaders in the network'], ['UK-wide', 'Providers & commissioners'], ['4', 'Flagship events a year']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      padding: '76px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 22,
      justifyContent: 'center'
    }
  }, "The Exchange"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1.4,
      color: '#fff',
      margin: '0 auto',
      maxWidth: 760
    }
  }, "\u201CMore than an event \u2014 a growing national community of executives committed to improving outcomes for service users.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      borderLeft: '1px solid var(--line-gold)',
      paddingLeft: 22,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      color: 'var(--gold-500)',
      letterSpacing: '.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--on-dark-2)',
      letterSpacing: '.04em',
      marginTop: 6
    }
  }, l))))));
}

// ---- Membership tiers (beige) ----
function Membership({
  onBook
}) {
  const tiers = [{
    name: 'Associate',
    price: '£180',
    cadence: 'per event',
    feats: ['Conference day access', 'Networking sessions', 'Programme & resources'],
    dark: false
  }, {
    name: 'Member',
    price: '£540',
    cadence: 'per year',
    feats: ['All flagship events', 'Gala dinner invitations', 'Member-only roundtables', 'Insight library access'],
    dark: true,
    tag: 'Most popular'
  }, {
    name: 'Partner',
    price: 'Bespoke',
    cadence: 'for organisations',
    feats: ['Team membership', 'Speaking opportunities', 'Brand visibility', 'Dedicated liaison'],
    dark: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "membership",
    style: {
      background: 'var(--beige-100)',
      padding: '92px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--gold-600)',
      marginBottom: 16
    }
  }, "Join the Network"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 42,
      letterSpacing: '.02em',
      color: 'var(--on-light-1)',
      margin: 0
    }
  }, "Membership tiers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      alignItems: 'stretch'
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      background: t.dark ? 'var(--ink-800)' : '#fff',
      borderRadius: 8,
      padding: '36px 32px',
      border: t.dark ? 'none' : '1px solid var(--line-light)',
      position: 'relative',
      boxShadow: t.dark ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: t.dark ? 'translateY(-12px)' : 'none'
    }
  }, t.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      right: 22,
      fontSize: 10,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--ink-900)',
      background: 'var(--gold-500)',
      padding: '5px 11px',
      borderRadius: 999
    }
  }, t.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: t.dark ? 'var(--gold-400)' : 'var(--gold-600)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      margin: '18px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      color: t.dark ? '#fff' : 'var(--on-light-1)'
    }
  }, t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: t.dark ? 'var(--on-dark-3)' : 'var(--on-light-3)'
    }
  }, t.cadence)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 28
    }
  }, t.feats.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: t.dark ? 'var(--gold-400)' : 'var(--gold-600)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: t.dark ? 'var(--on-dark-2)' : 'var(--on-light-2)'
    }
  }, f)))), /*#__PURE__*/React.createElement(Btn, {
    variant: t.dark ? 'primary' : 'ghostLight',
    onClick: onBook,
    style: {
      width: '100%'
    }
  }, t.price === 'Bespoke' ? 'Enquire' : 'Join'))))));
}

// ---- Footer ----
function Footer() {
  const cols = [['Platform', ['Events', 'The Network', 'Insight', 'Membership']], ['Sectors', ['Children’s Care', 'Adult Care', 'Commissioners', 'Sector Leaders']], ['Organisation', ['About NWCEX', 'Partnerships', 'Contact', 'Press']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      padding: '72px 40px 40px',
      borderTop: '1px solid var(--line-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--on-dark-3)',
      lineHeight: 1.6,
      marginTop: 18,
      maxWidth: 260
    }
  }, "A national exchange for the UK social care sector. Sharing best practice, building the network, improving outcomes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 20
    }
  }, ['globe', 'mail', 'message-circle'].map(ic => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      border: '1px solid var(--line-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "var(--gold-500)"
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--on-dark-2)',
      marginBottom: 18
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 13.5,
      color: 'var(--on-dark-3)',
      padding: '6px 0',
      cursor: 'pointer'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--line-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--on-dark-3)',
      letterSpacing: '.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 The North-West Care Exchange Limited"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 northwestcareexchange.org")));
}
Object.assign(window, {
  NetworkBand,
  Membership,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TicketModal.jsx
try { (() => {
/* global React, Eyebrow, Icon, Btn, GoldFrame, useState */

function TicketModal({
  open,
  onClose
}) {
  const tiers = [['Conference Only', '£180'], ['Conference + Gala Dinner', '£265'], ['Gala Dinner Only', '£120'], ['All-Inclusive (+ Hotel)', '£340']];
  const [sel, setSel] = useState(1);
  const [done, setDone] = useState(false);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(10,10,11,0.72)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      animation: 'fade 220ms var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 560,
      maxWidth: '100%',
      background: 'var(--ink-800)',
      borderRadius: 8,
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 10,
      border: '1px solid var(--line-gold)',
      borderRadius: 5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '34px 38px 38px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "Redefining the Norm \xB7 22 Aug 2026"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      letterSpacing: '.02em',
      color: '#fff',
      margin: 0
    }
  }, done ? 'You’re booked' : 'Book your ticket')), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--on-dark-3)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  }))), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '26px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: 'var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    color: "var(--ink-900)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      color: 'var(--on-dark-1)',
      lineHeight: 1.5,
      margin: '0 auto',
      maxWidth: 360
    }
  }, "Confirmation and joining details for ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, tiers[sel][0]), " are on their way to your inbox."), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghostDark",
    onClick: onClose,
    style: {
      marginTop: 26
    }
  }, "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      margin: '26px 0 24px'
    }
  }, tiers.map(([name, price], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setSel(i),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 18px',
      border: `1px solid ${sel === i ? 'var(--gold-500)' : 'var(--line-dark)'}`,
      borderRadius: 4,
      background: sel === i ? 'rgba(193,138,46,.10)' : 'transparent',
      cursor: 'pointer',
      transition: 'all var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 999,
      border: `2px solid ${sel === i ? 'var(--gold-500)' : 'var(--on-dark-3)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, sel === i && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--gold-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#fff',
      letterSpacing: '.02em',
      fontWeight: 500
    }
  }, name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      color: 'var(--gold-500)'
    }
  }, price)))), /*#__PURE__*/React.createElement("input", {
    placeholder: "Full name",
    style: inp
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Work email",
    style: {
      ...inp,
      marginTop: 10
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => setDone(true),
    style: {
      width: '100%',
      marginTop: 18
    }
  }, "Confirm Booking \u2014 ", tiers[sel][1])))));
}
const inp = {
  width: '100%',
  padding: '13px 15px',
  background: 'var(--ink-700)',
  border: '1px solid var(--line-dark)',
  borderRadius: 4,
  color: '#fff',
  fontFamily: 'var(--font-sans)',
  fontSize: 14
};
Object.assign(window, {
  TicketModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TicketModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/primitives.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect,
  useRef
} = React;

// Re-render Lucide icons after mounts/updates
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
function Icon({
  name,
  size = 20,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      ...style
    }
  });
}

// The NWCEX wordmark — Cinzel caps with gold CE, + tracked subline
function Logo({
  size = 24,
  subline = true,
  light = true
}) {
  const fg = light ? '#fff' : 'var(--on-light-1)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '.04em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: fg
    }
  }, "NWC"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "EX")), subline && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: size * 0.22,
      fontSize: Math.max(8, size * 0.33),
      letterSpacing: '.30em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: light ? 'var(--on-dark-2)' : 'var(--on-light-2)',
      fontFamily: 'var(--font-sans)'
    }
  }, "North-West Care Exchange"));
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '.32em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      ...style
    }
  }, children);
}
function Btn({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  style
}) {
  const pad = size === 'lg' ? '17px 34px' : size === 'sm' ? '10px 18px' : '14px 26px';
  const fs = size === 'sm' ? 11 : 12.5;
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: fs,
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    borderRadius: 3,
    padding: pad,
    cursor: 'pointer',
    border: '1px solid transparent',
    transition: 'all var(--dur) var(--ease)',
    ...style
  };
  const variants = {
    primary: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)'
    },
    dark: {
      background: 'var(--ink-800)',
      color: '#fff'
    },
    ghostDark: {
      background: 'transparent',
      color: 'var(--gold-400)',
      borderColor: 'var(--gold-500)'
    },
    ghostLight: {
      background: 'transparent',
      color: 'var(--gold-600)',
      borderColor: 'var(--gold-500)'
    }
  };
  const [hover, setHover] = useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--gold-400)'
    },
    dark: {
      background: 'var(--ink-600)',
      boxShadow: 'var(--shadow-md)'
    },
    ghostDark: {
      background: 'rgba(193,138,46,.12)'
    },
    ghostLight: {
      background: 'var(--gold-100)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover ? hoverStyles[variant] : {})
    }
  }, children);
}

// Thin gold bracket frame motif from the posters
function GoldFrame({
  inset = 12,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset,
      border: '1px solid var(--line-gold)',
      borderRadius: 4,
      pointerEvents: 'none'
    }
  }), children);
}
function IconChip({
  name,
  label,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 999,
      background: 'var(--gold-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: 19,
    color: "var(--ink-900)"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: light ? '#fff' : 'var(--on-light-1)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, label));
}
Object.assign(window, {
  useLucide,
  Icon,
  Logo,
  Eyebrow,
  Btn,
  GoldFrame,
  IconChip,
  useState,
  useEffect,
  useRef
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/primitives.jsx", error: String((e && e.message) || e) }); }

})();
