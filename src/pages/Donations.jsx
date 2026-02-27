import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Building, Users, Utensils, Flower2, BookOpen, Lamp, Check } from 'lucide-react';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    panNumber: '',
    purpose: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const donationAmounts = ['₹501', '₹1,001', '₹2,501', '₹5,001', '₹11,001', '₹25,001'];

  const sevaOptions = [
    {
      icon: <Building size={28} />,
      title: 'Temple Development',
      description: 'Contribute to the construction and beautification of the temple complex.',
      amount: 'Any Amount',
      color: '#0d7377'
    },
    {
      icon: <Utensils size={28} />,
      title: 'Annadan Seva',
      description: 'Sponsor daily prasadam for devotees. Feed 100+ people with your donation.',
      amount: '₹5,001',
      color: '#d4a84b'
    },
    {
      icon: <Lamp size={28} />,
      title: 'Deepa Seva',
      description: 'Light perpetual lamps in the temple in your family name.',
      amount: '₹1,001',
      color: '#ff6f00'
    },
    {
      icon: <Flower2 size={28} />,
      title: 'Pushpa Seva',
      description: 'Sponsor daily flower decorations for the deity.',
      amount: '₹2,501',
      color: '#e91e63'
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Gita Distribution',
      description: 'Sponsor Bhagavad Gita books for free distribution.',
      amount: '₹501 per copy',
      color: '#9c27b0'
    },
    {
      icon: <Users size={28} />,
      title: 'Sponsor an Event',
      description: 'Sponsor a complete festival or special puja event.',
      amount: '₹25,001+',
      color: '#2196f3'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Donations & Seva
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sanskrit"
        >
          दान और सेवा | దానం మరియు సేవ
        </motion.p>
      </div>

      {/* Introduction */}
      <section className="section section-light">
        <div className="container">
          <div className="donation-container">
            <motion.div 
              className="donation-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Support the Divine Cause</h2>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#0d7377', marginBottom: '20px' }}>
                "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे।<br />
                देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥"
              </p>
              <p>
                Your generous contribution helps us complete the temple construction, 
                maintain daily worship, and serve thousands of devotees with prasadam. 
                Every donation, regardless of size, is a sacred offering to Lord Venugopal Swamy.
              </p>
              <p>
                All donations are eligible for <strong>80G tax exemption</strong> under 
                the Income Tax Act. You will receive a receipt and certificate for your contribution.
              </p>

              <div style={{ 
                background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
                padding: '25px',
                borderRadius: '15px',
                marginTop: '30px',
                color: 'white'
              }}>
                <h4 style={{ marginBottom: '15px', color: 'white' }}>Temple Development Progress</h4>
                <div style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  borderRadius: '10px', 
                  height: '20px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '90%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #d4a84b, #f4d03f)',
                    borderRadius: '10px',
                    transition: 'width 1s ease'
                  }} />
                </div>
                <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>
                  <strong>90% Complete</strong> - ₹8.5 Crores raised of ₹10 Crores goal
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="donation-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                  <h3 style={{ color: '#25d366', marginBottom: '15px' }}>Thank You!</h3>
                  <p style={{ color: '#666' }}>
                    Your donation request has been received. Our team will contact you 
                    shortly with payment details. May Lord Krishna bless you abundantly!
                  </p>
                  <p className="sanskrit" style={{ marginTop: '20px', color: '#d4a84b' }}>
                    हरे कृष्ण 🙏
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Make a Donation</h3>
                  
                  <div className="amount-options">
                    {donationAmounts.map(amount => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                        onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  <div className="form-group">
                    <label>Or enter custom amount</label>
                    <input
                      type="text"
                      placeholder="₹ Enter amount"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(''); }}
                    />
                  </div>

                  <div className="form-group">
                    <label>Full Name *</label>
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
                      <label>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>PAN Number (for 80G certificate)</label>
                    <input
                      type="text"
                      name="panNumber"
                      placeholder="ABCDE1234F"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Purpose of Donation</label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                    >
                      <option value="general">General Donation</option>
                      <option value="construction">Temple Construction</option>
                      <option value="annadan">Annadan Seva</option>
                      <option value="puja">Special Puja</option>
                      <option value="festival">Festival Sponsorship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message (Optional)</label>
                    <textarea
                      name="message"
                      placeholder="Any special requests or dedications..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <Heart size={20} style={{ marginRight: '10px' }} />
                    Proceed to Donate
                  </button>

                  <p style={{ 
                    marginTop: '15px', 
                    fontSize: '0.85rem', 
                    color: '#666',
                    textAlign: 'center'
                  }}>
                    🔒 Your information is secure and will be used only for donation purposes.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seva Options */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Seva Opportunities</h2>
            <p>Choose a seva that resonates with your heart</p>
          </motion.div>

          <div className="features-grid">
            {sevaOptions.map((seva, index) => (
              <motion.div
                key={index}
                className="seva-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ borderColor: seva.color, transform: 'translateY(-5px)' }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: `linear-gradient(135deg, ${seva.color} 0%, ${seva.color}cc 100%)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '20px'
                }}>
                  {seva.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{seva.title}</h3>
                <p style={{ color: '#666', marginBottom: '15px' }}>{seva.description}</p>
                <span style={{
                  background: `${seva.color}20`,
                  color: seva.color,
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  {seva.amount}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Bank Transfer Details</h2>
            <p>Donate directly via bank transfer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '600px',
              margin: '0 auto',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <p style={{ color: '#666', marginBottom: '5px' }}>Account Name</p>
              <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>Sri Venugopal Swamy Temple Trust</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ color: '#666', marginBottom: '5px' }}>Account Number</p>
              <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>1234567890123456</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ color: '#666', marginBottom: '5px' }}>IFSC Code</p>
              <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>SBIN0001234</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ color: '#666', marginBottom: '5px' }}>Bank & Branch</p>
              <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>State Bank of India, Hyderabad Main Branch</p>
            </div>
            <div style={{
              background: '#fdf8f0',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #d4a84b'
            }}>
              <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>
                <strong>Note:</strong> After making a bank transfer, please WhatsApp your 
                transaction details to +91 98765 43210 or email to donations@srikrishnatemple.org 
                for receipt and 80G certificate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Donor Recognition</h2>
            <p>Honor roll of our generous donors</p>
          </motion.div>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {[
              { tier: 'Platinum Donors', amount: '₹10 Lakh+', count: '25+', color: '#e5e4e2' },
              { tier: 'Gold Donors', amount: '₹5 Lakh+', count: '100+', color: '#d4a84b' },
              { tier: 'Silver Donors', amount: '₹1 Lakh+', count: '500+', color: '#c0c0c0' },
              { tier: 'Bronze Donors', amount: '₹25,000+', count: '2000+', color: '#cd7f32' }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '30px',
                  textAlign: 'center',
                  border: `3px solid ${tier.color}`
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: tier.color,
                  borderRadius: '50%',
                  margin: '0 auto 15px'
                }} />
                <h4 style={{ color: '#0d7377', marginBottom: '5px' }}>{tier.tier}</h4>
                <p style={{ color: '#666', marginBottom: '10px' }}>{tier.amount}</p>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0d7377'
                }}>
                  {tier.count}
                </span>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Donors</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginTop: '40px',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
              margin: '40px auto 0'
            }}
          >
            Major donors will have their names inscribed on the temple's donor wall. 
            Your contribution will be remembered for generations.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Donations;
