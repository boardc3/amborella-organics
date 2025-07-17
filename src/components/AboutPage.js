import React from 'react';
import SharedBackground from './SharedBackground';

// Hero Section Component  
const AboutHero = () => (
  <div className="about-hero">
    <div className="about-hero-content">
      <h1>The Sweet Science of Growing</h1>
      <p className="hero-subtitle">
        From a Laguna Beach kitchen experiment to Oprah's Favorite Things—discover the story behind the world's first seed-bearing lollipops.
      </p>
    </div>
  </div>
);

// Story Section Component
const StorySection = () => (
  <section className="story-section">
    <div className="story-container">
      <div className="story-content">
        <h2>Our Story Began with a Simple Question</h2>
        <p className="story-lead">
          "What if candy could give back to the planet?"
        </p>
        
        <div className="story-text">
          <p>
            Three years ago, in a small Laguna Beach kitchen, our founder embarked on what seemed like an impossible mission: embedding living seeds into candy without destroying their ability to grow. After countless failed attempts and a very patient partner who endured months of burnt sugar experiments, we achieved our first breakthrough.
          </p>
          
          <p>
            What started as curiosity became a revolution. We weren't just making candy—we were creating a new category of confectionery that could literally bloom into something beautiful.
          </p>
        </div>
        
        <div className="story-highlights">
          <div className="highlight-item">
            <div className="highlight-icon">🏠</div>
            <h3>Kitchen Innovation</h3>
            <p>Born in Laguna Beach, California from pure curiosity and determination</p>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">🔬</div>
            <h3>Scientific Breakthrough</h3>
            <p>Patented low-temperature process preserves seed viability in candy</p>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">🌍</div>
            <h3>Global Impact</h3>
            <p>Millions of gardens blooming worldwide, one lollipop at a time</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Recognition Section
const RecognitionSection = () => (
  <section className="recognition-section">
    <div className="recognition-container">
      <h2>Recognition & Media</h2>
      <p className="section-subtitle">
        Our innovation has captured the attention of media giants and sustainability advocates worldwide.
      </p>
      
      <div className="recognition-grid">
        <div className="recognition-item oprah">
          <div className="recognition-logo">⭐</div>
          <h3>Oprah's Favorite Things</h3>
          <p>
            "Sure, these delightful lollipops, which come in a variety of creative flavor combinations will satisfy any sugar craving. But the real reason we think they're pretty sweet? The biodegradable sticks are embedded with sage, lavender, and marigold, so they're designed to be planted."
          </p>
          <span className="recognition-impact">Featured to millions of viewers</span>
        </div>
        
        <div className="recognition-item forbes">
          <div className="recognition-logo">📰</div>
          <h3>Forbes Innovation</h3>
          <p>
            "Not surprisingly, Amborella was recently selected as a finalist for the ConsiderBeyond sustainability awards. The eco-conscious brand was also recently handpicked by Reese Witherspoon for her book club."
          </p>
          <span className="recognition-impact">Sustainability Award Finalist</span>
        </div>
        
        <div className="recognition-item nowthis">
          <div className="recognition-logo">📱</div>
          <h3>NowThis News Viral</h3>
          <p>
            Our story reached 9.9 million viewers, proving that people are hungry for products that don't just taste good but do good for the planet.
          </p>
          <span className="recognition-impact">9.9 Million Views</span>
        </div>
        
        <div className="recognition-item reese">
          <div className="recognition-logo">📚</div>
          <h3>Reese's Book Club</h3>
          <p>
            Handpicked by Reese Witherspoon, our lollipops represent the intersection of sustainability, innovation, and pure joy.
          </p>
          <span className="recognition-impact">Celebrity Endorsement</span>
        </div>
      </div>
    </div>
  </section>
);

// Science Section
const ScienceSection = () => (
  <section className="science-section">
    <div className="science-container">
      <div className="science-content">
        <h2>The Science Behind the Magic</h2>
        <p className="science-intro">
          Creating the world's first seed-bearing lollipop required breakthrough innovation in both confectionery science and agricultural technology.
        </p>
        
        <div className="science-process">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Seed Protection</h3>
              <p>Each seed is coated with a biodegradable protective layer that shields it from moisture and temperature fluctuations during candy production.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-content">
              <h3>Low-Temperature Processing</h3>
              <p>Our proprietary method embeds seeds at temperatures that preserve their viability—a breakthrough that took years to perfect.</p>
            </div>
            <div className="step-number">2</div>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Biodegradable Stick Technology</h3>
              <p>Made from compressed organic plant fibers, our sticks break down in soil within 30-60 days, releasing seeds at the optimal time for germination.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-content">
              <h3>Quality Assurance</h3>
              <p>Every batch undergoes rigorous testing to ensure both delicious flavor and high seed germination rates.</p>
            </div>
            <div className="step-number">4</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Mission Section
const MissionSection = () => (
  <section className="mission-section">
    <div className="mission-container">
      <h2>Our Mission</h2>
      <div className="mission-content">
        <div className="mission-statement">
          <p>
            We believe that every sweet moment should leave the world a little more beautiful. Our mission is to transform the confectionery industry by creating products that delight the senses while nurturing the planet.
          </p>
        </div>
        
        <div className="mission-values">
          <div className="value">
            <h3>🌱 Sustainability First</h3>
            <p>Every product we create is designed to give back to the environment, not take from it.</p>
          </div>
          
          <div className="value">
            <h3>🔬 Innovation Through Science</h3>
            <p>We push the boundaries of what's possible when food science meets environmental consciousness.</p>
          </div>
          
          <div className="value">
            <h3>🌍 Global Community</h3>
            <p>Building a worldwide network of growers, one lollipop garden at a time.</p>
          </div>
          
          <div className="value">
            <h3>✨ Memories in the Making</h3>
            <p>Creating lasting connections between people and nature through shared growing experiences.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Info Section
const ContactSection = () => (
  <section className="contact-section">
    <div className="contact-container">
      <h2>Based in Beautiful Laguna Beach</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>🏠 Headquarters</h3>
          <p>Laguna Beach, CA 92651<br />United States</p>
        </div>
        
        <div className="contact-info">
          <h3>📞 Phone</h3>
          <p>(949) 306-0620</p>
        </div>
        
        <div className="contact-info">
          <h3>✉️ Email</h3>
          <p>taylor@amborellaorganics.com</p>
        </div>
        
        <div className="contact-info">
          <h3>🌐 Follow Our Journey</h3>
          <p>Facebook • Instagram • Pinterest • LinkedIn</p>
        </div>
      </div>
    </div>
  </section>
);

// Main About Page Component
const AboutPage = () => {
  return (
    <SharedBackground variant="page">
      <div className="about-page">
        <AboutHero />
        <StorySection />
        <RecognitionSection />
        <ScienceSection />
        <MissionSection />
        <ContactSection />
      </div>
    </SharedBackground>
  );
};

export default AboutPage; 