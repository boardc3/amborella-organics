import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, categories, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';

// Product Card Component
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  // Create SVG for product image
  const ProductSVG = () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`glow-${product.id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Stick */}
      <rect x="48" y="45" width="4" height="45" fill="#fdfbf6" stroke="#000" strokeWidth="0.5" rx="2"/>
      {/* Lollipop circle */}
      <circle cx="50" cy="30" r="20" fill={product.colors[0]} filter={`url(#glow-${product.id})`} />
      {/* Decorative specks */}
      <circle cx="40" cy="25" r="2" fill={product.colors[1] || "#fdfbf6"} opacity="0.8"/>
      <circle cx="58" cy="18" r="1.5" fill={product.colors[2] || "#f4f0e6"} opacity="0.7"/>
      <circle cx="55" cy="35" r="1.8" fill="white" opacity="0.9"/>
    </svg>
  );

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <div className="product-image">
          <ProductSVG />
          {!product.inStock && <div className="out-of-stock-overlay">Out of Stock</div>}
        </div>
      </Link>
      
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-title-link">
          <h3 className="product-title">{product.name}</h3>
        </Link>
        
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-grows">
          <span className="grows-label">Grows:</span> {product.growsInto}
        </div>
        
        {product.inStock ? (
          <div className="product-actions">
            <div className="quantity-selector">
              <label>Qty:</label>
              <select 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              {showSuccess ? '✓ Added!' : 'Add to Cart'}
            </button>
          </div>
        ) : (
          <button className="out-of-stock-btn" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

// Filter Sidebar Component
const FilterSidebar = ({ selectedCategory, onCategoryChange, searchTerm, onSearchChange }) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="filter-section">
        <h3>Categories</h3>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h3>Free Shipping</h3>
        <div className="shipping-info">
          <p>🚚 Free shipping on orders of 48+ items</p>
          <p>📦 Free shipping on orders over $100</p>
        </div>
      </div>
    </div>
  );
};

// Main Shop Page Component
const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('name');

  // Filter and search logic
  useEffect(() => {
    let filtered = getProductsByCategory(selectedCategory);
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.growsInto.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop Blooming Lollipops</h1>
        <p>Discover our complete collection of seed-bearing lollipops. Each one grows into beautiful herbs and flowers!</p>
      </div>
      
      <div className="shop-container">
        <FilterSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <div className="products-section">
          <div className="products-header">
            <div className="results-info">
              <span>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</span>
            </div>
            
            <div className="sort-controls">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
                <button onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="featured-section">
        <h2>Why Choose Amborella?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🌱</div>
            <h3>World's First Seed-Bearing Lollipops</h3>
            <p>Patented technology embeds viable seeds in organic candy</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h3>100% Biodegradable</h3>
            <p>Sticks break down naturally and release seeds for planting</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🐝</div>
            <h3>Pollinator Friendly</h3>
            <p>Help support declining bee and butterfly populations</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⭐</div>
            <h3>Featured by Oprah</h3>
            <p>Recognized by Forbes and loved by millions worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage; 