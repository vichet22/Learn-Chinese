import React from "react";
import "../style/Advertisement.css"; // Import the CSS file

// Sample ad data - in a real app, this would come from an ad service
const sampleAds = [
  {
    id: 1,
    title: "",
    description: "",
    imageUrl: "https://monetizepros.com/wp-content/uploads/2017/03/home-adsterra.png",
    link: "",
    type: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    imageUrl: "",
    link: "",
    type: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    imageUrl: "",
    link: "",
    type: "",
  },
];

/**
 * Advertisement component that displays ads
 * @param {Object} props
 * @param {string} props.type - Type of ad to display ('banner', 'sidebar', or 'random')
 * @param {number} props.count - Number of ads to display (default: 1)
 * @param {string} props.className - Additional CSS class for styling
 * @param {string} props.size - Size of the ad ('standard', '468x60', '728x90')
 */
const Advertisement = ({
  type = "banner",
  count = 1,
  className = "",
  size = "728x90",
}) => {
  // Filter ads by type or get random ads if type is 'random'
  const getAds = () => {
    let filteredAds = sampleAds;

    if (type !== "random") {
      filteredAds = sampleAds.filter((ad) => ad.type === type);
    }

    // Shuffle and get the requested number of ads
    return filteredAds.sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const adsToShow = getAds();

  // Determine size class
  const sizeClass = size === "728x90" ? "size-728x90" : "";

  return (
    <div className={`ad-container ${type}-ad ${sizeClass} ${className}`}>
      {adsToShow.map((ad) => (
        <div key={ad.id} className="ad-item">
          <a
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ad-link"
          >
            <img src={ad.imageUrl} alt={ad.title} className="ad-image" />
            <div className="ad-content">
              <h3 className="ad-title">{ad.title}</h3>
              <p className="ad-description">{ad.description}</p>
            </div>
            <div className="ad-badge">Ad</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;
