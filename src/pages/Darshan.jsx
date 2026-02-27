import { motion } from 'framer-motion';
import { Sun, Moon, Clock, Bell, Star, Calendar, Info, Video } from 'lucide-react';

const Darshan = () => {
  const dailyTimings = [
    { name: 'Temple Opens', time: '5:00 AM' },
    { name: 'Mangala Aarti', time: '5:30 AM' },
    { name: 'Darshan Begins', time: '6:00 AM' },
    { name: 'Abhishekam', time: '7:00 AM' },
    { name: 'Alankaram', time: '8:00 AM' },
    { name: 'Morning Darshan', time: '8:30 AM - 12:00 PM' },
    { name: 'Raj Bhog Aarti', time: '12:00 PM' },
    { name: 'Temple Closes (Afternoon)', time: '12:30 PM' }
  ];

  const eveningTimings = [
    { name: 'Temple Reopens', time: '4:00 PM' },
    { name: 'Evening Darshan', time: '4:00 PM - 8:00 PM' },
    { name: 'Sandhya Aarti', time: '6:30 PM' },
    { name: 'Shayan Aarti', time: '8:30 PM' },
    { name: 'Temple Closes', time: '9:00 PM' }
  ];

  const specialPujas = [
    {
      name: 'Archana',
      description: 'Chanting of sacred names with flower offerings',
      duration: '15-20 mins',
      donation: '₹101'
    },
    {
      name: 'Abhishekam',
      description: 'Sacred bathing of deity with milk, honey, and water',
      duration: '30-45 mins',
      donation: '₹501'
    },
    {
      name: 'Sahasranama Archana',
      description: 'Recitation of 1000 names of Lord Krishna',
      duration: '1 hour',
      donation: '₹1,001'
    },
    {
      name: 'Rudrabhishekam',
      description: 'Special abhishekam with 108 items',
      duration: '2 hours',
      donation: '₹2,501'
    },
    {
      name: 'Janmashtami Special Puja',
      description: 'Grand puja on Lord Krishna\'s birthday',
      duration: 'Full day',
      donation: '₹5,001'
    },
    {
      name: 'Annakoot Seva',
      description: 'Sponsoring of prasadam for devotees',
      duration: 'Full day',
      donation: '₹11,001'
    }
  ];

  const aartiDetails = [
    {
      name: 'Mangala Aarti',
      time: '5:30 AM',
      description: 'The first aarti of the day, performed before sunrise to awaken the Lord.',
      icon: <Sun size={24} />
    },
    {
      name: 'Shringar Aarti',
      time: '8:00 AM',
      description: 'Performed after the deity is dressed in beautiful ornaments and garments.',
      icon: <Star size={24} />
    },
    {
      name: 'Raj Bhog Aarti',
      time: '12:00 PM',
      description: 'Midday aarti when elaborate food offerings are made to the Lord.',
      icon: <Bell size={24} />
    },
    {
      name: 'Sandhya Aarti',
      time: '6:30 PM',
      description: 'Evening aarti performed during the sacred twilight hours.',
      icon: <Moon size={24} />
    },
    {
      name: 'Shayan Aarti',
      time: '8:30 PM',
      description: 'The final aarti of the day before the Lord retires for the night.',
      icon: <Star size={24} />
    }
  ];

  return (
    <>
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Darshan & Puja Timings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sanskrit"
        >
          दर्शन और पूजा का समय | దర్శన మరియు పూజ సమయాలు
        </motion.p>
      </div>

      {/* Notice Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: 'linear-gradient(135deg, #d4a84b 0%, #f4d03f 100%)',
          padding: '15px 20px',
          textAlign: 'center'
        }}
      >
        <p style={{ 
          margin: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '10px',
          fontWeight: '500'
        }}>
          <Info size={18} />
          Timings are indicative. After grand opening in April 2026, exact timings will be updated.
        </p>
      </motion.div>

      {/* Daily Darshan Timings */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Daily Darshan Schedule</h2>
            <p>Plan your visit to receive the divine blessings of Lord Venugopal Swamy</p>
          </motion.div>

          <div className="timings-grid">
            <motion.div
              className="timing-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timing-card-header">
                <Sun size={40} style={{ marginBottom: '10px', color: '#d4a84b' }} />
                <h3>Morning Session</h3>
                <p>प्रातःकाल सत्र</p>
              </div>
              <div className="timing-list">
                {dailyTimings.map((item, index) => (
                  <div key={index} className="timing-item">
                    <span className="name">{item.name}</span>
                    <span className="time">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="timing-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timing-card-header">
                <Moon size={40} style={{ marginBottom: '10px', color: '#d4a84b' }} />
                <h3>Evening Session</h3>
                <p>सायंकाल सत्र</p>
              </div>
              <div className="timing-list">
                {eveningTimings.map((item, index) => (
                  <div key={index} className="timing-item">
                    <span className="name">{item.name}</span>
                    <span className="time">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aarti Details */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Sacred Aarti Schedule</h2>
            <p>Experience the divine through traditional aarti ceremonies</p>
          </motion.div>

          <div className="events-grid">
            {aartiDetails.map((aarti, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ textAlign: 'left', padding: '30px' }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  marginBottom: '15px' 
                }}>
                  <div className="feature-icon" style={{ 
                    width: '50px', 
                    height: '50px', 
                    margin: 0,
                    fontSize: '20px'
                  }}>
                    {aarti.icon}
                  </div>
                  <div>
                    <h4 style={{ color: '#095456', marginBottom: '5px' }}>{aarti.name}</h4>
                    <span style={{ 
                      background: '#0d7377', 
                      color: 'white', 
                      padding: '3px 12px', 
                      borderRadius: '15px',
                      fontSize: '0.85rem'
                    }}>
                      {aarti.time}
                    </span>
                  </div>
                </div>
                <p style={{ margin: 0, color: '#666' }}>{aarti.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Pujas */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Special Puja Services</h2>
            <p>Book personalized pujas for yourself and your loved ones</p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '25px' 
          }}>
            {specialPujas.map((puja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  borderColor: '#d4a84b',
                  transform: 'translateY(-5px)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <h4 style={{ color: '#095456', fontSize: '1.2rem' }}>{puja.name}</h4>
                  <span style={{
                    background: 'linear-gradient(135deg, #d4a84b 0%, #f4d03f 100%)',
                    color: '#000',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>
                    {puja.donation}
                  </span>
                </div>
                <p style={{ color: '#666', marginBottom: '15px' }}>{puja.description}</p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  color: '#0d7377',
                  fontSize: '0.9rem'
                }}>
                  <Clock size={16} />
                  <span>Duration: {puja.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: '40px',
              padding: '30px',
              background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
              borderRadius: '15px',
              textAlign: 'center',
              color: 'white'
            }}
          >
            <p style={{ marginBottom: '15px', fontSize: '1.1rem' }}>
              To book a puja or for more information, please contact us:
            </p>
            <p style={{ fontSize: '1.3rem', fontWeight: '600', color: '#d4a84b' }}>
              📞 +91 98765 43210 | ✉️ puja@srikrishnatemple.org
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Darshan Section */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Live Darshan</h2>
            <p>Experience divine darshan from anywhere in the world</p>
          </motion.div>

          <motion.div
            className="live-darshan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="live-badge">
                LIVE
              </div>
              <span style={{ color: '#666' }}>24/7 Streaming Available After Opening</span>
            </div>
            <div className="video-placeholder">
              <Video size={80} />
              <h3>Live Darshan Coming Soon</h3>
              <p>Experience the divine presence of Lord Venugopal Swamy from your home</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Live streaming will begin after the grand opening in April 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Visitor Guidelines</h2>
            <p>Please follow these guidelines for a peaceful darshan experience</p>
          </motion.div>

          <div className="features-grid">
            {[
              { icon: '👔', title: 'Dress Code', desc: 'Please wear modest, traditional attire. Shorts and sleeveless tops are not permitted.' },
              { icon: '📱', title: 'Photography', desc: 'Photography is allowed in outer areas. Flash photography inside sanctum is prohibited.' },
              { icon: '🥿', title: 'Footwear', desc: 'Please remove footwear before entering the temple premises. Shoe storage is available.' },
              { icon: '🔇', title: 'Silence', desc: 'Maintain silence inside the temple. Please switch off mobile phones or keep them on silent.' },
              { icon: '🚫', title: 'Prohibited Items', desc: 'Leather items, food from outside, and tobacco products are not allowed inside.' },
              { icon: '♿', title: 'Accessibility', desc: 'Wheelchair ramps and assistance available for elderly and differently-abled devotees.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Darshan;
