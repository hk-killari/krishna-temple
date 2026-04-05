import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Video, Image, Building } from 'lucide-react';

import god1 from '../assets/images/god-1.jpeg';
import god2 from '../assets/images/god-2.jpeg';
import god3 from '../assets/images/god-3.jpeg';
import god4 from '../assets/images/god-4.jpeg';
import god5 from '../assets/images/god-5.jpeg';
import god6 from '../assets/images/god-6.jpeg';
import god7 from '../assets/images/god-7.jpeg';
import god8 from '../assets/images/god-8.jpeg';
import god9 from '../assets/images/god-9.jpeg';
import god10 from '../assets/images/god-10.jpeg';
import construction1 from '../assets/images/construction-1.jpeg';
import construction2 from '../assets/images/construction-2.jpeg';
import construction3 from '../assets/images/construction-3.jpeg';
import construction4 from '../assets/images/construction-4.jpeg';
import construction5 from '../assets/images/construction-5.jpeg';
import construction6 from '../assets/images/construction-6.jpeg';

import templeVideo1 from '../videos/temple-video-1.mp4';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    // Deity Images
    { id: 1, category: 'deity', title: 'Sri Venugopal Swamy', emoji: '🙏', image: god1, description: 'Divine darshan of Lord Venugopal Swamy' },
    { id: 2, category: 'deity', title: 'Sri Rukmini Satyabhama Sameta', emoji: '🙏', image: god2, description: 'Lord with Rukmini and Satyabhama Devi' },
    { id: 3, category: 'deity', title: 'Divine Alankaram', emoji: '✨', image: god3, description: 'Beautiful decoration of the deity' },
    { id: 4, category: 'deity', title: 'Special Darshan', emoji: '🪷', image: god4, description: 'Special occasion darshan' },
    { id: 5, category: 'deity', title: 'Festival Decoration', emoji: '🎉', image: god5, description: 'Deity decorated for festival' },
    { id: 6, category: 'deity', title: 'Evening Aarti', emoji: '🪔', image: god6, description: 'Divine evening aarti darshan' },
    { id: 7, category: 'deity', title: 'Abhishekam', emoji: '💧', image: god7, description: 'Sacred abhishekam ceremony' },
    { id: 8, category: 'deity', title: 'Floral Decoration', emoji: '🌸', image: god8, description: 'Beautiful flower alankaram' },
    { id: 9, category: 'deity', title: 'Utsava Murthy', emoji: '🛕', image: god9, description: 'Processional deity' },
    { id: 10, category: 'deity', title: 'Sri Krishna Leela', emoji: '🦚', image: god10, description: 'Divine leela depiction' },
    
    // Construction Images
    { id: 11, category: 'construction', title: 'Temple Foundation', emoji: '🏗️', image: construction1, description: 'Foundation and initial construction work' },
    { id: 12, category: 'construction', title: 'Structure Progress', emoji: '🧱', image: construction2, description: 'Temple structure taking shape' },
    { id: 13, category: 'construction', title: 'Gopuram Work', emoji: '🛕', image: construction3, description: 'Gopuram construction progress' },
    { id: 14, category: 'construction', title: 'Main Hall', emoji: '🏛️', image: construction4, description: 'Main hall construction' },
    { id: 15, category: 'construction', title: 'Finishing Work', emoji: '🔨', image: construction5, description: 'Finishing and detailing work' },
    { id: 16, category: 'construction', title: 'Near Completion', emoji: '✅', image: construction6, description: '90% construction completed' }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Image size={18} /> },
    { id: 'deity', label: 'Deity Darshan', icon: <Camera size={18} /> },
    { id: 'construction', label: 'Construction', icon: <Building size={18} /> }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <>
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Photo & Video Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sanskrit"
        >
          फोटो और वीडियो गैलरी | ఫోటో మరియు వీడియో గ్యాలరీ
        </motion.p>
      </div>

      {/* Category Tabs */}
      <section style={{ 
        background: 'white', 
        padding: '20px 0', 
        position: 'sticky', 
        top: '70px', 
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 25px',
                  border: 'none',
                  borderRadius: '30px',
                  background: activeTab === cat.id 
                    ? 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)' 
                    : '#f5f5f5',
                  color: activeTab === cat.id ? 'white' : '#666',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="gallery-grid"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#0d7377'
                  }}
                >
                  <div className="gallery-overlay">
                    <p>{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section section-dark">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Video Gallery</h2>
            <p>Watch the temple construction journey</p>
          </motion.div>

          {/* Main Temple Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '40px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
            }}
          >
            <video 
              controls 
              width="100%" 
              style={{ 
                display: 'block',
                maxHeight: '500px',
                objectFit: 'cover',
                background: '#000'
              }}
              poster={construction1}
            >
              <source src={templeVideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={{ 
              padding: '25px 30px', 
              background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Video size={24} /> Temple Construction Journey
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                Watch the divine journey of Sri Venugopal Swamy Temple construction - from foundation to near completion. 
                Grand Opening: May 6, 7 & 8, 2026
              </p>
            </div>
          </motion.div>

          {/* Upcoming Videos */}
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginTop: '40px' }}
          >
            <h3 style={{ color: 'white' }}>More Videos Coming Soon</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Stay tuned for more temple videos after grand opening</p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              { title: 'Grand Opening Ceremony', duration: 'Coming May 6-8', emoji: '🎉' },
              { title: 'God Marriage (Kalyanam)', duration: 'Coming May 7', emoji: '💒' },
              { title: 'Annadanam Seva', duration: 'Coming May 6-8', emoji: '🍚' }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '2px dashed rgba(255,255,255,0.3)'
                }}
              >
                <div style={{
                  height: '150px',
                  background: 'linear-gradient(135deg, rgba(13,115,119,0.5) 0%, rgba(20,145,155,0.5) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ fontSize: '3.5rem' }}>{video.emoji}</div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ color: 'white', marginBottom: '5px' }}>{video.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.9rem' }}>
                    <Video size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                    {video.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 360 Tour Section */}
      <section className="section section-light">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Virtual Temple Tour</h2>
            <p>Experience a 360° virtual darshan (Coming Soon)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
              borderRadius: '20px',
              padding: '80px 40px',
              textAlign: 'center',
              color: 'white'
            }}
          >
            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🕉️</div>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>360° Virtual Tour</h3>
            <p style={{ maxWidth: '600px', margin: '0 auto 30px', opacity: 0.9 }}>
              Take a virtual walk through our beautiful temple. Explore every corner 
              from the comfort of your home with our immersive 360° experience.
            </p>
            <button 
              className="btn btn-primary"
              style={{ opacity: 0.8, cursor: 'not-allowed' }}
              disabled
            >
              Coming After Grand Opening
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.95)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              <X size={30} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              style={{
                position: 'absolute',
                left: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={30} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#1a1a1a',
                borderRadius: '20px',
                width: '90%',
                maxWidth: '900px',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                width: '100%', 
                aspectRatio: '16/10',
                backgroundImage: `url(${selectedImage.image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#000'
              }} />
              <div style={{ padding: '20px 30px', background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)' }}>
                <h3 style={{ color: 'white', marginBottom: '5px' }}>{selectedImage.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              style={{
                position: 'absolute',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
