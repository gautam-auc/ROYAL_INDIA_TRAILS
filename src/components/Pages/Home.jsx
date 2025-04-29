import React, { useEffect } from 'react';
import './Home.css'
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // ensures animation happens only once
    });
  }, [])
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1  data-aos="fade-down">Discover Incredible India</h1>
          <p  data-aos="fade-left">Find your perfect destination and book your next adventure today.</p>

          {/* Search Box */}
          <div className="search-container"  data-aos="fade-up">
            <input type="text" placeholder="Search destinations, hotels, activities..." />
            <button type="button">Search</button>
          </div>
        </div>
      </div>


      <section className="destinations section">
        <h2 className="section-title">🌍 Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <div className="image-wrapper">
              <img src="/ram-mandir.jpg" alt="Ram Mandir" />
            </div>
            <div className="card-info">
              <h3>Ayodhya</h3>
              <p>Visit the majestic Ram Mandir</p>
            </div>
          </div>

          <div className="destination-card">
            <div className="image-wrapper">
              <img src="/jaipur.jpg" alt="Jaipur" />
            </div>
            <div className="card-info">
              <h3>Jaipur</h3>
              <p>Explore the Pink City & royal forts</p>
            </div>
          </div>

          <div className="destination-card">
            <div className="image-wrapper">
              <img src="/goa.jpg" alt="Goa" />
            </div>
            <div className="card-info">
              <h3>Goa</h3>
              <p>Relax on beaches & enjoy nightlife</p>
            </div>
          </div>
        </div>
      </section>


      {/* Special Packages */}
      <section className="packages section text-center">
        <h2 className="mb-4 text-warning">🌟 Special Packages</h2>

        <div id="packageCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="card mx-auto p-4 border-0 shadow" style={{ maxWidth: '500px' }}>
                <img src="/golden-trial.jpg" className="card-img-top rounded" alt="Golden Triangle" />
                <div className="card-body">
                  <h3 className="text-primary">Golden Triangle Tour</h3>
                  <p>Delhi - Agra - Jaipur</p>
                  <span className="text-success fw-bold">Starting at ₹15,999</span>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card mx-auto p-4 border-0 shadow" style={{ maxWidth: '600px' }}>
                <img src="/goa.jpg" className="card-img-top rounded" alt="Goa Beach Holidays" />
                <div className="card-body">
                  <h3 className="text-primary">Goa Beach Holidays</h3>
                  <p>4 Nights | 5 Days</p>
                  <span className="text-success fw-bold">Starting at ₹9,999</span>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card mx-auto p-4 border-0 shadow" style={{ maxWidth: '600px' }}>
                <img src="/kerala.jpg" className="card-img-top rounded" alt="Kerala Backwaters" />
                <div className="card-body">
                  <h3 className="text-primary">Kerala Backwaters</h3>
                  <p>Alleppey - Munnar - Kochi</p>
                  <span className="text-success fw-bold">Starting at ₹18,499</span>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#packageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#packageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="why-choose-us text-center py-5 bg-light">
        <h2 className="text-warning mb-5">💎 Why Choose <span className="text-primary">Royal India Trails?</span></h2>
        <div className="features-grid container">
          <div className="feature card p-4 border-0 shadow-sm">
            <i className="fas fa-rupee-sign fa-2x text-success mb-3"></i>
            <h3 className="text-dark">Affordable Prices</h3>
            <p className="text-muted">Best prices guaranteed without compromising quality.</p>
          </div>
          <div className="feature card p-4 border-0 shadow-sm">
            <i className="fas fa-headset fa-2x text-info mb-3"></i>
            <h3 className="text-dark">24/7 Support</h3>
            <p className="text-muted">Always ready to assist you, anytime, anywhere.</p>
          </div>
          <div className="feature card p-4 border-0 shadow-sm">
            <i className="fas fa-map-marked-alt fa-2x text-danger mb-3"></i>
            <h3 className="text-dark">Expert Guides</h3>
            <p className="text-muted">Experience India with our knowledgeable guides.</p>
          </div>
        </div>
      </section>


      {/* Customer Testimonials */}
      <section className="testimonials py-5 bg-light text-center">
        <h2 className="text-warning mb-4">💬 What Our Travelers Say</h2>
        <div className="testimonial-cards container d-flex flex-wrap justify-content-center gap-4">
          <div className="testimonial card shadow p-4 border-0" style={{ maxWidth: '350px' }}>
            <p className="fst-italic">"Amazing trip! Everything was perfectly organized."</p>
            <h4 className="mt-3 text-primary">- Priya Sharma</h4>
          </div>
          <div className="testimonial card shadow p-4 border-0" style={{ maxWidth: '350px' }}>
            <p className="fst-italic">"The best experience I had in India. Highly recommend!"</p>
            <h4 className="mt-3 text-primary">- Alex Johnson</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter py-5 text-center bg-warning text-dark">
        <h2 className="mb-3">📬 Subscribe to our Newsletter</h2>
        <p className="mb-4">Stay updated on new destinations, offers, and discounts!</p>
        <form className="newsletter-form d-flex justify-content-center flex-wrap gap-2">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
            style={{ maxWidth: '300px' }}
          />
          <button type="submit" className="btn btn-dark px-4">Subscribe</button>
        </form>
      </section>



    </>
  );
};

export default Home;
