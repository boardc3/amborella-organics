import React, { useState } from 'react';
import SharedBackground from './SharedBackground';

// Hero Section
const GrowHero = () => (
  <div className="grow-hero">
    <div className="grow-hero-content">
      <h1>Your Complete Growing Guide</h1>
      <p className="hero-subtitle">
        Transform your lollipop sticks into beautiful herbs and flowers with our comprehensive planting and care guide.
      </p>
    </div>
  </div>
);

// Quick Start Guide
const QuickStart = () => (
  <section className="quick-start">
    <div className="quick-start-container">
      <h2>🚀 Quick Start: 4 Simple Steps</h2>
      <div className="quick-steps">
        <div className="quick-step">
          <div className="step-icon">🍭</div>
          <h3>1. Enjoy</h3>
          <p>Savor your delicious lollipop! Wait 24-48 hours after finishing to ensure all candy residue dissolves.</p>
        </div>
        
        <div className="quick-step">
          <div className="step-icon">🌱</div>
          <h3>2. Plant</h3>
          <p>Plant the stick horizontally, 1/4 inch deep in quality potting soil. The biodegradable stick contains your seeds!</p>
        </div>
        
        <div className="quick-step">
          <div className="step-icon">💧</div>
          <h3>3. Water</h3>
          <p>Keep soil consistently moist but not waterlogged. Mist gently to avoid disturbing the seeds.</p>
        </div>
        
        <div className="quick-step">
          <div className="step-icon">🌿</div>
          <h3>4. Watch Grow</h3>
          <p>Provide 6-8 hours of sunlight daily. Seeds typically germinate in 7-21 days!</p>
        </div>
      </div>
    </div>
  </section>
);

// Detailed Planting Guide
const PlantingGuide = () => {
  const [activeTab, setActiveTab] = useState('supplies');

  const tabs = [
    { id: 'supplies', label: 'Supplies Needed' },
    { id: 'planting', label: 'Planting Process' },
    { id: 'location', label: 'Choosing Location' },
    { id: 'care', label: 'Daily Care' }
  ];

  return (
    <section className="planting-guide">
      <div className="planting-container">
        <h2>📚 Detailed Planting Guide</h2>
        
        <div className="guide-tabs">
          <div className="tab-headers">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-header ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            {activeTab === 'supplies' && (
              <div className="tab-panel">
                <h3>What You'll Need</h3>
                <div className="supplies-grid">
                  <div className="supply-item">
                    <div className="supply-icon">🪴</div>
                    <h4>Containers</h4>
                    <p>Small pots (4-6 inches) with drainage holes, or seed starting trays</p>
                  </div>
                  
                  <div className="supply-item">
                    <div className="supply-icon">🌱</div>
                    <h4>Soil</h4>
                    <p>High-quality organic potting mix or seed starting soil</p>
                  </div>
                  
                  <div className="supply-item">
                    <div className="supply-icon">💧</div>
                    <h4>Watering</h4>
                    <p>Spray bottle for gentle misting and watering can for established plants</p>
                  </div>
                  
                  <div className="supply-item">
                    <div className="supply-icon">🌡️</div>
                    <h4>Heat Mat (Optional)</h4>
                    <p>Seed starting heat mat for faster germination in cool conditions</p>
                  </div>
                  
                  <div className="supply-item">
                    <div className="supply-icon">💡</div>
                    <h4>Grow Lights (Indoor)</h4>
                    <p>LED grow lights if growing indoors without sufficient natural light</p>
                  </div>
                  
                  <div className="supply-item">
                    <div className="supply-icon">🏷️</div>
                    <h4>Labels</h4>
                    <p>Plant markers to track varieties and planting dates</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'planting' && (
              <div className="tab-panel">
                <h3>Step-by-Step Planting Process</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Prepare Your Container</h4>
                      <p>Fill your pot with organic potting soil, leaving about 1/2 inch from the rim. Ensure the container has drainage holes to prevent waterlogging.</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Check Your Stick</h4>
                      <p>Ensure your lollipop stick is completely clean of candy residue. The stick should be dry and free of any sticky coating.</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Plant Horizontally</h4>
                      <p>Lay the stick horizontally on the soil surface, then cover with about 1/4 inch of soil. Don't bury too deep!</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Initial Watering</h4>
                      <p>Gently mist the soil surface until evenly moist. Avoid overwatering, which can cause seeds to rot.</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h4>Label & Track</h4>
                      <p>Add a plant label with the variety and planting date. This helps track germination progress.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'location' && (
              <div className="tab-panel">
                <h3>Choosing the Perfect Location</h3>
                <div className="location-options">
                  <div className="location-option">
                    <h4>🏠 Indoor Growing</h4>
                    <ul>
                      <li><strong>Light:</strong> South-facing window or grow lights</li>
                      <li><strong>Temperature:</strong> 65-75°F for optimal growth</li>
                      <li><strong>Humidity:</strong> 40-60% relative humidity</li>
                      <li><strong>Air circulation:</strong> Gentle air movement prevents fungal issues</li>
                      <li><strong>Best for:</strong> Year-round growing, controlled conditions</li>
                    </ul>
                  </div>
                  
                  <div className="location-option">
                    <h4>🌞 Outdoor Growing</h4>
                    <ul>
                      <li><strong>Sunlight:</strong> 6-8 hours of direct sunlight daily</li>
                      <li><strong>Protection:</strong> Shelter from strong winds</li>
                      <li><strong>Drainage:</strong> Well-draining soil or elevated containers</li>
                      <li><strong>Season:</strong> Spring through fall in most climates</li>
                      <li><strong>Best for:</strong> Larger plants, natural conditions</li>
                    </ul>
                  </div>
                  
                  <div className="location-option">
                    <h4>🏡 Greenhouse/Porch</h4>
                    <ul>
                      <li><strong>Benefits:</strong> Extended growing season, weather protection</li>
                      <li><strong>Ventilation:</strong> Ensure adequate air flow</li>
                      <li><strong>Temperature control:</strong> Monitor for overheating</li>
                      <li><strong>Best for:</strong> Year-round growing in cold climates</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'care' && (
              <div className="tab-panel">
                <h3>Daily Care & Maintenance</h3>
                <div className="care-schedule">
                  <div className="care-period">
                    <h4>🌱 Germination Period (Days 1-21)</h4>
                    <ul>
                      <li><strong>Watering:</strong> Mist gently daily, keep soil consistently moist</li>
                      <li><strong>Light:</strong> Bright, indirect light or grow lights 12-14 hours daily</li>
                      <li><strong>Temperature:</strong> Maintain 70-75°F for fastest germination</li>
                      <li><strong>Watch for:</strong> First green shoots emerging from soil</li>
                    </ul>
                  </div>
                  
                  <div className="care-period">
                    <h4>🌿 Seedling Stage (Weeks 3-6)</h4>
                    <ul>
                      <li><strong>Watering:</strong> Water when top inch of soil feels dry</li>
                      <li><strong>Light:</strong> Gradually increase to full sun/grow lights</li>
                      <li><strong>Feeding:</strong> Light liquid fertilizer every 2 weeks</li>
                      <li><strong>Watch for:</strong> True leaves developing, stronger stems</li>
                    </ul>
                  </div>
                  
                  <div className="care-period">
                    <h4>🌸 Mature Plant (6+ weeks)</h4>
                    <ul>
                      <li><strong>Watering:</strong> Deep watering when soil is dry</li>
                      <li><strong>Harvesting:</strong> Pinch herbs regularly to encourage growth</li>
                      <li><strong>Feeding:</strong> Balanced fertilizer monthly</li>
                      <li><strong>Pruning:</strong> Remove flowers to keep herbs leafy (unless growing for flowers)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Seasonal Growing Guide
const SeasonalGuide = () => (
  <section className="seasonal-guide">
    <div className="seasonal-container">
      <h2>🗓️ Seasonal Growing Calendar</h2>
      <div className="seasons-grid">
        <div className="season spring">
          <div className="season-header">
            <div className="season-icon">🌸</div>
            <h3>Spring (March-May)</h3>
          </div>
          <div className="season-content">
            <p><strong>Best for:</strong> Sage, Basil, Marigold, Lemongrass</p>
            <h4>Tips:</h4>
            <ul>
              <li>Start indoors 6-8 weeks before last frost</li>
              <li>Use heat mats for consistent temperature</li>
              <li>Gradually acclimate plants before moving outdoors</li>
              <li>Perfect time for most herb varieties</li>
            </ul>
          </div>
        </div>
        
        <div className="season summer">
          <div className="season-header">
            <div className="season-icon">☀️</div>
            <h3>Summer (June-August)</h3>
          </div>
          <div className="season-content">
            <p><strong>Best for:</strong> Lavender, Rosemary, Thyme</p>
            <h4>Tips:</h4>
            <ul>
              <li>Direct outdoor planting works well</li>
              <li>Plant in early morning or evening</li>
              <li>Provide afternoon shade in extreme heat (90°F+)</li>
              <li>Mulch to retain moisture</li>
            </ul>
          </div>
        </div>
        
        <div className="season fall">
          <div className="season-header">
            <div className="season-icon">🍂</div>
            <h3>Fall (September-November)</h3>
          </div>
          <div className="season-content">
            <p><strong>Best for:</strong> Chamomile, Elder, Echinacea</p>
            <h4>Tips:</h4>
            <ul>
              <li>Plant 10-12 weeks before first frost</li>
              <li>Focus on cold-hardy varieties</li>
              <li>Consider cold frames for extended season</li>
              <li>Cool, moist conditions ideal for flowers</li>
            </ul>
          </div>
        </div>
        
        <div className="season winter">
          <div className="season-header">
            <div className="season-icon">❄️</div>
            <h3>Winter (December-February)</h3>
          </div>
          <div className="season-content">
            <p><strong>Best for:</strong> Indoor growing only</p>
            <h4>Tips:</h4>
            <ul>
              <li>Set up dedicated growing area with proper lighting</li>
              <li>Maintain 65-75°F temperatures</li>
              <li>Be patient - growth slower in winter</li>
              <li>Perfect time to plan spring garden</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Troubleshooting Guide
const Troubleshooting = () => {
  const [openIssue, setOpenIssue] = useState(null);

  const issues = [
    {
      problem: "Seeds aren't germinating after 3 weeks",
      solutions: [
        "Check soil temperature - should be 70-75°F",
        "Ensure soil stays consistently moist, not dry",
        "Verify seeds weren't planted too deep (max 1/4 inch)",
        "Some varieties take longer - wait up to 30 days",
        "Try moving to warmer location or use heat mat"
      ]
    },
    {
      problem: "Seedlings are growing too tall and thin",
      solutions: [
        "Increase light intensity - seedlings are stretching for light",
        "Move closer to grow lights or brighter window",
        "Provide 12-14 hours of light daily",
        "Use a small fan for gentle air circulation",
        "Consider transplanting to deeper containers"
      ]
    },
    {
      problem: "Leaves turning yellow or brown",
      solutions: [
        "Check watering - could be over or under-watering",
        "Ensure containers have proper drainage",
        "Look for signs of pests or fungal issues",
        "Adjust light levels - too much can cause burning",
        "Check if plant needs larger container"
      ]
    },
    {
      problem: "Plants stopped growing or look stunted",
      solutions: [
        "May need fertilizer - try diluted liquid fertilizer",
        "Check if root-bound - time to transplant",
        "Ensure adequate light and proper temperature",
        "Look for pest damage on leaves and stems",
        "Consider if plant has reached mature size for variety"
      ]
    },
    {
      problem: "Pests on my plants",
      solutions: [
        "Spray with water to remove aphids and small pests",
        "Use insecticidal soap for persistent problems",
        "Introduce beneficial insects like ladybugs",
        "Remove affected leaves if heavily infested",
        "Isolate infected plants to prevent spread"
      ]
    }
  ];

  return (
    <section className="troubleshooting">
      <div className="troubleshooting-container">
        <h2>🔧 Troubleshooting Common Issues</h2>
        <div className="issues-list">
          {issues.map((issue, index) => (
            <div key={index} className="issue-item">
              <button
                className="issue-problem"
                onClick={() => setOpenIssue(openIssue === index ? null : index)}
              >
                <span className="problem-text">{issue.problem}</span>
                <span className="issue-icon">{openIssue === index ? '−' : '+'}</span>
              </button>
              {openIssue === index && (
                <div className="issue-solutions">
                  <h4>Solutions:</h4>
                  <ul>
                    {issue.solutions.map((solution, sIndex) => (
                      <li key={sIndex}>{solution}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Success Stories
const SuccessStories = () => (
  <section className="success-stories">
    <div className="stories-container">
      <h2>🌟 Growing Success Stories</h2>
      <div className="stories-grid">
        <div className="story">
          <div className="story-image">🌿</div>
          <h3>Sarah's Kitchen Herb Garden</h3>
          <p>"Started with 3 lollipops on my kitchen windowsill. Now I have fresh basil, sage, and lavender for cooking! The germination rate was amazing - all three grew beautifully."</p>
          <span className="story-location">— Portland, OR</span>
        </div>
        
        <div className="story">
          <div className="story-image">🌸</div>
          <h3>Kids' School Garden Project</h3>
          <p>"Used Amborella lollipops for our 3rd-grade science project. The kids were so excited to eat candy and then watch it grow into flowers. 95% germination rate!"</p>
          <span className="story-location">— Austin, TX</span>
        </div>
        
        <div className="story">
          <div className="story-image">🌺</div>
          <h3>Apartment Balcony Paradise</h3>
          <p>"Living in a tiny apartment, I thought I couldn't garden. These lollipops proved me wrong! My balcony is now filled with marigolds and herbs."</p>
          <span className="story-location">— New York, NY</span>
        </div>
      </div>
    </div>
  </section>
);

// Main Growing Page Component
const GrowPage = () => {
  return (
    <SharedBackground variant="page">
      <div className="grow-page">
        <GrowHero />
        <QuickStart />
        <PlantingGuide />
        <SeasonalGuide />
        <Troubleshooting />
        <SuccessStories />
        
        <div className="grow-footer">
          <div className="support-cta">
            <h3>Still Have Questions?</h3>
            <p>Our growing experts are here to help you succeed!</p>
            <div className="support-options">
              <button className="support-btn">📞 Call Growing Support</button>
              <button className="support-btn">💬 Join Community Forum</button>
              <button className="support-btn">📧 Email Questions</button>
            </div>
          </div>
        </div>
      </div>
    </SharedBackground>
  );
};

export default GrowPage; 