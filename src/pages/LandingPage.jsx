import React from 'react'
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="landing-section">
      <div className="landing-content">
        <h1 className="landing-title">MIDORI GARDEN</h1>

        <p>
          Discover a wide selection of healthy and vibrant houseplants that
          bring freshness and life into your home. Each plant is carefully
          hand-selected to ensure it’s strong, well-grown, and ready to thrive 
          in your care. Browse our collection, find the one that catches your eye,
          and easily add it to your cart. Don’t wait too long, make your purchase
          before it’s gone!
        </p>

        <Link to="/products" className="landing-btn">
          Get Started
        </Link>
      </div>
    </section>
  );
}
