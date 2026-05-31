import { useState } from 'react';
import { Header, Hero } from './components/Header.jsx';
import { About, Pillars } from './components/About.jsx';
import { FeaturedEvent, NetworkBand } from './components/Event.jsx';
import { Speakers } from './components/Speakers.jsx';
import { Booking, Eventbrite } from './components/Booking.jsx';
import { Contact, Footer } from './components/Contact.jsx';
import { TicketModal } from './components/TicketModal.jsx';

export default function App() {
  const [modal, setModal] = useState(false);
  const book = () => setModal(true);

  return (
    <div id="site-scroll" style={{ height: '100vh', overflowY: 'auto', background: 'var(--ink-800)' }}>
      <Header onBook={book} />
      <Hero onBook={book} />
      <About />
      <Pillars />
      <Speakers />
      <FeaturedEvent onBook={book} />
      <NetworkBand />
      <Booking onBook={book} />
      <Eventbrite />
      <Contact />
      <Footer />
      <TicketModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
