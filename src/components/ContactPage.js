import React, { useState } from 'react';
import SharedBackground from './SharedBackground';

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'wholesale', label: 'Wholesale Orders' },
    { value: 'growing', label: 'Growing Support' },
    { value: 'media', label: 'Press & Media' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'support', label: 'Customer Support' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      }, 3000);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✅</div>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
        <p className="support-note">
          For urgent growing support, call us at <strong>(949) 306-0620</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label>Inquiry Type</label>
        <select
          value={formData.inquiryType}
          onChange={(e) => handleInputChange('inquiryType', e.target.value)}
        >
          {inquiryTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Subject *</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          className={errors.subject ? 'error' : ''}
        />
        {errors.subject && <span className="error-text">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <label>Message *</label>
        <textarea
          rows="6"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={errors.message ? 'error' : ''}
          placeholder="Tell us how we can help you..."
        />
        {errors.message && <span className="error-text">{errors.message}</span>}
      </div>

      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  );
};

// Contact Info Component
const ContactInfo = () => (
  <div className="contact-info">
    <h2>Get in Touch</h2>
    <p className="contact-intro">
      Have questions about our seed-bearing lollipops? Need growing support? 
      Want to explore wholesale opportunities? We'd love to hear from you!
    </p>

    <div className="contact-details">
      <div className="contact-item">
        <div className="contact-icon">🏠</div>
        <div className="contact-content">
          <h3>Headquarters</h3>
          <p>Laguna Beach, CA 92651<br />United States</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">📞</div>
        <div className="contact-content">
          <h3>Phone</h3>
          <p>(949) 306-0620</p>
          <span className="contact-note">Mon-Fri, 9am-5pm PST</span>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">✉️</div>
        <div className="contact-content">
          <h3>Email</h3>
          <p>taylor@amborellaorganics.com</p>
          <span className="contact-note">We respond within 24 hours</span>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">🌐</div>
        <div className="contact-content">
          <h3>Social Media</h3>
          <p>Follow our growing journey</p>
          <div className="social-links">
            <span>Facebook</span> • <span>Instagram</span> • <span>Pinterest</span> • <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// FAQ Component
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I plant my lollipop stick?",
      answer: "After enjoying your lollipop, wait 24-48 hours for the candy to fully dissolve. Then plant the stick horizontally about 1/4 inch deep in quality potting soil. Keep moist and provide 6-8 hours of sunlight daily."
    },
    {
      question: "How long does it take for seeds to germinate?",
      answer: "Germination time varies by plant type, typically ranging from 7-21 days. Herbs like basil and sage germinate faster (7-14 days), while flowers like lavender may take longer (14-21 days). Keep soil consistently moist during this period."
    },
    {
      question: "What if my seeds don't grow?",
      answer: "While we test every batch for high germination rates, growing success depends on many factors including soil quality, watering, and light conditions. If you follow our growing instructions and still have issues, contact us for growing support."
    },
    {
      question: "Do you offer wholesale pricing?",
      answer: "Yes! We offer wholesale pricing for retailers, educational institutions, and bulk buyers. Contact us at taylor@amborellaorganics.com or call (949) 306-0620 to discuss wholesale opportunities."
    },
    {
      question: "Are your lollipops organic?",
      answer: "Yes, all our lollipops are made with USDA organic ingredients. We use organic cane sugar, organic brown rice syrup, and natural flavors. Our seeds are also organic and non-GMO."
    },
    {
      question: "Can I grow these indoors?",
      answer: "Absolutely! Many of our herbs and flowers grow well indoors with proper light. Place pots near a south-facing window or use grow lights to provide 6-8 hours of light daily."
    }
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              {faq.question}
              <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
            </button>
            {openFAQ === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Support Section
const SupportSection = () => (
  <section className="support-section">
    <h2>Need Growing Support?</h2>
    <div className="support-grid">
      <div className="support-item">
        <div className="support-icon">📚</div>
        <h3>Growing Guides</h3>
        <p>Comprehensive step-by-step instructions for each variety</p>
        <button className="support-link">View Guides</button>
      </div>
      
      <div className="support-item">
        <div className="support-icon">💬</div>
        <h3>Community Forum</h3>
        <p>Connect with other growers and share your success stories</p>
        <button className="support-link">Join Community</button>
      </div>
      
      <div className="support-item">
        <div className="support-icon">📹</div>
        <h3>Video Tutorials</h3>
        <p>Watch our detailed planting and care video series</p>
        <button className="support-link">Watch Videos</button>
      </div>
      
      <div className="support-item">
        <div className="support-icon">📞</div>
        <h3>Direct Support</h3>
        <p>Call our growing experts for personalized help</p>
        <button className="support-link">Call Now</button>
      </div>
    </div>
  </section>
);

// Main Contact Page Component
const ContactPage = () => {
  return (
    <SharedBackground variant="page">
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Amborella Organics</h1>
          <p className="contact-subtitle">
            We're here to help you grow! Whether you need support, have questions, 
            or want to explore partnerships, let's start a conversation.
          </p>
        </div>

        <div className="contact-main">
          <div className="contact-form-section">
            <ContactForm />
          </div>
          
          <div className="contact-info-section">
            <ContactInfo />
          </div>
        </div>

        <FAQ />
        <SupportSection />

        <div className="contact-footer">
          <div className="shipping-note">
            <h3>📦 Shipping Information</h3>
            <p>
              <strong>Free shipping</strong> on orders of 48+ items or $100+<br />
              <strong>UPS Next Day Air</strong> is our only money-back guaranteed service<br />
              <strong>Processing time:</strong> 1-2 business days
            </p>
          </div>
        </div>
      </div>
    </SharedBackground>
  );
};

export default ContactPage; 