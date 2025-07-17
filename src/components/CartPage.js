import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Cart Item Component
const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const ProductSVG = () => (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="25" width="4" height="30" fill="#fdfbf6" stroke="#000" strokeWidth="0.5" rx="2"/>
      <circle cx="30" cy="18" r="12" fill={item.colors[0]} />
      <circle cx="25" cy="15" r="1.5" fill={item.colors[1] || "#fdfbf6"} opacity="0.8"/>
      <circle cx="35" cy="20" r="1" fill="white" opacity="0.9"/>
    </svg>
  );

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <ProductSVG />
      </div>
      
      <div className="cart-item-info">
        <Link to={`/product/${item.id}`} className="cart-item-name">
          {item.name}
        </Link>
        <p className="cart-item-grows">Grows: {item.growsInto}</p>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
      </div>
      
      <div className="cart-item-quantity">
        <label>Qty:</label>
        <select 
          value={item.quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
        >
          <option value={0}>Remove</option>
          {[1,2,3,4,5,6,7,8,9,10].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      
      <div className="cart-item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button 
        className="cart-item-remove"
        onClick={() => removeFromCart(item.id)}
        title="Remove from cart"
      >
        ×
      </button>
    </div>
  );
};

// Checkout Form Component
const CheckoutForm = ({ onSubmit, cart, shipping, onShippingChange, orderTotal }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    shippingMethod: 'standard',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    if (!formData.nameOnCard) newErrors.nameOnCard = 'Name on card is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-section">
        <h3>Contact Information</h3>
        <div className="form-row">
          <div className="form-field">
            <label>Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-field">
            <label>Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Shipping Address</h3>
        <div className="form-row">
          <div className="form-field">
            <label>First Name *</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>
          <div className="form-field">
            <label>Last Name *</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>
        </div>
        
        <div className="form-field">
          <label>Address *</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-text">{errors.address}</span>}
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>City *</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={errors.city ? 'error' : ''}
            />
            {errors.city && <span className="error-text">{errors.city}</span>}
          </div>
          <div className="form-field">
            <label>State *</label>
            <select
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={errors.state ? 'error' : ''}
            >
              <option value="">Select State</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              {/* Add more states as needed */}
            </select>
            {errors.state && <span className="error-text">{errors.state}</span>}
          </div>
          <div className="form-field">
            <label>ZIP Code *</label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              className={errors.zipCode ? 'error' : ''}
            />
            {errors.zipCode && <span className="error-text">{errors.zipCode}</span>}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Shipping Method</h3>
        <div className="shipping-options">
          <label className="shipping-option">
            <input
              type="radio"
              name="shipping"
              value="standard"
              checked={formData.shippingMethod === 'standard'}
              onChange={(e) => handleInputChange('shippingMethod', e.target.value)}
            />
            <div className="shipping-details">
              <div className="shipping-name">Standard Shipping</div>
              <div className="shipping-price">
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </div>
              <div className="shipping-time">5-7 business days</div>
            </div>
          </label>
          
          <label className="shipping-option">
            <input
              type="radio"
              name="shipping"
              value="express"
              checked={formData.shippingMethod === 'express'}
              onChange={(e) => handleInputChange('shippingMethod', e.target.value)}
            />
            <div className="shipping-details">
              <div className="shipping-name">Express Shipping</div>
              <div className="shipping-price">$15.99</div>
              <div className="shipping-time">2-3 business days</div>
            </div>
          </label>
        </div>
      </div>

      <div className="form-section">
        <h3>Payment Information</h3>
        <div className="form-field">
          <label>Name on Card *</label>
          <input
            type="text"
            value={formData.nameOnCard}
            onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
            className={errors.nameOnCard ? 'error' : ''}
          />
          {errors.nameOnCard && <span className="error-text">{errors.nameOnCard}</span>}
        </div>
        
        <div className="form-field">
          <label>Card Number *</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
            className={errors.cardNumber ? 'error' : ''}
          />
          {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Expiry Date *</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
              className={errors.expiryDate ? 'error' : ''}
            />
            {errors.expiryDate && <span className="error-text">{errors.expiryDate}</span>}
          </div>
          <div className="form-field">
            <label>CVV *</label>
            <input
              type="text"
              placeholder="123"
              value={formData.cvv}
              onChange={(e) => handleInputChange('cvv', e.target.value)}
              className={errors.cvv ? 'error' : ''}
            />
            {errors.cvv && <span className="error-text">{errors.cvv}</span>}
          </div>
        </div>
      </div>

      <div className="order-summary-sticky">
        <div className="order-total">
          <strong>Total: ${orderTotal.toFixed(2)}</strong>
        </div>
        <button type="submit" className="place-order-btn">
          Complete Order
        </button>
      </div>
    </form>
  );
};

// Order Confirmation Component
const OrderConfirmation = ({ orderData }) => (
  <div className="order-confirmation">
    <div className="success-icon">✅</div>
    <h1>Order Confirmed!</h1>
    <p className="order-number">Order #AM{Date.now().toString().slice(-6)}</p>
    
    <div className="confirmation-details">
      <div className="detail-section">
        <h3>Shipping Address</h3>
        <p>{orderData.firstName} {orderData.lastName}</p>
        <p>{orderData.address}</p>
        <p>{orderData.city}, {orderData.state} {orderData.zipCode}</p>
      </div>
      
      <div className="detail-section">
        <h3>Contact</h3>
        <p>{orderData.email}</p>
        {orderData.phone && <p>{orderData.phone}</p>}
      </div>
      
      <div className="detail-section">
        <h3>What's Next?</h3>
        <p>📧 Confirmation email sent to {orderData.email}</p>
        <p>📦 Your order will ship in 1-2 business days</p>
        <p>🌱 Don't forget to plant your lollipop sticks!</p>
      </div>
    </div>
    
    <div className="confirmation-actions">
      <Link to="/shop" className="btn-secondary">Continue Shopping</Link>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  </div>
);

// Main Cart Page Component
const CartPage = () => {
  const { cart, getCartTotal, getCartItemCount, getShippingCost, getTotalWithShipping, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'checkout', 'confirmation'
  const [orderData, setOrderData] = useState(null);

  const subtotal = getCartTotal();
  const shipping = getShippingCost();
  const total = getTotalWithShipping();
  const itemCount = getCartItemCount();

  const handleCheckoutSubmit = (formData) => {
    // Simulate order processing
    setOrderData(formData);
    setCheckoutStep('confirmation');
    clearCart();
  };

  if (checkoutStep === 'confirmation' && orderData) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <OrderConfirmation orderData={orderData} />
        </div>
      </div>
    );
  }

  if (checkoutStep === 'checkout') {
    return (
      <div className="cart-page">
        <div className="checkout-container">
          <div className="checkout-header">
            <button 
              onClick={() => setCheckoutStep('cart')}
              className="back-to-cart"
            >
              ← Back to Cart
            </button>
            <h1>Checkout</h1>
          </div>
          
          <div className="checkout-grid">
            <CheckoutForm
              onSubmit={handleCheckoutSubmit}
              cart={cart}
              shipping={shipping}
              orderTotal={total}
            />
            
            <div className="checkout-sidebar">
              <div className="order-summary">
                <h3>Order Summary</h3>
                
                <div className="summary-items">
                  {cart.items.map(item => (
                    <div key={item.id} className="summary-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-quantity">×{item.quantity}</span>
                      <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="summary-totals">
                  <div className="summary-line">
                    <span>Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-line">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="summary-line total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {shipping === 0 && (
                  <div className="free-shipping-notice">
                    🎉 You qualified for free shipping!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Cart view
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          {itemCount > 0 && (
            <p className="cart-count">{itemCount} item{itemCount !== 1 ? 's' : ''} in your cart</p>
          )}
        </div>
        
        {cart.items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some delicious seed-bearing lollipops to get started!</p>
            <Link to="/shop" className="btn-primary">Shop Now</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="cart-sidebar">
              <div className="cart-summary">
                <h3>Order Summary</h3>
                
                <div className="summary-line">
                  <span>Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-line">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                <div className="summary-line total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                {shipping === 0 && (
                  <div className="free-shipping-notice">
                    🎉 Free shipping activated!
                  </div>
                )}
                
                {shipping > 0 && itemCount < 48 && (
                  <div className="shipping-notice">
                    💡 Add {48 - itemCount} more items for free shipping!
                  </div>
                )}
                
                <button 
                  className="checkout-btn"
                  onClick={() => setCheckoutStep('checkout')}
                >
                  Proceed to Checkout
                </button>
                
                <Link to="/shop" className="continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 