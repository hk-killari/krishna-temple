import { motion } from 'framer-motion';
import { Heart, Star, Users, Award, BookOpen, Target, Eye } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2022', title: 'Vision Born', description: 'The idea of building a grand Krishna temple was conceived by devoted community members.' },
    { year: '2023', title: 'Foundation Laid', description: 'Bhoomi Puja performed and construction commenced with traditional vedic rituals.' },
    { year: '2024', title: 'Structure Completed', description: 'Main temple structure, gopuram, and mandapam construction finished.' },
    { year: '2025', title: 'Interior Work', description: 'Intricate carvings, deity installation, and interior decoration began.' },
    { year: '2026', title: 'Grand Opening', description: '90% complete, preparing for the grand inauguration in April 2026.' },
  ];

  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Bhakti (Devotion)',
      description: 'Pure devotional service to Lord Krishna is the foundation of all our activities.'
    },
    {
      icon: <Users size={32} />,
      title: 'Seva (Service)',
      description: 'Selfless service to devotees, community, and humanity as worship to the Lord.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Jnana (Knowledge)',
      description: 'Spreading the eternal wisdom of Bhagavad Gita and Srimad Bhagavatam.'
    },
    {
      icon: <Star size={32} />,
      title: 'Sanskriti (Culture)',
      description: 'Preserving and promoting ancient Vedic traditions and cultural heritage.'
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
          About Our Temple
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sanskrit"
        >
          मंदिर का इतिहास और उद्देश्य
        </motion.p>
      </div>

      {/* Temple Story Section */}
      <section className="section section-light">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                width: '100%',
                height: '450px',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                backgroundImage: 'url(/images/god-2.jpeg)',
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
              <h2>The Divine Vision</h2>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#0d7377' }}>
                "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।<br />
                अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥"
              </p>
              <p>
                శ్రీ రుక్మిణీ సత్యభామ సమేత వేణుగోపాల స్వామి దేవస్థానం stands as a testament to the 
                unwavering faith and dedication of thousands of devotees who dreamed of creating 
                a divine abode for Lord Venugopal Swamy with His divine consorts Rukmini and Satyabhama.
              </p>
              <p>
                The temple is designed in the traditional South Indian Dravidian style, 
                featuring a magnificent Rajagopuram (main tower) adorned with intricate 
                sculptures depicting the divine pastimes of Lord Krishna - from His childhood 
                in Vrindavan to the profound teachings of the Bhagavad Gita.
              </p>
              <p>
                Our mission is to provide a sacred space where devotees from all walks of life 
                can experience the divine presence of Lord Venugopal Swamy, learn the eternal truths of 
                the Vedic scriptures, and transform their lives through bhakti yoga.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ padding: '50px 40px' }}
            >
              <div className="feature-icon"><Eye size={32} /></div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                To establish a world-class spiritual center that serves as a beacon of 
                Krishna consciousness, attracting devotees from across the globe and 
                inspiring future generations to embrace the path of devotion and righteousness.
              </p>
            </motion.div>
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ padding: '50px 40px' }}
            >
              <div className="feature-icon"><Target size={32} /></div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                To spread the message of Bhagavad Gita, conduct authentic Vedic rituals, 
                provide spiritual education, serve prasadam to thousands daily, and create 
                a community united in the love of Lord Krishna.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Construction Journey */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Journey</h2>
            <p>The story of dedication, devotion, and divine grace</p>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '30px',
                  marginBottom: '40px',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  minWidth: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #d4a84b 0%, #f4d03f 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  color: '#000',
                  boxShadow: '0 5px 20px rgba(212, 168, 75, 0.3)'
                }}>
                  {milestone.year}
                </div>
                <div style={{
                  background: 'white',
                  padding: '25px 30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  flex: 1
                }}>
                  <h4 style={{ color: '#0d7377', marginBottom: '10px', fontSize: '1.2rem' }}>
                    {milestone.title}
                  </h4>
                  <p style={{ color: '#666', margin: 0 }}>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Core Values</h2>
            <p>The principles that guide our every action</p>
          </motion.div>

          <div className="features-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Architecture */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Temple Architecture</h2>
            <p>A masterpiece of traditional craftsmanship</p>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ marginBottom: '20px' }}>Dravidian Splendor</h3>
              <p>
                The temple showcases the magnificent Dravidian architectural style, 
                characterized by its towering Gopuram (gateway tower) rising to 65 feet, 
                adorned with thousands of colorful sculptures of deities and mythological figures.
              </p>
              <p>
                The main sanctum (Garbhagriha) houses the beautifully crafted deity of 
                Lord Krishna in His eternal form, made from sacred black granite and adorned 
                with precious ornaments.
              </p>
              <ul style={{ color: '#666', marginTop: '20px' }}>
                <li style={{ marginBottom: '10px' }}>🏛️ 65-foot Rajagopuram with intricate carvings</li>
                <li style={{ marginBottom: '10px' }}>🙏 Separate shrines for Radha Rani and Rukmini Devi</li>
                <li style={{ marginBottom: '10px' }}>📖 Spacious mandapam for 500+ devotees</li>
                <li style={{ marginBottom: '10px' }}>🌺 Traditional Tulsi garden and sacred pond</li>
                <li style={{ marginBottom: '10px' }}>🎵 Open-air amphitheater for cultural programs</li>
              </ul>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                backgroundImage: 'url(/images/construction-1.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#0d7377'
              }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section section-dark">
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {[
              { number: '50,000+', label: 'Sq. Ft. Area' },
              { number: '65', label: 'Feet Gopuram' },
              { number: '5,000+', label: 'Devotee Donors' },
              { number: '100+', label: 'Skilled Artisans' },
              { number: '3', label: 'Years of Work' },
              { number: '1000+', label: 'Deity Sculptures' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ padding: '30px 20px' }}
              >
                <h3 style={{ fontSize: '2.5rem', color: '#d4a84b', marginBottom: '10px' }}>
                  {stat.number}
                </h3>
                <p style={{ margin: 0, fontWeight: '500' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
