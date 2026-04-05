import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check, MessageCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Temple Address',
      details: [
        'శ్రీ రుక్మిణీ సత్యభామ సమేత వేణుగోపాల స్వామి దేవస్థానం',
        'Thalvaipadu Village, Pellakuru Mandal',
        'Tirupati District, Andhra Pradesh',
        'Pin Code: 524126, India'
      ]
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone Numbers',
      details: [
        '+91 73306 90367 (Main)',
        'WhatsApp: +91 73306 90367'
      ]
    },
    {
      icon: <Mail size={28} />,
      title: 'Email Addresses',
      details: [
        'info@srivenugopalswamy.org',
        'donations@srivenugopalswamy.org'
      ]
    },
    {
      icon: <Clock size={28} />,
      title: 'Office Hours',
      details: [
        'Monday - Saturday: 9 AM - 6 PM',
        'Sunday: 10 AM - 2 PM',
        'Temple: 5 AM - 9 PM (All days)'
      ]
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
          Visit Us / Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sanskrit"
        >
          संपर्क करें | సంప్రదించండి
        </motion.p>
      </div>

      {/* Contact Information & Form */}
      <section className="section section-light">
        <div className="container">
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <p>
                We would love to hear from you! Whether you have questions about 
                darshan timings, want to book a puja, or wish to contribute to the 
                temple development, feel free to reach out.
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div>
                      <h4>{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} style={{ marginBottom: '5px' }}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginTop: '40px' }}
              >
                <h4 style={{ marginBottom: '20px', color: '#0d7377' }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {[
                    { icon: <Facebook size={20} />, url: 'https://facebook.com', color: '#1877f2' },
                    { icon: <Instagram size={20} />, url: 'https://instagram.com', color: '#e4405f' },
                    { icon: <Youtube size={20} />, url: 'https://youtube.com', color: '#ff0000' },
                    { icon: <Twitter size={20} />, url: 'https://twitter.com', color: '#1da1f2' },
                    { icon: <MessageCircle size={20} />, url: 'https://wa.me/917330690367', color: '#25d366' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: social.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white'
                  }}>
                    <Check size={40} />
                  </div>
                  <h3 style={{ color: '#25d366', marginBottom: '15px' }}>Message Sent!</h3>
                  <p style={{ color: '#666' }}>
                    Thank you for reaching out. We will get back to you within 24-48 hours. 
                    Hare Krishna! 🙏
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Send us a Message</h3>
                  
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 73306 90367"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="darshan">Darshan Information</option>
                      <option value="puja">Puja Booking</option>
                      <option value="donation">Donation Query</option>
                      <option value="volunteer">Volunteer Registration</option>
                      <option value="feedback">Feedback / Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send size={20} style={{ marginRight: '10px' }} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Find Us on Map</h2>
            <p>Located in Thalvaipadu Village, near Tirupati - the sacred temple town</p>
          </motion.div>

          <motion.div
            className="map-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124419.97715073!2d79.35!3d13.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d5c3e1e3a0a0f%3A0x4e3a0a0a0a0a0a0a!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Temple Location - Near Tirupati, Andhra Pradesh"
            />
          </motion.div>
        </div>
      </section>

      {/* Directions */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>How to Reach Us</h2>
            <p>Conveniently located near Tirupati and other sacred places</p>
          </motion.div>

          <div className="features-grid">
            {[
              {
                icon: '🚗',
                title: 'By Car',
                description: 'Ample parking available. Easy access via Tirupati-Chennai highway. Take the Pellakuru turn to reach Thalvaipadu village.'
              },
              {
                icon: '🚌',
                title: 'By Bus',
                description: 'APSRTC buses available from Tirupati to Pellakuru. From Pellakuru, local transport to Thalvaipadu (3 km).'
              },
              {
                icon: '🛕',
                title: 'From Tirumala (TTD)',
                description: 'Our temple is just 60 KMs from the famous Tirumala Tirupati Devasthanam. Easy road connectivity.'
              },
              {
                icon: '✈️',
                title: 'From Airport',
                description: 'Tirupati Airport (Renigunta) is approximately 30 km away. Cabs and taxis readily available.'
              },
              {
                icon: '🚂',
                title: 'From Railway Station',
                description: 'Tirupati Railway Station is well connected to all major cities. Auto/cab available to the temple (approx. 40 km).'
              },
              {
                icon: '🛺',
                title: 'Local Transport',
                description: 'Auto-rickshaws and cabs available. Ask for "Venugopal Swamy Temple, Thalvaipadu Village, Pellakuru Mandal".'
              }
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
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Nearby Landmarks</h2>
            <p>Points of reference to help you find us</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {[
              { name: 'Srikalahasti Temple', distance: '25 km' },
              { name: 'Tirumala Tirupati Devasthanam (TTD)', distance: '60 km' },
              { name: 'Tirupati City', distance: '40 km' },
              { name: 'Tirupati Railway Station', distance: '40 km' },
              { name: 'Tirupati Airport (Renigunta)', distance: '30 km' },
              { name: 'Pellakuru Town', distance: '3 km' }
            ].map((landmark, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: index < 5 ? '1px solid #eee' : 'none'
                }}
              >
                <span style={{ fontWeight: '500', color: '#333' }}>
                  <MapPin size={16} style={{ marginRight: '10px', color: '#0d7377' }} />
                  {landmark.name}
                </span>
                <span style={{
                  background: '#fdf8f0',
                  color: '#0d7377',
                  padding: '5px 15px',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {landmark.distance}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section section-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '20px' }}>Need Immediate Assistance?</h2>
            <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto 30px' }}>
              Call us directly or send a WhatsApp message for quick responses.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:+917330690367"
                className="btn btn-primary"
              >
                <Phone size={20} /> Call Now
              </a>
              <a
                href="https://wa.me/917330690367"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#25d366',
                  color: 'white',
                  padding: '14px 35px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
