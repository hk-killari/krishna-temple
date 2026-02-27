import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, Heart, MapPin, Users, 
  Sun, Moon, Star, Sparkles, ArrowRight,
  Bell, Gift, Camera
} from 'lucide-react';

const Home = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const openingDate = new Date('2026-04-15T06:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = openingDate - now;
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Sun size={32} />,
      title: 'Daily Darshan',
      description: 'Experience divine blessings with daily darshan timings from morning to evening.'
    },
    {
      icon: <Bell size={32} />,
      title: 'Sacred Aartis',
      description: 'Participate in soul-stirring aartis performed with traditional rituals and devotion.'
    },
    {
      icon: <Gift size={32} />,
      title: 'Special Pujas',
      description: 'Book personalized pujas for yourself and your loved ones on auspicious occasions.'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Festivals',
      description: 'Celebrate Janmashtami, Holi, Diwali and other festivals with grandeur and joy.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Annadan Seva',
      description: 'Participate in the sacred service of providing food to thousands of devotees daily.'
    },
    {
      icon: <Camera size={32} />,
      title: 'Live Darshan',
      description: 'Watch live temple darshan from anywhere in the world through our streaming service.'
    }
  ];

  const announcements = [
    {
      date: 'Mar 15, 2026',
      title: 'Temple Opening Ceremony',
      description: 'Grand inauguration with special pujas and prasadam distribution.'
    },
    {
      date: 'Mar 10, 2026',
      title: 'Final Touches Complete',
      description: '90% construction completed. Interior decoration in progress.'
    },
    {
      date: 'Feb 25, 2026',
      title: 'Deity Installation',
      description: 'Divine deities have been installed with proper vedic rituals.'
    }
  ];

  return (
    <>
      {/* Coming Soon Banner */}
      <div className="coming-soon-banner">
        <h3>
          <Sparkles size={24} />
          Grand Opening Soon - April 2026
          <Sparkles size={24} />
        </h3>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-sanskrit sanskrit">
            ॐ नमो भगवते वासुदेवाय
          </p>
          <h1 style={{ fontSize: '2.5rem' }}>శ్రీ రుక్మిణీ సత్యభామ సమేత<br />వేణుగోపాల స్వామి దేవస్థానం</h1>
          <p className="hero-subtitle">
            Sri Rukmini Satyabhama Sameta Venugopal Swamy Devasthanam
          </p>
          <p>
            Welcome to the divine abode of Lord Sri Venugopal Swamy with Rukmini Devi and Satyabhama Devi. 
            A sacred sanctuary where devotion meets serenity, and every soul finds peace in the eternal 
            presence of the Supreme Lord.
          </p>
          
          <div className="countdown">
            <div className="countdown-item">
              <span>{countdown.days}</span>
              <p>Days</p>
            </div>
            <div className="countdown-item">
              <span>{countdown.hours}</span>
              <p>Hours</p>
            </div>
            <div className="countdown-item">
              <span>{countdown.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="countdown-item">
              <span>{countdown.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>

          <div className="hero-buttons" style={{ marginTop: '40px' }}>
            <Link to="/donations" className="btn btn-primary">
              <Heart size={20} /> Support Temple
            </Link>
            <Link to="/darshan" className="btn btn-secondary">
              <Clock size={20} /> View Timings
            </Link>
          </div>
        </motion.div>

        {/* Decorative floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '3rem',
          opacity: 0.2,
          animation: 'float 6s ease-in-out infinite'
        }}>🪷</div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          fontSize: '3rem',
          opacity: 0.2,
          animation: 'float 6s ease-in-out infinite 2s'
        }}>🦚</div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* Welcome Section */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Welcome to Sri Venugopal Swamy Temple</h2>
            <p>
              A divine sanctuary where the eternal love of Lord Venugopal Swamy with Rukmini and Satyabhama 
              embraces every devotee who seeks His grace.
            </p>
          </motion.div>

          <div className="about-content" style={{ marginBottom: '60px' }}>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                backgroundImage: 'url(/images/god-1.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#0d7377'
              }} />
            </motion.div>
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>A Divine Abode of Lord Venugopal Swamy</h2>
              <p>
                Our temple is being built with immense devotion and traditional architectural 
                excellence. Every stone laid is a prayer, every carving a meditation on the 
                divine forms of Sri Rukmini, Satyabhama, and Lord Venugopal Swamy.
              </p>
              <p>
                <strong>90% construction is now complete!</strong> The temple features exquisite 
                craftsmanship inspired by ancient temple architecture, with intricate carvings 
                depicting the divine pastimes (leelas) of Lord Krishna.
              </p>
              <p>
                We invite all devotees to be part of this sacred journey and witness the 
                grand opening ceremony scheduled for April 2026.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span>90%</span>
                  <p>Completed</p>
                </div>
                <div className="stat-item">
                  <span>5000+</span>
                  <p>Donors</p>
                </div>
                <div className="stat-item">
                  <span>50+</span>
                  <p>Artisans</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Temple Services</h2>
            <p>
              Experience the complete spiritual journey with our diverse range 
              of devotional services and activities.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Latest Updates</h2>
            <p>
              Stay informed about the temple construction progress and upcoming events.
            </p>
          </motion.div>

          <div className="events-grid">
            {announcements.map((item, index) => (
              <motion.div
                key={index}
                className="event-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="event-image">
                  {index === 0 ? '🎉' : index === 1 ? '🏗️' : '🙏'}
                  <div className="event-date">
                    <span>{item.date.split(' ')[1].replace(',', '')}</span>
                    <p>{item.date.split(' ')[0]}</p>
                  </div>
                </div>
                <div className="event-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="event-meta">
                    <span><Calendar size={14} /> {item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            style={{ textAlign: 'center', marginTop: '40px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/events" className="btn btn-primary">
              View All Events <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ color: 'white', marginBottom: '20px' }}>
              Be Part of This Divine Journey
            </h2>
            <p style={{ 
              color: 'rgba(255,255,255,0.8)', 
              maxWidth: '700px', 
              margin: '0 auto 40px',
              fontSize: '1.1rem'
            }}>
              Your generous contributions help us complete this sacred temple and serve 
              thousands of devotees. Every donation, big or small, is a step towards 
              preserving our spiritual heritage.
            </p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <Link to="/donations" className="btn btn-primary">
                <Heart size={20} /> Donate Now
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <MapPin size={20} /> Visit Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="section section-light">
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon"><MapPin size={32} /></div>
              <h3>Location</h3>
              <p>Hyderabad, Telangana<br />India - 500001</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon"><Clock size={32} /></div>
              <h3>Timings</h3>
              <p>Morning: 5:00 AM - 12:00 PM<br />Evening: 4:00 PM - 9:00 PM</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon"><Users size={32} /></div>
              <h3>Contact</h3>
              <p>+91 98765 43210<br />info@srikrishnatemple.org</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
