import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '917330690367';
  const message = encodeURIComponent('Hare Krishna! I would like to know more about Sri Venugopal Swamy Temple, Thalvaipadu.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
