import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';

// Product Image Component
const ProductImage = ({ product }) => (
  <div className="product-detail-image">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`detail-glow-${product.id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={`bg-${product.id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={product.colors[0]} stopOpacity="0.1" />
          <stop offset="100%" stopColor={product.colors[1] || product.colors[0]} stopOpacity="0.3" />
        </radialGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={`url(#bg-${product.id})`} />
      
      {/* Stick */}
      <rect x="96" y="90" width="8" height="90" fill="#fdfbf6" stroke="#000" strokeWidth="1" rx="4"/>
      
      {/* Lollipop circle */}
      <circle cx="100" cy="60" r="40" fill={product.colors[0]} filter={`url(#detail-glow-${product.id})`} stroke="#fff" strokeWidth="2" />
      
      {/* Decorative elements */}
      <circle cx="80" cy="50" r="4" fill={product.colors[1] || "#fdfbf6"} opacity="0.8"/>
      <circle cx="115" cy="35" r="3" fill={product.colors[2] || "#f4f0e6"} opacity="0.7"/>
      <circle cx="110" cy="70" r="3.5" fill="white" opacity="0.9"/>
      <circle cx="85" cy="75" r="2.5" fill={product.colors[1] || "#fdfbf6"} opacity="0.6"/>
      
      {/* Sparkle effects */}
      <g opacity="0.8">
        <path d="M70 40 L75 45 L70 50 L65 45 Z" fill="white"/>
        <path d="M130 80 L135 85 L130 90 L125 85 Z" fill="white"/>
        <path d="M90 20 L93 23 L90 26 L87 23 Z" fill="white"/>
      </g>
    </svg>
  </div>
);

// Growing Instructions Component
const GrowingInstructions = ({ product }) => (
  <div className="growing-instructions">
    <h3>🌱 Growing Instructions</h3>
    <div className="growing-steps">
      <div className="step">
        <div className="step-number">1</div>
        <div className="step-content">
          <h4>Enjoy Your Lollipop</h4>
          <p>Savor the delicious organic flavors. Wait 24-48 hours after finishing to ensure all candy residue dissolves.</p>
        </div>
      </div>
      
      <div className="step">
        <div className="step-number">2</div>
        <div className="step-content">
          <h4>Plant the Stick</h4>
          <p>Plant horizontally about 1/4 inch deep in quality potting soil. The biodegradable stick contains your seeds!</p>
        </div>
      </div>
      
      <div className="step">
        <div className="step-number">3</div>
        <div className="step-content">
          <h4>Water & Wait</h4>
          <p>Keep soil consistently moist but not waterlogged. Place in an area with 6-8 hours of sunlight daily.</p>
        </div>
      </div>
      
      <div className="step">
        <div className="step-number">4</div>
        <div className="step-content">
          <h4>Watch It Grow</h4>
          <p>Germination: {product.growingTime}. Soon you'll have beautiful {product.growsInto} to enjoy!</p>
        </div>
      </div>
    </div>
    
    <div className="growing-tips">
      <h4>💡 Pro Tips</h4>
      <ul>
        <li>Use a seed starting heat mat for faster germination in cool weather</li>
        <li>Mist gently with a spray bottle to avoid disturbing seeds</li>
        <li>Be patient - different varieties germinate at different rates</li>
        <li>Once established, harvest herbs regularly to encourage new growth</li>
      </ul>
    </div>
  </div>
);

// Related Products Component
const RelatedProducts = ({ currentProduct }) => {
  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="related-products">
      <h3>You Might Also Like</h3>
      <div className="related-grid">
        {relatedProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="related-item">
            <div className="related-image">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="30" r="20" fill={product.colors[0]} />
                <rect x="48" y="45" width="4" height="45" fill="#fdfbf6" rx="2"/>
              </svg>
            </div>
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Main Product Page Component
const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, getCartItemById } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showSuccess, setShowSuccess] = useState(false);

  const existingCartItem = getCartItemById(parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="page-container">
        <h1>Product Not Found</h1>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="product-page">
      <div className="product-detail-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
        </nav>
        
        {/* Main Product Section */}
        <div className="product-detail-grid">
          <div className="product-image-section">
            <ProductImage product={product} />
            {!product.inStock && (
              <div className="stock-status out-of-stock">
                ⚠️ Currently Out of Stock
              </div>
            )}
            {product.inStock && (
              <div className="stock-status in-stock">
                ✅ In Stock & Ready to Ship
              </div>
            )}
          </div>
          
          <div className="product-info-section">
            <h1>{product.name}</h1>
            
            <div className="price-section">
              <span className="price">${product.price.toFixed(2)}</span>
              <span className="category-badge">{product.category}</span>
            </div>
            
            <div className="grows-info">
              <span className="grows-label">🌱 Grows Into:</span>
              <span className="grows-value">{product.growsInto}</span>
            </div>
            
            <p className="product-description">{product.description}</p>
            
            {product.inStock && (
              <div className="purchase-section">
                <div className="quantity-section">
                  <label htmlFor="quantity">Quantity:</label>
                  <select 
                    id="quantity"
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  className="add-to-cart-main"
                  onClick={handleAddToCart}
                >
                  {showSuccess ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>
                
                {existingCartItem && (
                  <p className="cart-notice">
                    You currently have {existingCartItem.quantity} of this item in your cart
                  </p>
                )}
              </div>
            )}
            
            <div className="product-highlights">
              <div className="highlight">
                <span className="highlight-icon">🌿</span>
                <span>100% Organic Ingredients</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">♻️</span>
                <span>Biodegradable Stick</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🇺🇸</span>
                <span>Made in California</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🚚</span>
                <span>Free Shipping on 48+ Items</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="product-tabs">
          <div className="tab-headers">
            <button 
              className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Details
            </button>
            <button 
              className={`tab-header ${activeTab === 'growing' ? 'active' : ''}`}
              onClick={() => setActiveTab('growing')}
            >
              Growing Guide
            </button>
            <button 
              className={`tab-header ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="tab-panel">
                <h3>Product Details</h3>
                <p>{product.description}</p>
                <p>This unique lollipop combines delicious organic flavors with the magic of gardening. Each stick contains carefully embedded seeds that will grow into {product.growsInto}.</p>
                
                <h4>What Makes It Special</h4>
                <ul>
                  <li>World's first seed-bearing lollipop technology</li>
                  <li>Patented biodegradable stick releases seeds when planted</li>
                  <li>Organic, sustainable ingredients</li>
                  <li>Creates lasting memories beyond the candy</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'growing' && (
              <div className="tab-panel">
                <GrowingInstructions product={product} />
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div className="tab-panel">
                <h3>Ingredients</h3>
                <p className="ingredients-list">{product.ingredients}</p>
                
                <h4>Allergen Information</h4>
                <p>This product is made in a facility that may process nuts, soy, and dairy.</p>
                
                <h4>Certifications</h4>
                <div className="certifications">
                  <span className="cert-badge">🌿 USDA Organic</span>
                  <span className="cert-badge">🌱 Non-GMO</span>
                  <span className="cert-badge">♻️ Sustainable</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
};

export default ProductPage; 