import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <Link
            to="/country"
            className="btn bg-white-box" // Use existing classes for base styling
            style={{
              // Explicit styles to ensure it looks good
              backgroundColor: '#ffffff', // White background
              color: '#1a1a1a',          // Dark/Black text
              fontSize: '16px',          // Larger font
              fontWeight: '700',         // Bold text
              padding: '15px 30px',      // Generous padding for size
              borderRadius: '8px',       // Rounded corners
              textDecoration: 'none',    // Remove underline
              display: 'inline-flex',    // Allows for icon alignment
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Add a shadow for depth
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
              e.currentTarget.style.transform = 'translateY(-2px)'; // Lift effect on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Start Exploring <FaLongArrowAltRight style={{ fontSize: '20px' }} />
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};