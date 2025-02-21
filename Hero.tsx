import React, { useEffect, useRef } from "react";
import { FaUsers, FaHeart, FaCheckCircle } from "react-icons/fa";
import "./Hero.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import kidneyImage from "./kidney.png";
import liverImage from "./liver.png";
import heartImage from "./heart.png";
import lungsImage from "./lungs.png";
import pancreasImage from "./pancreas.png";
import { Link } from "react-router-dom";

interface HeroProps {
  userData: { userType: string; name: string } | null;
}

const Hero: React.FC<HeroProps> = ({ userData }) => {
  const organs = [
    {
      name: "KIDNEY",
      image: kidneyImage,
      description:
        "Kidneys filter waste from the blood and help regulate blood pressure.",
    },
    {
      name: "LIVER",
      image: liverImage,
      description:
        "The liver plays a vital role in detoxification and metabolism.",
    },
    {
      name: "HEART",
      image: heartImage,
      description:
        "The heart pumps blood throughout the body, delivering oxygen and nutrients.",
    },
    {
      name: "LUNGS",
      image: lungsImage,
      description:
        "Lungs are responsible for gas exchange, taking in oxygen and expelling carbon dioxide.",
    },
    {
      name: "PANCREAS",
      image: pancreasImage,
      description:
        "The pancreas produces enzymes for digestion and hormones like insulin.",
    },
  ];

  const organBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const autoScroll = () => {
      if (organBoxRef.current) {
        organBoxRef.current.scrollLeft += 1.5;

        if (
          organBoxRef.current.scrollLeft >=
          organBoxRef.current.scrollWidth - organBoxRef.current.clientWidth
        ) {
          organBoxRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(autoScroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const organFacts = [
    "One organ donor can save up to 8 lives.",
    "Anyone can be a potential organ donor, regardless of age, race, or medical history.",
    "Organ donation is a selfless act that gives the gift of life.",
    "Organ donation is only considered after all efforts to save a patient's life have been exhausted.",
    "Organ donation is often a separate decision from burial arrangements.",
  ];

  return (
    <section className="hero">
      <Navbar userData={userData} />
      <div className="hero-content">
        <div className="hero-text">
          <h2>ONE ORGAN, MANY POSSIBILITIES</h2>
          <p>Connect with donors and recipients in your area</p>
          <div className="hero-buttons">
            <Link to="/donor-form" className="no-underline">
              <button>Donate Organ</button>
            </Link>

            <Link to="/form" className="no-underline">
              <button>Request Organ</button>
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-container">
            <FaUsers className="stat-icon" />
            <div className="stat">
              <h3>1500</h3>
              <p>Donors Helped</p>
            </div>
          </div>
          <div className="stat-container">
            <FaHeart className="stat-icon" />
            <div className="stat">
              <h3>1200</h3>
              <p>Recipients Helped</p>
            </div>
          </div>
          <div className="stat-container">
            <FaCheckCircle className="stat-icon" />
            <div className="stat">
              <h3>1800</h3>
              <p>Successful Donations</p>
            </div>
          </div>
        </div>

        <div className="organ-container" ref={organBoxRef}>
          {organs.map((organ) => (
            <div key={organ.name} className="organ-item">
              <div className="organ-text">
                <h3>{organ.name}</h3>
                <p>{organ.description}</p>
              </div>
              <img src={organ.image} alt={organ.name} className="organ-image" />
            </div>
          ))}
        </div>

        <div className="blood-donation-facts">
          <h2>ORGAN DONATION FACTS</h2>
          <div className="fact-cards">
            {organFacts.map((fact, index) => (
              <div key={index} className="fact-card">
                <p>{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
