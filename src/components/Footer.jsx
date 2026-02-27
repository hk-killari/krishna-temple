import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>🙏 శ్రీ వేణుగోపాల స్వామి దేవస్థానం</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '10px', color: '#d4a84b' }}>
              శ్రీ రుక్మిణీ సత్యభామ సమేత వేణుగోపాల స్వామి దేవస్థానం
            </p>
            <p className="sanskrit" style={{ fontSize: '1rem', marginBottom: '10px' }}>
              हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।<br />
              हरे राम हरे राम राम राम हरे हरे॥
            </p>
            <p>
              A divine abode dedicated to Lord Sri Venugopal Swamy with Rukmini and Satyabhama, 
              offering spiritual solace and devotional services to all seekers of truth and divine love.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/darshan">Darshan Timings</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/donations">Donations</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/darshan">Daily Aarti</Link></li>
              <li><Link to="/events">Special Pujas</Link></li>
              <li><Link to="/donations">Annadan Seva</Link></li>
              <li><Link to="/donations">Temple Development</Link></li>
              <li><Link to="/contact">Volunteer</Link></li>
              <li><Link to="/gallery">Live Darshan</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Subscribe to receive updates about events, festivals, and temple news.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                {subscribed ? '✓' : 'Subscribe'}
              </button>
            </form>
            {subscribed && (
              <p style={{ color: '#25d366', marginTop: '10px', fontSize: '0.9rem' }}>
                Thank you for subscribing! 🙏
              </p>
            )}
            <div style={{ marginTop: '25px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Phone size={16} /> +91 98765 43210
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Mail size={16} /> info@srikrishnatemple.org
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} /> Hyderabad, Telangana
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Sri Krishna Temple. All rights reserved. | 
            Made with 💛 for Lord Krishna
          </p>
          <p style={{ marginTop: '10px', fontSize: '0.85rem', opacity: 0.7 }}>
            జై శ్రీ కృష్ణ | जय श्री कृष्ण | Jai Shri Krishna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
