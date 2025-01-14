import Image from "next/image"
import styles from "./page.module.css"
import React from 'react'
import Head from 'next/head'


export default function Home() {
  return (
 
<>
<Head>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nancy | Xzect Labs</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link href="https://kit.fontawesome.com/a076d05399.js" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <link rel="stylesheet" href="css/styles.css" />
</>
</Head>


  <section id="home">
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <img src="Images\NancyLogo2.png" alt="Brand Logo" />
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#app">Application</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a href="#" className="download-btn">
          Download
        </a>
        <div className="toggle-bar">☰</div>
      </div>
    </header>
  </section>

  <section className="hero">
    <div className="container hero-container">
      <div className="hero-content">
        <h1>The Best Approach To Interior Design</h1>
        <p>
          Your One Stop Finance Empower Platform. Download Our App and Manage
          All Your Business Expenses.
        </p>
        <a href="#" className="btn">
          Get a Free Demo
        </a>
        <a href="#" className="btn1">
          See Pricing
        </a>
      </div>
      <div className="hero-image">
        <img src="Images\phones_logo.png" alt="Hero Image" />
      </div>
    </div>
  </section>
  <section id="services">
    <section className="features">
      <div className="container">
        <h1>SERVICES</h1>
        <h2>Build a Customer Centric Marketing Strategy</h2>
        <p>Below are the services and features we provide:</p>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-chart-line" />
            <h3>Market Research</h3>
            <p>
              Gain a comprehensive understanding of your industry landscape.
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-user-check" />
            <h3>User Experience</h3>
            <p>
              Evaluate the viability and potential of new products or services.
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-bullhorn" />
            <h3>Digital Marketing</h3>
            <p>
              Benchmark your performance against competitors, identify the
              strengths and weaknesses.
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-search" />
            <h3>SEO Services</h3>
            <p>
              Anticipate market shifts and emerging trends to stay ahead of the
              curve.
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-chart-pie" />
            <h3>Market Strategy</h3>
            <p>
              Our market research services are designed to provide maximum
              value.
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-laptop-code" />
            <h3>Software Development</h3>
            <p>We go beyond data collection to provide actionable insights.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-network-wired" />
            <h3>Affiliate Marketing</h3>
            <p>
              We understand that every business is unique and therefore requires
              different insights, plans and strategies.{" "}
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-code" />
            <h3>Website Development</h3>
            <p>
              Based on the marketing strategy we apply on your business, we also
              provide website development services accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>


    {/*Features 2 Section*/}
    <section id="features">
      <section className="features2">
        <div className="container features2-container">
          <div className="features2-image">
            <img src="Images\CatLaptop.jpg" alt="Features2 Image" />
          </div>
          <div className="features2-content">
            <h1>FEATURES</h1>
            <h2>Our Distinct Methodology to Ensure Your Success</h2>
            <a href="#" className="LearnMoreBtn">
              Learn More
            </a>
            <div className="features2-items">
              <div className="features2-item">
                <i className="fas fa-laptop-code" />
                <div className="features2-text">
                  <h3>Empowering You For Market Management</h3>
                  <p>
                    Gain the confidence to effectively oversee markets by
                    leveraging strategic insights and resources to drive
                    success.
                  </p>
                </div>
              </div>
              <div className="features2-item">
                <i className="fas fa-network-wired" />
                <div className="features2-text">
                  <h3>Manage Your Design and Architecture</h3>
                  <p>
                    Optimize task completion by efficiently managing time and
                    resources, ensuring timely delivery and enhanced efficiency.
                  </p>
                </div>
              </div>
              <div className="features2-item">
                <i className="fas fa-code" />
                <div className="features2-text">
                  <h3>Real-Time Presentations</h3>
                  <p>
                    Deliver presentations in real-time with confidence, using
                    strategic insights and resources to manage effectively.
                  </p>
                </div>
              </div>
              <div className="features2-item">
                <i className="fas fa-chart-pie" />
                <div className="features2-text">
                  <h3> Marketing Strategy</h3>
                  <p>
                    {" "}
                    Get the assistance you need regarding Marketing Strategies.
                    We provide it all!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Hero2 Section*/}
      <section className="hero2">
        <div className="container hero2-container">
          <div className="hero2-content">
            <h1>In-Depth Analysis of a Unique Case</h1>
            <p>
              We collaborate to manage and empower markets, leveraging both
              traditional and innovative channels to drive potential growth.
            </p>
            <a href="#" className="btn">
              Join Now
            </a>
            <a href="#" className="btn1">
              See Video
            </a>
          </div>
        </div>
      </section>
      {/*Application Download Section*/}
      <section id="app">
        <div className="container app-container">
          <div className="app-content">
            <h>APPLICATION</h>
            <h1>Ready to Start? Download Our App Right Now: </h1>
            <h2>
              With Rible, you can experience the convenience of making secure
              and hassle-free payments online. Our platform offers a quick and
              easy way to manage your transactions.
            </h2>
            <div className="app-items">
              <div className="app-item">
                <i className="fas fa-chart-line" />
                <div className="app-text">
                  <h3>1. Download</h3>
                  <p>
                    {" "}
                    Be a part of the millions that are taking advantage of this
                    app.
                  </p>
                </div>
              </div>
              <div className="app-item">
                <i className="fas fa-user-check" />
                <div className="app-text">
                  <h3>2. Setup Your Profile</h3>
                  <p>
                    Make a unique profile based on your inquiries and interests.{" "}
                  </p>
                </div>
              </div>
              <div className="app-item">
                <i className="fas fa-laptop-code" />
                <div className="app-text">
                  <h3>3. Start</h3>
                  <p>
                    {" "}
                    Get ready to dive into the adventure and hop on board with
                    us.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="app-image">
            <img src="Images\app-pic.jpg" alt="App Image" />
          </div>
        </div>
      </section>
      {/*Pricing Section*/}
      <section id="pricing">
        <section className="pricing">
          <div className="container pricing-container">
            <div className="pricing-content">
              <h>PRICING</h>
              <h1>Get high quality services for very affordable prices</h1>
              <a href="#" className="btn">
                Monthly
              </a>
              <a href="#" className="btn1">
                Annual
              </a>
              <p>Get more savings with our annual plan.</p>
            </div>
            <div className="pricing-grid">
              <div className="pricing-item">
                <img src="Images\std1.png" alt="Standard" />
                <h2>Standard</h2>
                <h3>$50</h3>
                <h4>per month</h4>
                <div className="pricing-list-container">
                  <ul className="pricing-list">
                    <li className="check">1 GB Storage</li>
                    <li className="check">3 Domains</li>
                    <li className="cross">5 Users</li>
                    <li className="cross">Free 24/7 Support</li>
                    <li className="cross">Earn Cashback</li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  Buy Standard
                </a>
              </div>
              <div className="pricing-item">
                <img src="Images\std2.png" alt="Premium" />
                <h2>Premium</h2>
                <h3>$80</h3>
                <h4>per month</h4>
                <div className="pricing-list-container">
                  <ul className="pricing-list">
                    <li className="check">1 GB Storage</li>
                    <li className="check">3 Domains</li>
                    <li className="check">5 Users</li>
                    <li className="cross">Free 24/7 Support</li>
                    <li className="cross">Earn Cashback</li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  Buy Premium
                </a>
              </div>
              <div className="pricing-item">
                <img src="Images\std3.png" alt="Gold" />
                <h2>Gold</h2>
                <h3>$100</h3>
                <h4>per month</h4>
                <div className="pricing-list-container">
                  <ul className="pricing-list">
                    <li className="check">1 GB Storage</li>
                    <li className="check">3 Domains</li>
                    <li className="check">5 Users</li>
                    <li className="check">Free 24/7 Support</li>
                    <li className="check">Earn Cashback</li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  Buy Gold
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Frequently Asked Questions */}
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="logo">
            <img src="Images\NancyLogo2.png" alt="Logo" />
            <h1>
              {" "}
              This website and everything in it are subject to copyright (just
              kidding, they're not LOL).{" "}
            </h1>
            <div className="contact">
              <a href="#">
                <i className="fas fa-envelope" /> Nancywebsite@example.com
              </a>
              <a href="#">
                <i className="fas fa-phone" /> +91 123 456 789
              </a>
            </div>
          </div>
          <div className="Quicklinks">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="Product">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">News &amp; Stories</a>
              </li>
              <li>
                <a href="#">Pricing Plans</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div className="Company">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Handshake</a>
              </li>
              <li>
                <a href="#">Company Website</a>
              </li>
              <li>
                <a href="#">Staff Profiles</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Footer 2 */}
      <footer className="footer2">
        <div className="container">
          <div className="end">
            <p>© 2024 Brand. Designed by Nancy Meena for Xzect Labs</p>
          </div>
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  </section>
</>

  )
}