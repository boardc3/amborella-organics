import React, { useState, useEffect } from 'react';

// SVG Lollipop Component - SAME AS ORIGINAL
const SVGLollipop = ({ style }) => (
  <div className="svg-lollipop" style={style}>
    <svg width="20" height="60" viewBox="0 0 20 60">
      <defs>
        <filter id="glow-shared" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="2" y="0" width="16" height="16" rx="3" fill="rgba(212, 165, 116, 0.7)" stroke="rgba(253, 251, 246, 0.5)" strokeWidth="0.5" filter="url(#glow-shared)"/>
      <circle cx="7" cy="5" r="1" fill="#f4f0e6" opacity="0.5"/>
      <circle cx="13" cy="8" r="0.8" fill="#fdfbf6" opacity="0.6"/>
      <rect x="9" y="18" width="2" height="42" fill="#fdfbf6" stroke="#000" strokeWidth="0.3" rx="1"/>
    </svg>
  </div>
);

// Beautiful Multicolored Flower Component - SAME AS ORIGINAL
const BloomingFlower = ({ style, colors }) => (
  <div className="blooming-flower" style={style}>
    <svg width="80" height="100" viewBox="0 0 80 100">
      <defs>
        <filter id="flower-glow-shared" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="center-shared" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9c74f" />
          <stop offset="100%" stopColor="#e07a3f" />
        </radialGradient>
      </defs>
      
      {/* Stem */}
      <rect x="37" y="50" width="6" height="50" fill="#1a4b3a" rx="3" className="flower-stem"/>
      
      {/* Petals - 8 petals in a circle */}
      <g className="flower-petals">
        {/* Top petal */}
        <ellipse cx="40" cy="30" rx="8" ry="15" fill={colors[0]} filter="url(#flower-glow-shared)" className="petal petal-1"/>
        {/* Top-right petal */}
        <ellipse cx="52" cy="35" rx="8" ry="15" fill={colors[1]} filter="url(#flower-glow-shared)" className="petal petal-2" transform="rotate(45 40 40)"/>
        {/* Right petal */}
        <ellipse cx="55" cy="45" rx="8" ry="15" fill={colors[2]} filter="url(#flower-glow-shared)" className="petal petal-3" transform="rotate(90 40 40)"/>
        {/* Bottom-right petal */}
        <ellipse cx="52" cy="55" rx="8" ry="15" fill={colors[3]} filter="url(#flower-glow-shared)" className="petal petal-4" transform="rotate(135 40 40)"/>
        {/* Bottom petal */}
        <ellipse cx="40" cy="60" rx="8" ry="15" fill={colors[4]} filter="url(#flower-glow-shared)" className="petal petal-5" transform="rotate(180 40 40)"/>
        {/* Bottom-left petal */}
        <ellipse cx="28" cy="55" rx="8" ry="15" fill={colors[5]} filter="url(#flower-glow-shared)" className="petal petal-6" transform="rotate(225 40 40)"/>
        {/* Left petal */}
        <ellipse cx="25" cy="45" rx="8" ry="15" fill={colors[6]} filter="url(#flower-glow-shared)" className="petal petal-7" transform="rotate(270 40 40)"/>
        {/* Top-left petal */}
        <ellipse cx="28" cy="35" rx="8" ry="15" fill={colors[7]} filter="url(#flower-glow-shared)" className="petal petal-8" transform="rotate(315 40 40)"/>
      </g>
      
      {/* Center of flower */}
      <circle cx="40" cy="45" r="8" fill="url(#center-shared)" filter="url(#flower-glow-shared)" className="flower-center"/>
      
      {/* Small accent dots in center */}
      <circle cx="37" cy="42" r="1.5" fill="#fdfbf6" opacity="0.8"/>
      <circle cx="43" cy="47" r="1" fill="#fdfbf6" opacity="0.9"/>
      <circle cx="40" cy="45" r="0.8" fill="#fdfbf6" opacity="0.7"/>
    </svg>
  </div>
);

// Shared Background Component - EXTENDS THE ORIGINAL BEAUTIFUL SYSTEM
const SharedBackground = ({ children }) => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const createAnimation = () => {
      const id = Date.now() + Math.random();
      const type = 'lollipop';
      const left = `${Math.random() * 100}%`;
      
      // Same beautiful colors as original
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

      }, 5900); // Same timing as original
    };

    // Slower animation rate for other pages so it's not overwhelming
    const intervalId = setInterval(createAnimation, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="shared-background">
      {/* SAME Beautiful Dense Leaf Background */}
      <div className="dense-leaf-background">
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>
      </div>
      
      {/* SAME Beautiful Animation Container */}
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

      {/* Content with padding for other pages */}
      <div className="shared-background-content">
        {children}
      </div>
    </div>
  );
};

export default SharedBackground; 