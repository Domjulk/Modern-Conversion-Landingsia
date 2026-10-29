import { useEffect, useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import {
  Accessibility, ArrowRight, Check, Copy, Fan, MapPin, MonitorPlay, Phone,
  Presentation, Projector, Quote, Sparkles, Sun, Users, Volume2, X, Clock3,
  Building2, MessageCircle, Navigation, MoveUpRight,
} from 'lucide-react';

const phone = '+234 704 051 0222';
const whatsapp = 'https://wa.me/2347040510222';
const address = 'Ayedun Close, Area 11, Garki, Abuja 900103, FCT, inside LaraLek Ultimate Limited';
const mapsLink = 'https://www.google.com/maps/search/?api=1&query=HighPoint+Event+and+Conference+Hall+Ayedun+Close+Area+11+Garki+Abuja';
const events = [
  { name: 'Corporate conferences & AGM seminars', category: '01 / BUSINESS', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1100&q=82' },
  { name: 'Intimate wedding receptions & dinners', category: '02 / CELEBRATIONS', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=850&q=82' },
  { name: 'Milestone birthdays & private banquets', category: '03 / PRIVATE BANQUETS', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=850&q=82' },
  { name: 'Training workshops & product launches', category: '04 / IDEAS IN MOTION', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=850&q=82' },
];
const amenities = [
  { icon: Presentation, title: 'Adaptable room layouts', detail: 'Conference, banquet and flexible seating arrangements.' },
  { icon: Sun, title: 'Panoramic natural light', detail: 'Floor-to-ceiling windows open the room to the skyline.' },
  { icon: Fan, title: 'Ducted air conditioning', detail: 'Climate-controlled comfort throughout your event.' },
  { icon: MonitorPlay, title: 'Stage & LED display', detail: 'Presentation-ready staging for clear, confident moments.' },
  { icon: Volume2, title: 'Backup sound', detail: 'Reliable audio support for speeches and sessions.' },
  { icon: MapPin, title: 'Central Abuja access', detail: 'An easy-to-find address in Area 11, Garki.' },
];
const quotes = [
  { text: '“Exceptional venue for events... nestled right in the heart of Area 11, Garki, Abuja.”', name: 'Favour Emmanuel', sub: 'Google review' },
  { text: '“It was awesome, beautiful ambiance, cool atmosphere, conducive and spacious... It was worth it.”', name: 'Addas Fashion & Lifestyle', sub: 'Google review' },
  { text: '“Decent and well-equipped space for hosting memorable celebrations.”', name: 'Peter Praise', sub: 'Google review' },
];
const categories = ['Corporate Conference', 'Wedding Reception', 'Birthday Celebration', 'Workshop', 'Other'];

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!dialogOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDialogOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [dialogOpen]);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success('Address copied to clipboard.');
      window.setTimeout(() => setCopied(false), 2300);
    } catch {
      toast.error('Could not copy the address. Please select it and copy manually.');
    }
  };

  const submitInspection = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setError('Please complete each required field to continue.');
      return;
    }
    setError('');
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || '').trim();
    const message = `Hello HighPoint Event Hall, I would like to schedule an inspection.\n\n*Name:* ${value('name')}\n*Phone:* ${value('phone')}\n*Event Type:* ${value('category')}\n*Guests:* ${value('guests')}\n*Date:* ${value('date')}\n*Notes:* ${value('notes')}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    toast('Opening WhatsApp with your inspection details...');
    form.reset();
    setDialogOpen(false);
  };

  return (
    <main className="hp-site">
      <div className="hp-wrap">
        <header className="hp-header">
          <a className="hp-logo" href="#top" aria-label="HighPoint home">
            <span className="hp-mark"><Building2 size={21} strokeWidth={1.5} /></span>
            <span><strong>HIGHPOINT</strong><small>Event & Conference Hall · Garki, Abuja</small></span>
          </a>
          <nav className="hp-nav" aria-label="Main navigation">
            <a href="#specs">Hall Specs</a><a href="#events">Event Types</a><a href="#amenities">Amenities</a><a href="#reviews">Reviews</a><a href="#location">Location</a>
          </nav>
          <div className="hp-header-actions">
            <a className="hp-header-call" href="tel:+2347040510222" aria-label="Call HighPoint at +234 704 051 0222" data-testid="link-call-header">
              <Phone size={14} /><span>Call</span>
            </a>
            <button className="hp-header-cta" onClick={() => setDialogOpen(true)} data-testid="button-inspection-header">
              Book an inspection <ArrowRight size={14} />
            </button>
          </div>
        </header>
      </div>

      <section className="hp-wrap hp-hero" id="top">
        <div className="hp-hero-copy">
          <div className="hp-eyebrow">Area 11 · Garki · Abuja</div>
          <h1 className="hp-hero-brand"><span className="hp-hero-brand-name">HighPoint</span><span className="hp-hero-brand-type">Event &amp; Conference Hall</span></h1>
          <p className="hp-hero-tagline">A central, serene &amp; elevated event space in Garki.</p>
          <p className="hp-lead">Set above the everyday. HighPoint in Area 11 offers an ambient, climate-controlled conference and banquet hall, framed by panoramic floor-to-ceiling windows and wide Abuja skyline views.</p>
          <div className="hp-badges">
            <span className="hp-badge"><MapPin size={13} /> Central Garki</span>
            <span className="hp-badge"><Sparkles size={13} /> Floor-to-ceiling skyline views</span>
            <span className="hp-badge"><Clock3 size={13} /> Open 24/7</span>
            <span className="hp-badge"><Accessibility size={14} /> Wheelchair accessible</span>
          </div>
          <div className="hp-actions">
            <button className="hp-btn hp-btn-gold" onClick={() => setDialogOpen(true)} data-testid="button-inspection-hero">Schedule WhatsApp inspection <ArrowRight size={15} /></button>
            <a className="hp-btn hp-btn-outline" href="#amenities" data-testid="link-explore-features">Explore hall features <ArrowRight size={15} /></a>
            <a className="hp-phone" href="tel:+2347040510222" data-testid="link-call-hero">{phone}</a>
          </div>
        </div>
        <div className="hp-hero-visual">
          <img className="hp-hero-photo" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1500&q=88" alt="Elegant light-filled event hall with rows of banquet tables" />
          <div className="hp-floating"><b>4.1<span style={{fontSize:15,color:'#a77d15'}}> / 5</span></b><span>Google guest rating</span></div>
          <div className="hp-photo-note"><i /> Room to meet. Space to see further.</div>
        </div>
      </section>

      <section className="hp-section" id="specs">
        <div className="hp-wrap hp-intro">
          <div><div className="hp-eyebrow">A room with perspective</div><h2>Bring people together.<br />Let the city in.</h2></div>
          <div className="hp-intro-copy">From boardroom focus to a full-room celebration, HighPoint gives your gathering a composed, welcoming backdrop. Natural light, thoughtful comfort and an elevated view make the hours here feel different—in the best way.</div>
        </div>
      </section>

      <section className="hp-section hp-specs">
        <div className="hp-wrap hp-specs-grid">
          <div>
            <div className="hp-eyebrow">The hall, at a glance</div>
            <h2>Designed to feel open. Ready to work.</h2>
            <p>A versatile setting in central Abuja, with the technical essentials and flexibility to make your event your own.</p>
            <button className="hp-btn hp-btn-gold" style={{marginTop:17}} onClick={() => setDialogOpen(true)} data-testid="button-inspection-specs">See it for yourself <ArrowRight size={15} /></button>
          </div>
          <div className="hp-spec-list">
            <div className="hp-spec-row"><Users size={19} /><div><strong>Executive conference &amp; banquet layouts</strong><span>Flexible seating for seminars, award galas, banquets and intimate wedding receptions.</span></div></div>
            <div className="hp-spec-row"><Sun size={19} /><div><strong>Floor-to-ceiling skyline windows</strong><span>Panoramic daytime views, natural light and ambient evening lighting.</span></div></div>
            <div className="hp-spec-row"><Fan size={19} /><div><strong>Full commercial climate control</strong><span>Integrated ceiling-ducted AC keeps the space comfortable throughout.</span></div></div>
            <div className="hp-spec-row"><Projector size={19} /><div><strong>Stage, LED &amp; backup sound</strong><span>Elevated stage platform, recessed LED lighting grid and backup sound systems.</span></div></div>
            <div className="hp-spec-row"><Navigation size={19} /><div><strong>Central Abuja access</strong><span>Easy to reach in Area 11, Garki.</span></div></div>
          </div>
        </div>
      </section>

      <section className="hp-section" id="events">
        <div className="hp-wrap">
          <div className="hp-section-head"><div className="hp-eyebrow">Gather for a reason</div><h2>For the moments<br />worth bringing everyone to.</h2></div>
          <div className="hp-event-grid">
            {events.map((item, index) => <article className="hp-event" key={item.name} data-testid={`card-event-${index}`}>
              <img src={item.image} alt="" loading="lazy" />
              <div className="hp-event-content"><span>{item.category}</span><h3>{item.name}</h3></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="hp-section hp-amenities" id="amenities">
        <div className="hp-wrap hp-amenity-layout">
           <div className="hp-amenity-art"><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1100&q=85" alt="A bright conference space prepared for a gathering" loading="lazy" /></div>
          <div>
            <div className="hp-eyebrow">Comfort, considered</div><h2 style={{fontSize:'clamp(36px,4vw,50px)',lineHeight:1.1,margin:'17px 0'}}>Everything in place<br />for a smooth day.</h2>
            <p style={{color:'#596779',fontSize:13,lineHeight:1.8,maxWidth:490}}>The details are practical, the atmosphere is considered, and the room adapts around your plans.</p>
            <div className="hp-amenity-list">
              {amenities.map(({icon: Icon,title,detail},index) => <div className="hp-amenity" key={title} data-testid={`amenity-${index}`}><Icon size={17} /><div><strong>{title}</strong><span>{detail}</span></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="hp-section hp-reviews" id="reviews">
        <div className="hp-wrap">
          <div className="hp-review-top">
            <div className="hp-section-head"><div className="hp-eyebrow">A good room makes a difference</div><h2>Words from the people<br />who have gathered here.</h2></div>
            <div className="hp-rating"><strong>4.1</strong><div><div className="hp-stars" aria-label="4.1 out of 5 stars">★★★★★</div><small>Google rating · Abuja</small></div></div>
          </div>
          <div className="hp-reviews-grid">
            {quotes.map(({text,name,sub},index) => <article className="hp-quote" key={name} data-testid={`quote-${index}`}><div><Quote size={18} color="#ba941e" /><p>{text}</p></div><div><strong>{name}</strong><small>{sub}</small></div></article>)}
          </div>
        </div>
      </section>

      <section className="hp-location" id="location">
        <div className="hp-wrap hp-location-grid">
          <div>
            <div className="hp-eyebrow">A central address, a little above it all</div><h2>Find your way<br />to HighPoint.</h2>
            <p>Open 24/7 for the conversations that matter. Call to speak with our team or plan an in-person inspection.</p>
            <div className="hp-address"><MapPin size={20} /><div><strong>{address}</strong><small>Plus Code 2FPW+WM9 · Inside LaraLek Ultimate Limited</small></div></div>
            <div className="hp-actions">
              <a className="hp-btn hp-btn-gold" href={mapsLink} target="_blank" rel="noreferrer" data-testid="link-directions"><Navigation size={15} /> Open in Google Maps <MoveUpRight size={13} /></a>
              <button className="hp-btn hp-btn-outline" style={{color:'white',borderColor:'#ffffff55'}} onClick={copyAddress} data-testid="button-copy-address">{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Address copied' : 'Copy address'}</button>
            </div>
            <div style={{display:'flex',gap:22,marginTop:23,flexWrap:'wrap'}}>
              <a href="tel:+2347040510222" style={{color:'#e6c55f',fontSize:12,textDecoration:'none',fontWeight:700}} data-testid="link-call-location"><Phone size={14} style={{verticalAlign:'middle',marginRight:7}} />{phone}</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" style={{color:'#e6c55f',fontSize:12,textDecoration:'none',fontWeight:700}} data-testid="link-whatsapp-location"><MessageCircle size={14} style={{verticalAlign:'middle',marginRight:7}} />Chat on WhatsApp</a>
            </div>
          </div>
          <a className="hp-map-card" href={mapsLink} target="_blank" rel="noreferrer" aria-label="Open directions in Google Maps">
            <div className="hp-map-pin"><MapPin size={23} /><strong>HIGHPOINT</strong><small>2FPW+WM9 · Area 11, Garki</small></div>
          </a>
        </div>
      </section>
      <footer className="hp-footer"><div className="hp-wrap hp-footer-inner">
        <a className="hp-logo" href="#top"><span className="hp-mark"><Building2 size={19} /></span><span><strong style={{color:'#f4f6f9'}}>HIGHPOINT</strong><small style={{color:'#aab5c4'}}>Event & Conference Hall</small></span></a>
        <nav className="hp-footer-nav" aria-label="Footer navigation">
          <a href="#specs">Hall Specs</a><a href="#events">Event Types</a><a href="#amenities">Amenities</a><a href="#reviews">Reviews</a><a href="#location">Location</a>
        </nav>
        <div className="hp-footer-contact"><a href="tel:+2347040510222">{phone}</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <span>Ayedun Close, Area 11, Garki, Abuja · Open 24/7</span>
        <span>© {new Date().getFullYear()} HighPoint Event Hall</span>
      </div></footer>
      <div className="hp-mobile-bar">
        <a className="hp-btn hp-btn-outline" href="tel:+2347040510222" data-testid="link-mobile-call"><Phone size={15} /> Call HighPoint</a>
        <a className="hp-btn hp-btn-gold" href={whatsapp} target="_blank" rel="noreferrer" data-testid="link-mobile-chat"><MessageCircle size={15} /> Chat on WhatsApp</a>
      </div>

      {dialogOpen && <div className="hp-dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setDialogOpen(false); }}>
        <section className="hp-dialog" role="dialog" aria-modal="true" aria-labelledby="inspection-title">
          <div className="hp-dialog-head">
            <div><div className="hp-eyebrow">Come see the view</div><h2 id="inspection-title">Arrange an inspection</h2><p>Share a few details and we’ll help you plan a visit.</p></div>
            <button className="hp-close" onClick={() => setDialogOpen(false)} aria-label="Close inspection form" data-testid="button-close-inspection"><X size={18} /></button>
          </div>
          <form className="hp-form" onSubmit={submitInspection}>
            <div className="hp-field"><label htmlFor="inspection-name">Your name *</label><input id="inspection-name" name="name" placeholder="Full name" autoComplete="name" required /></div>
            <div className="hp-field"><label htmlFor="inspection-phone">Phone number *</label><input id="inspection-phone" name="phone" type="tel" placeholder="+234 ..." autoComplete="tel" required /></div>
            <div className="hp-field"><label htmlFor="inspection-category">Event category *</label><select id="inspection-category" name="category" defaultValue="" required><option value="" disabled>Select an event</option>{categories.map(category => <option key={category}>{category}</option>)}</select></div>
            <div className="hp-field"><label htmlFor="inspection-guests">Guest count *</label><input id="inspection-guests" name="guests" type="number" min="1" placeholder="Estimated number" required /></div>
            <div className="hp-field full"><label htmlFor="inspection-date">Preferred inspection date &amp; time *</label><input id="inspection-date" name="date" type="datetime-local" required /></div>
            <div className="hp-field full"><label htmlFor="inspection-notes">Notes <span style={{fontWeight:400,color:'#718096'}}>(optional)</span></label><textarea id="inspection-notes" name="notes" placeholder="Anything you would like us to know?" /></div>
            <div className="hp-field-error hp-form-error" role="status">{error}</div>
            <button className="hp-btn hp-btn-gold hp-form-submit" type="submit" data-testid="button-submit-inspection">Continue in WhatsApp <ArrowRight size={15} /></button>
          </form>
        </section>
      </div>}
    </main>
  );
}
