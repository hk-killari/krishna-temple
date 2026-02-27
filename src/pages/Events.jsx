import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3, 1));

  const upcomingEvents = [
    {
      date: '15',
      month: 'Apr',
      year: '2026',
      title: 'Grand Temple Opening',
      description: 'The most awaited moment! Grand inauguration ceremony with special pujas, cultural programs, and prasadam distribution.',
      time: '6:00 AM onwards',
      location: 'Main Temple Complex',
      emoji: '🎉'
    },
    {
      date: '16',
      month: 'Apr',
      year: '2026',
      title: 'Maha Abhishekam',
      description: 'Grand abhishekam ceremony with 108 sacred items. All devotees are invited to participate.',
      time: '7:00 AM - 10:00 AM',
      location: 'Main Sanctum',
      emoji: '🙏'
    },
    {
      date: '21',
      month: 'Apr',
      year: '2026',
      title: 'Ram Navami Celebrations',
      description: 'Celebrating the divine birth of Lord Rama with special pujas and bhajans.',
      time: 'Full Day',
      location: 'Temple Premises',
      emoji: '🏹'
    },
    {
      date: '10',
      month: 'May',
      year: '2026',
      title: 'Akshaya Tritiya',
      description: 'Auspicious day for new beginnings. Special golden hour darshan and prasadam.',
      time: '5:00 AM - 9:00 PM',
      location: 'Main Temple',
      emoji: '✨'
    },
    {
      date: '26',
      month: 'Jun',
      year: '2026',
      title: 'Rath Yatra',
      description: 'Grand chariot procession through the city with Lord Krishna\'s beautiful deities.',
      time: '4:00 PM - 8:00 PM',
      location: 'City Procession',
      emoji: '🛕'
    },
    {
      date: '15',
      month: 'Aug',
      year: '2026',
      title: 'Janmashtami',
      description: 'The most important festival - Lord Krishna\'s birthday celebrations with midnight aarti.',
      time: 'Full Day & Night',
      location: 'Entire Temple Complex',
      emoji: '🎂'
    }
  ];

  const majorFestivals = [
    {
      name: 'Janmashtami',
      description: 'The divine birth celebration of Lord Krishna with 24-hour festivities, bhajans, dance dramas depicting Krishna\'s leelas, and midnight celebrations.',
      month: 'August',
      emoji: '🎂',
      highlights: ['Midnight Aarti', 'Dahi Handi', 'Krishna Leela Drama', 'Maha Abhishekam']
    },
    {
      name: 'Holi',
      description: 'Festival of colors celebrating the divine love of Radha and Krishna. Join us for organic colors, music, dance, and traditional Holi celebrations.',
      month: 'March',
      emoji: '🎨',
      highlights: ['Holika Dahan', 'Rang Panchami', 'Folk Songs', 'Thandai Distribution']
    },
    {
      name: 'Diwali',
      description: 'Festival of lights commemorating Lord Krishna\'s victory over Narakasura. Temple illuminated with thousands of lamps.',
      month: 'October/November',
      emoji: '🪔',
      highlights: ['Lakshmi Puja', 'Govardhan Puja', 'Annakoot', 'Fireworks']
    },
    {
      name: 'Ekadashi Vrat',
      description: 'Sacred fasting days observed twice a month. Special bhajans, kirtans, and sattvic prasadam for devotees.',
      month: 'Twice Monthly',
      emoji: '🙏',
      highlights: ['Night Vigil', 'Bhajan Sandhya', 'Spiritual Discourse', 'Special Prasadam']
    },
    {
      name: 'Rath Yatra',
      description: 'Grand chariot festival where Lord Jagannath, Balabhadra, and Subhadra are taken in procession through the city.',
      month: 'June/July',
      emoji: '🛕',
      highlights: ['Chariot Procession', 'Chhera Pahara', 'Mahaprasad', 'Cultural Programs']
    },
    {
      name: 'Radha Ashtami',
      description: 'Celebrating the appearance day of Srimati Radharani, the eternal consort of Lord Krishna.',
      month: 'September',
      emoji: '🌸',
      highlights: ['Special Shringar', 'Raas Leela', 'Flower Offerings', 'Kirtan']
    }
  ];

  const weeklyEvents = [
    { day: 'Monday', event: 'Rudrabhishekam & Shiva Puja', time: '7:00 AM' },
    { day: 'Tuesday', event: 'Hanuman Chalisa Path', time: '7:00 PM' },
    { day: 'Wednesday', event: 'Vishnu Sahasranama', time: '6:00 AM' },
    { day: 'Thursday', event: 'Guru Vandana & Satsang', time: '6:00 PM' },
    { day: 'Friday', event: 'Lakshmi Puja', time: '7:00 PM' },
    { day: 'Saturday', event: 'Shani Puja & Abhishekam', time: '6:00 AM' },
    { day: 'Sunday', event: 'Sundarkand Path', time: '5:00 PM' }
  ];

  const formatMonth = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const changeMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  return (
    <>
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Events & Festivals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sanskrit"
        >
          उत्सव और त्योहार | పండుగలు మరియు ఉత్సవాలు
        </motion.p>
      </div>

      {/* Upcoming Events */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Upcoming Events</h2>
            <p>Mark your calendars for these divine celebrations</p>
          </motion.div>

          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="event-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="event-image">
                  {event.emoji}
                  <div className="event-date">
                    <span>{event.date}</span>
                    <p>{event.month}</p>
                  </div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-meta">
                    <span><Clock size={14} /> {event.time}</span>
                    <span><MapPin size={14} /> {event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Events Calendar</h2>
            <p>Browse events by month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '30px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px'
            }}>
              <button
                onClick={() => changeMonth(-1)}
                style={{
                  background: 'none',
                  border: '2px solid #0d7377',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0d7377'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <h3 style={{ color: '#0d7377', margin: 0 }}>{formatMonth(currentMonth)}</h3>
              <button
                onClick={() => changeMonth(1)}
                style={{
                  background: 'none',
                  border: '2px solid #0d7377',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0d7377'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '10px',
              textAlign: 'center'
            }}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} style={{ fontWeight: '600', color: '#0d7377', padding: '10px' }}>
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const date = i - new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() + 1;
                const isCurrentMonth = date > 0 && date <= new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
                const hasEvent = upcomingEvents.some(e => 
                  parseInt(e.date) === date && 
                  e.month === currentMonth.toLocaleDateString('en-US', { month: 'short' })
                );
                
                return (
                  <div
                    key={i}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      background: hasEvent ? 'linear-gradient(135deg, #d4a84b 0%, #f4d03f 100%)' : 'transparent',
                      color: isCurrentMonth ? (hasEvent ? '#000' : '#333') : '#ccc',
                      fontWeight: hasEvent ? '600' : '400',
                      cursor: hasEvent ? 'pointer' : 'default'
                    }}
                  >
                    {isCurrentMonth ? date : ''}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Festivals */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Major Festivals</h2>
            <p>Grand celebrations throughout the year</p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {majorFestivals.map((festival, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
                  padding: '30px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '10px' }}>{festival.emoji}</div>
                  <h3 style={{ color: 'white', marginBottom: '5px' }}>{festival.name}</h3>
                  <span style={{ 
                    background: '#d4a84b', 
                    color: '#000', 
                    padding: '5px 15px', 
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {festival.month}
                  </span>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{ color: '#666', marginBottom: '20px' }}>{festival.description}</p>
                  <h4 style={{ color: '#0d7377', marginBottom: '15px', fontSize: '1rem' }}>Highlights:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {festival.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        style={{
                          background: '#fdf8f0',
                          color: '#0d7377',
                          padding: '6px 14px',
                          borderRadius: '15px',
                          fontSize: '0.85rem',
                          border: '1px solid rgba(13, 115, 119, 0.2)'
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Weekly Schedule</h2>
            <p>Regular events and pujas every week</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            {weeklyEvents.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 30px',
                  borderBottom: index < weeklyEvents.length - 1 ? '1px solid #eee' : 'none'
                }}
              >
                <div>
                  <h4 style={{ color: '#0d7377', marginBottom: '5px' }}>{item.day}</h4>
                  <p style={{ color: '#666', margin: 0, fontSize: '0.95rem' }}>{item.event}</p>
                </div>
                <span style={{
                  background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
                  color: 'white',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {item.time}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;
