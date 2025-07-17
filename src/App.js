import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { CartProvider, useCart } from './context/CartContext';
import { getFeaturedProducts } from './data/products';
import ShopPage from './components/ShopPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import GrowPage from './components/GrowPage';

// Header Component with Cart
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartItemCount } = useCart();
  const location = useLocation();

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
        <Link to="/" className="logo">Amborella Organics</Link>
        <ul className="nav-links">
          <li><Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link></li>
          <li><Link to="/grow" className={location.pathname === '/grow' ? 'active' : ''}>Grow</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart ({getCartItemCount()})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// SVG components now imported from SharedBackground

// Mom and Daughter Planting Scene SVG (keeping existing)
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

// Custom SVG for Product Images (keeping existing)
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

// Beautiful Multicolored Flower Component
const BloomingFlower = ({ style, colors }) => (
  <div className="blooming-flower" style={style}>
    <svg width="80" height="100" viewBox="0 0 80 100">
      <defs>
        <filter id="flower-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9c74f" />
          <stop offset="100%" stopColor="#e07a3f" />
        </radialGradient>
      </defs>
      
      {/* Stem */}
      <rect x="37" y="50" width="6" height="50" fill="#1a4b3a" rx="3" className="flower-stem"/>
      
      {/* Petals - 8 petals in a circle */}
      <g className="flower-petals">
        {/* Top petal */}
        <ellipse cx="40" cy="30" rx="8" ry="15" fill={colors[0]} filter="url(#flower-glow)" className="petal petal-1"/>
        {/* Top-right petal */}
        <ellipse cx="52" cy="35" rx="8" ry="15" fill={colors[1]} filter="url(#flower-glow)" className="petal petal-2" transform="rotate(45 40 40)"/>
        {/* Right petal */}
        <ellipse cx="55" cy="45" rx="8" ry="15" fill={colors[2]} filter="url(#flower-glow)" className="petal petal-3" transform="rotate(90 40 40)"/>
        {/* Bottom-right petal */}
        <ellipse cx="52" cy="55" rx="8" ry="15" fill={colors[3]} filter="url(#flower-glow)" className="petal petal-4" transform="rotate(135 40 40)"/>
        {/* Bottom petal */}
        <ellipse cx="40" cy="60" rx="8" ry="15" fill={colors[4]} filter="url(#flower-glow)" className="petal petal-5" transform="rotate(180 40 40)"/>
        {/* Bottom-left petal */}
        <ellipse cx="28" cy="55" rx="8" ry="15" fill={colors[5]} filter="url(#flower-glow)" className="petal petal-6" transform="rotate(225 40 40)"/>
        {/* Left petal */}
        <ellipse cx="25" cy="45" rx="8" ry="15" fill={colors[6]} filter="url(#flower-glow)" className="petal petal-7" transform="rotate(270 40 40)"/>
        {/* Top-left petal */}
        <ellipse cx="28" cy="35" rx="8" ry="15" fill={colors[7]} filter="url(#flower-glow)" className="petal petal-8" transform="rotate(315 40 40)"/>
      </g>
      
      {/* Center of flower */}
      <circle cx="40" cy="45" r="8" fill="url(#center)" filter="url(#flower-glow)" className="flower-center"/>
      
      {/* Small accent dots in center */}
      <circle cx="37" cy="42" r="1.5" fill="#fdfbf6" opacity="0.8"/>
      <circle cx="43" cy="47" r="1" fill="#fdfbf6" opacity="0.9"/>
      <circle cx="40" cy="45" r="0.8" fill="#fdfbf6" opacity="0.7"/>
    </svg>
  </div>
);

// Home Page Component (Hero Section) - RESTORED ORIGINAL
const HomePage = () => {
  const [animations, setAnimations] = useState([]);
  const products = getFeaturedProducts().slice(0, 6);

  useEffect(() => {
    const createAnimation = () => {
      const id = Date.now() + Math.random();
      const type = 'lollipop';
      const left = `${Math.random() * 100}%`;
      
      // Generate random beautiful colors for each flower
      const flowerColors = [
        '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', 
        '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'
      ];
      const colors = Array.from({length: 8}, () => 
        flowerColors[Math.floor(Math.random() * flowerColors.length)]
      );
      
      const animation = { id, type, left, colors };

      setAnimations(prev => [...prev, animation]);

      setTimeout(() => {
        setAnimations(prev => {
          const newAnimations = prev.filter(a => a.id !== id);
          const flowerAnimation = { id: id + 1, type: 'flower', left, colors };
          return [...newAnimations, flowerAnimation];
        });
        
        setTimeout(() => {
          setAnimations(prev => prev.filter(a => a.id !== id + 1));
        }, 8000);

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
          if (anim.type === 'flower') {
            return (
              <BloomingFlower 
                key={anim.id} 
                style={{ left: anim.left }} 
                colors={anim.colors}
              />
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
          Each artisanal lollipop holds a secret: heirloom seeds. Once the sweetness fades, plant the biodegradable stick and watch a new story bloom. It's more than a treat—it's a memory in the making.
        </p>

        {/* Product Carousel */}
        <div className="hero-products">
          <div className="hero-products-scroll">
            {products.map((product, index) => (
              <div key={index} className="hero-product">
                <Link to={`/product/${product.id}`} className="hero-product-link">
                  <div className="hero-product-image">
                    <ProductImageSVG baseColor={product.colors[0]} specks={[
                      {x: -10, y: 5, r: 2, color: product.colors[1], opacity: 0.8},
                      {x: 8, y: -12, r: 1.5, color: product.colors[2] || "#f4f0e6", opacity: 0.7},
                      {x: 15, y: 15, r: 1.8, color: "white", opacity: 0.9},
                    ]}/>
                  </div>
                  <div className="hero-product-info">
                    <h4 className="hero-product-title">{product.name}</h4>
                    <p className="hero-product-price">${product.price.toFixed(2)}</p>
                    <span className="btn-hero-cart">Add to Cart</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Link to="/shop" className="btn-primary">Explore All Flavors</Link>
      </div>
    </section>
  );
};

// All page components are now imported from their individual files



// Main App Component with Routing
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/grow" element={<GrowPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 