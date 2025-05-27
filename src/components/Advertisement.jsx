import React, { useEffect } from "react";
import "../style/Advertisement.css"; // Import the CSS file

/**
 * Adsterra Banner Ad Component
 * Displays a 728x90 banner ad from Adsterra
 */
const AdsterraBanner = () => {
  useEffect(() => {
    // Create and append the Adsterra script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "//www.highperformanceformat.com/20f0d91981b55e2489b2faf3bba88917/invoke.js";

    // Create the configuration script
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key' : '20f0d91981b55e2489b2faf3bba88917',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

    // Append scripts to document head
    document.head.appendChild(configScript);
    document.head.appendChild(script);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      if (document.head.contains(configScript)) {
        document.head.removeChild(configScript);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="adsterra-banner-container">
      <div className="adsterra-banner-728x90">
        {/* The ad will be injected here by Adsterra script */}
      </div>
    </div>
  );
};

// Sample ad data - in a real app, this would come from an ad service

/**
 * Advertisement component that displays ads
 * @param {Object} props
 * @param {string} props.type - Type of ad to display ('banner', 'sidebar', 'random', or 'adsterra')
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
  // If type is 'adsterra', return the Adsterra banner component
  if (type === "adsterra") {
    return <AdsterraBanner />;
  }
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
export { AdsterraBanner };
