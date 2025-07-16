import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}> 
      <nav className="nav">
        <a href="#home" className="logo">Amborella Organics</a>
        <ul className="nav-links">
          <li><a href="#shop">Shop</a></li>
          <li><a href="#grow">Grow</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

// SVG Lollipop Component
const SVGLollipop = ({ style }) => (
  <div className="svg-lollipop" style={style}>
    <svg width="20" height="60" viewBox="0 0 20 60">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="2" y="0" width="16" height="16" rx="3" fill="rgba(212, 165, 116, 0.7)" stroke="rgba(253, 251, 246, 0.5)" strokeWidth="0.5" filter="url(#glow)"/>
      <circle cx="7" cy="5" r="1" fill="#f4f0e6" opacity="0.5"/>
      <circle cx="13" cy="8" r="0.8" fill="#fdfbf6" opacity="0.6"/>
      <rect x="9" y="18" width="2" height="42" fill="#fdfbf6" stroke="#000" strokeWidth="0.3" rx="1"/>
    </svg>
  </div>
);

// Mom and Daughter Planting Scene SVG
const PlantingSceneSVG = () => (
  <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        {`
          .scene-outline { fill: none; stroke: rgba(253, 251, 246, 0.4); stroke-width: 1.5; }
          .scene-fill { fill: rgba(253, 251, 246, 0.15); stroke: rgba(253, 251, 246, 0.3); stroke-width: 1; }
        `}
      </style>
    </defs>
    
    {/* Large tree in front of mom */}
    <ellipse cx="150" cy="130" rx="25" ry="15" className="scene-fill"/>
    <rect x="147" y="80" width="6" height="50" className="scene-outline"/>
    <circle cx="150" cy="85" r="20" className="scene-outline"/>
    <circle cx="140" cy="75" r="12" className="scene-fill"/>
    <circle cx="160" cy="78" r="14" className="scene-fill"/>
    
    {/* Smaller tree in front of daughter */}
    <ellipse cx="110" cy="135" rx="15" ry="10" className="scene-fill"/>
    <rect x="108" y="100" width="4" height="35" className="scene-outline"/>
    <circle cx="110" cy="105" r="12" className="scene-outline"/>
    <circle cx="103" cy="98" r="7" className="scene-fill"/>
    <circle cx="117" cy="100" r="8" className="scene-fill"/>
    
    {/* Mom figure */}
    <ellipse cx="75" cy="140" rx="8" ry="5" className="scene-fill"/>
    <rect x="73" y="115" width="4" height="25" className="scene-outline"/>
    <rect x="70" y="105" width="10" height="15" className="scene-outline" rx="2"/>
    <circle cx="75" cy="95" r="6" className="scene-outline"/>
    <path d="M70 110 L65 120" className="scene-outline"/>
    <path d="M80 110 L85 120" className="scene-outline"/>
    
    {/* Daughter figure (smaller) */}
    <ellipse cx="45" cy="135" rx="6" ry="4" className="scene-fill"/>
    <rect x="43.5" y="118" width="3" height="17" className="scene-outline"/>
    <rect x="41" y="110" width="8" height="12" className="scene-outline" rx="2"/>
    <circle cx="45" cy="102" r="4" className="scene-outline"/>
    <path d="M41 114 L37 122" className="scene-outline"/>
    <path d="M49 114 L53 122" className="scene-outline"/>
    
    {/* Planting stick (horizontal between them) */}
    <rect x="55" y="130" width="12" height="2" className="scene-outline" rx="1"/>
    <circle cx="55" cy="131" r="1" className="scene-fill"/>
    <circle cx="67" cy="131" r="1" className="scene-fill"/>
    
    {/* Ground indication */}
    <path d="M20 145 Q100 140 180 145" className="scene-outline"/>
  </svg>
);

// Custom SVG for Product Images
const ProductImageSVG = ({ baseColor, specks }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="subtle-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Stick first (behind the lollipop) */}
    <rect x="48" y="45" width="4" height="45" fill="#fdfbf6" stroke="#000" strokeWidth="0.5" rx="2"/>
    {/* Lollipop circle on top */}
    <circle cx="50" cy="30" r="20" fill={baseColor} filter="url(#subtle-glow)" />
    {specks.map((speck, i) => (
      <circle key={i} cx={50 + speck.x} cy={30 + speck.y} r={speck.r} fill={speck.color} opacity={speck.opacity} />
    ))}
  </svg>
);


// Hero Section with Dense Leaves Animation
const Hero = () => {
  const [animations, setAnimations] = useState([]);

  const products = [
    {
      title: "Sage & Marshmallow",
      price: "$8.00",
      svg: <ProductImageSVG baseColor="#7fb069" specks={[
        {x: -10, y: 5, r: 2, color: "#fdfbf6", opacity: 0.8},
        {x: 8, y: -12, r: 1.5, color: "#f4f0e6", opacity: 0.7},
        {x: 15, y: 15, r: 1.8, color: "white", opacity: 0.9},
      ]}/>
    },
    {
      title: "Peach & Marigold",
      price: "$8.00",
      svg: <ProductImageSVG baseColor="#f9c74f" specks={[
        {x: -12, y: -8, r: 2.2, color: "#e07a3f", opacity: 0.8},
        {x: 10, y: 10, r: 1.5, color: "#ffb347", opacity: 0.7},
        {x: 5, y: -15, r: 1.8, color: "white", opacity: 0.9},
      ]}/>
    },
    {
      title: "Lavender & Lemongrass",
      price: "$8.00",
      svg: <ProductImageSVG baseColor="#b19cd9" specks={[
        {x: 5, y: 15, r: 2, color: "#a8c09a", opacity: 0.8},
        {x: -10, y: -10, r: 1.5, color: "#c9a96e", opacity: 0.7},
        {x: 15, y: -5, r: 1.8, color: "white", opacity: 0.9},
      ]}/>
    },
    {
      title: "Frida Kahlo Watermelon",
      price: "$7.50",
      svg: <ProductImageSVG baseColor="#ff6b6b" specks={[
        {x: -15, y: 10, r: 1.5, color: "#1a1a1a", opacity: 0.6},
        {x: 0, y: -10, r: 1.5, color: "#1a1a1a", opacity: 0.6},
        {x: 15, y: 0, r: 1.5, color: "#1a1a1a", opacity: 0.6},
      ]}/>
    },
    {
      title: "Garden Lover's 8 Pack",
      price: "$20.00",
      svg: <ProductImageSVG baseColor="#4ecdc4" specks={[
        {x: -15, y: 10, r: 2, color: "#ff6b6b", opacity: 0.7},
        {x: 0, y: -10, r: 1.8, color: "#b19cd9", opacity: 0.7},
        {x: 15, y: 0, r: 2.2, color: "#f9c74f", opacity: 0.7},
      ]}/>
    },
    {
      title: "Watering Can-dy 20 Pack",
      price: "$50.00",
      svg: <ProductImageSVG baseColor="#45b7d1" specks={[
        {x: -10, y: -10, r: 1.5, color: "white", opacity: 0.8},
        {x: 10, y: 10, r: 1.5, color: "white", opacity: 0.8},
        {x: 0, y: 0, r: 1.5, color: "white", opacity: 0.8},
      ]}/>
    }
  ];

  useEffect(() => {
    const createAnimation = () => {
      const id = Date.now() + Math.random();
      const type = 'lollipop';
      const left = `${Math.random() * 100}%`;
      const animation = { id, type, left };

      setAnimations(prev => [...prev, animation]);

      setTimeout(() => {
        setAnimations(prev => {
          const newAnimations = prev.filter(a => a.id !== id);
          const plantAnimation = { id: id + 1, type: 'plant', left };
          return [...newAnimations, plantAnimation];
        });
        
        setTimeout(() => {
          setAnimations(prev => prev.filter(a => a.id !== id + 1));
        }, 6000);

      }, 5900);
    };

    const intervalId = setInterval(createAnimation, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="dense-leaf-background">
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>
      </div>
      
      <div className="animation-container">
        {animations.map(anim => {
          if (anim.type === 'lollipop') {
            return <SVGLollipop key={anim.id} style={{ left: anim.left }} />;
          }
          if (anim.type === 'plant') {
            const rotate = Math.random() * 20 - 10;
            return (
              <div key={anim.id} className="sprouting-plant" style={{ left: anim.left }}>
                <div className="stem" />
                <div className="leaf leaf1" style={{'--rotate-end': `${-60 + rotate}deg`}} />
                <div className="leaf leaf2" style={{'--rotate-end': `${60 + rotate}deg`}} />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="planting-scene">
        <PlantingSceneSVG />
      </div>

      <div className="hero-content">
        <h1>A Sweet Promise to Future Gardens</h1>
        <p>
          Each artisanal lollipop holds a secret: heirloom seeds. Once the sweetness fades, plant the biodegradable stick and watch a new story bloom. It’s more than a treat—it’s a memory in the making.
        </p>

        {/* Product Carousel */}
        <div className="hero-products">
          <div className="hero-products-scroll">
            {products.map((product, index) => (
              <div key={index} className="hero-product">
                <div className="hero-product-image">
                  {product.svg}
                </div>
                <div className="hero-product-info">
                  <h4 className="hero-product-title">{product.title}</h4>
                  <p className="hero-product-price">{product.price}</p>
                  <a href="#shop" className="btn-hero-cart">Add to Cart</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="#shop" className="btn-primary">Explore All Flavors</a>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* All other sections removed to focus on Nav/Hero */}
    </div>
  );
}

export default App; 