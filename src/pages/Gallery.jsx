import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Video, Image, Building } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    // Deity Images
    { id: 1, category: 'deity', title: 'Sri Venugopal Swamy', emoji: '🙏', image: '/images/god-1.jpeg', description: 'Divine darshan of Lord Venugopal Swamy' },
    { id: 2, category: 'deity', title: 'Sri Rukmini Satyabhama Sameta', emoji: '🙏', image: '/images/god-2.jpeg', description: 'Lord with Rukmini and Satyabhama Devi' },
    { id: 3, category: 'deity', title: 'Divine Alankaram', emoji: '✨', image: '/images/god-3.jpeg', description: 'Beautiful decoration of the deity' },
    { id: 4, category: 'deity', title: 'Special Darshan', emoji: '🪷', image: '/images/god-4.jpeg', description: 'Special occasion darshan' },
    { id: 5, category: 'deity', title: 'Festival Decoration', emoji: '🎉', image: '/images/god-5.jpeg', description: 'Deity decorated for festival' },
    { id: 6, category: 'deity', title: 'Evening Aarti', emoji: '🪔', image: '/images/god-6.jpeg', description: 'Divine evening aarti darshan' },
    { id: 7, category: 'deity', title: 'Abhishekam', emoji: '💧', image: '/images/god-7.jpeg', description: 'Sacred abhishekam ceremony' },
    { id: 8, category: 'deity', title: 'Floral Decoration', emoji: '🌸', image: '/images/god-8.jpeg', description: 'Beautiful flower alankaram' },
    { id: 9, category: 'deity', title: 'Utsava Murthy', emoji: '🛕', image: '/images/god-9.jpeg', description: 'Processional deity' },
    { id: 10, category: 'deity', title: 'Sri Krishna Leela', emoji: '🦚', image: '/images/god-10.jpeg', description: 'Divine leela depiction' },
    
    // Construction Images
    { id: 11, category: 'construction', title: 'Temple Foundation', emoji: '🏗️', image: '/images/construction-1.jpeg', description: 'Foundation and initial construction work' },
    { id: 12, category: 'construction', title: 'Structure Progress', emoji: '🧱', image: '/images/construction-2.jpeg', description: 'Temple structure taking shape' },
    { id: 13, category: 'construction', title: 'Gopuram Work', emoji: '🛕', image: '/images/construction-3.jpeg', description: 'Gopuram construction progress' },
    { id: 14, category: 'construction', title: 'Main Hall', emoji: '🏛️', image: '/images/construction-4.jpeg', description: 'Main hall construction' },
    { id: 15, category: 'construction', title: 'Finishing Work', emoji: '🔨', image: '/images/construction-5.jpeg', description: 'Finishing and detailing work' },
    { id: 16, category: 'construction', title: 'Near Completion', emoji: '✅', image: '/images/construction-6.jpeg', description: '90% construction completed' }
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
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="gallery-placeholder" style={{ display: 'none' }}>
                    {item.emoji}
                  </div>
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {[
              { title: 'Temple Construction Timelapse', duration: '5:30', emoji: '🎬' },
              { title: 'Bhoomi Puja Ceremony', duration: '12:45', emoji: '🔥' },
              { title: 'Artisans at Work', duration: '8:20', emoji: '🎨' },
              { title: 'Deity Installation Highlights', duration: '15:00', emoji: '🙏' }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ fontSize: '4rem' }}>{video.emoji}</div>
                  <div style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                  }}>
                    <div style={{
                      width: 0,
                      height: 0,
                      borderTop: '12px solid transparent',
                      borderBottom: '12px solid transparent',
                      borderLeft: '20px solid #0d7377',
                      marginLeft: '5px'
                    }} />
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ color: '#0d7377', marginBottom: '5px' }}>{video.title}</h4>
                  <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                    <Video size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                    Duration: {video.duration}
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
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{ 
                  display: 'none',
                  width: '100%', 
                  height: '100%', 
                  background: 'linear-gradient(135deg, #0d7377 0%, #14919b 100%)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8rem',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}>
                  {selectedImage.emoji}
                </div>
              </div>
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
