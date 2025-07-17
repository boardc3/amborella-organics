import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SharedBackground from './SharedBackground';
import { categories, getFeaturedPosts, getPostsByCategory } from '../data/blog';

// Blog Card Component
const BlogCard = ({ post, featured = false }) => (
  <article className={`blog-card ${featured ? 'featured' : ''}`}>
    <div className="blog-image">
      {/* Placeholder for blog image - using colored gradient based on category */}
      <div className={`blog-image-placeholder ${post.category.toLowerCase()}`}>
        <span className="blog-category">{post.category}</span>
      </div>
    </div>
    
    <div className="blog-content">
      <div className="blog-meta">
        <span className="blog-date">{new Date(post.publishDate).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
        <span className="blog-read-time">{post.readTime}</span>
      </div>
      
      <h3 className="blog-title">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      
      <p className="blog-excerpt">{post.excerpt}</p>
      
      <div className="blog-footer">
        <div className="blog-author">
          <span className="author-name">{post.author}</span>
          <span className="author-role">{post.authorRole}</span>
        </div>
        
        <div className="blog-tags">
          {post.tags.slice(0, 2).map(tag => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <Link to={`/blog/${post.slug}`} className="read-more">
        Read Full Article →
      </Link>
    </div>
  </article>
);

// Featured Posts Section
const FeaturedSection = () => {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <section className="featured-section">
      <h2>Featured Articles</h2>
      <div className="featured-grid">
        {featuredPosts.map(post => (
          <BlogCard key={post.id} post={post} featured={true} />
        ))}
      </div>
    </section>
  );
};

// Blog Filter Sidebar
const BlogSidebar = ({ selectedCategory, onCategoryChange }) => (
  <aside className="blog-sidebar">
    <div className="sidebar-section">
      <h3>Categories</h3>
      <div className="category-list">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
    
    <div className="sidebar-section">
      <h3>About Our Blog</h3>
      <p>
        Discover the science, stories, and sustainability behind seed-bearing lollipops. 
        From growing guides to company updates, we share everything about the sweet journey 
        from candy to garden.
      </p>
    </div>
    
    <div className="sidebar-section">
      <h3>Growing Tips</h3>
      <ul className="tips-list">
        <li>🌱 Start with good quality potting soil</li>
        <li>💧 Keep soil moist but not waterlogged</li>
        <li>☀️ Provide 6-8 hours of sunlight daily</li>
        <li>🌡️ Use a heat mat for faster germination</li>
        <li>✂️ Harvest herbs regularly for best growth</li>
      </ul>
    </div>
  </aside>
);

// Main Blog Listing
const BlogListing = ({ posts }) => (
  <div className="blog-listing">
    <div className="blog-grid">
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
      
      {posts.length === 0 && (
        <div className="no-posts">
          <p>No articles found in this category.</p>
          <p>Check back soon for new content!</p>
        </div>
      )}
    </div>
  </div>
);

// Newsletter Signup
const NewsletterSignup = () => (
  <section className="newsletter-section">
    <div className="newsletter-container">
      <h3>🌱 Subscribe to Our Growing Newsletter</h3>
      <p>Get the latest growing tips, product updates, and exclusive content delivered to your inbox.</p>
      
      <form className="newsletter-form">
        <div className="newsletter-inputs">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="newsletter-email"
          />
          <button type="submit" className="newsletter-submit">
            Subscribe
          </button>
        </div>
        <p className="newsletter-disclaimer">
          Join thousands of gardeners worldwide. Unsubscribe anytime.
        </p>
      </form>
    </div>
  </section>
);

// Main Blog Page Component
const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredPosts = getPostsByCategory(selectedCategory);

  return (
    <SharedBackground variant="page">
      <div className="blog-page">
        <div className="blog-header">
          <h1>The Growing Blog</h1>
          <p className="blog-subtitle">
            Stories, science, and inspiration from the world of seed-bearing confectionery
          </p>
        </div>
        
        <FeaturedSection />
        
        <div className="blog-content">
          <div className="blog-main">
            <div className="blog-controls">
              <h2>All Articles</h2>
              <p className="results-count">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} 
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>
            
            <BlogListing posts={filteredPosts} />
          </div>
          
          <BlogSidebar 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        
        <NewsletterSignup />
      </div>
    </SharedBackground>
  );
};

export default BlogPage; 