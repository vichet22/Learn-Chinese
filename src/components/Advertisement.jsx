import React, { useEffect } from "react";
import "../style/Advertisement.css"; // Import the CSS file

/**
 * Adsterra Banner Ad Component
 * Displays a 728x90 banner ad from Adsterra
 * @param {Object} props
 * @param {string} props.className - Additional CSS class for styling (optional)
 */
const AdsterraBanner = ({ className = "" }) => {
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
    <div className={`adsterra-banner-container ${className}`}>
      <div className="adsterra-banner-728x90">
        {/* The ad will be injected here by Adsterra script */}
      </div>
    </div>
  );
};

// Advertisement component now only uses Adsterra banners

/**
 * Advertisement component - now only displays Adsterra banner ads
 * @param {Object} props
 * @param {string} props.className - Additional CSS class for styling (optional)
 */
const Advertisement = ({ className = "" }) => {
  return <AdsterraBanner className={className} />;
};

export default Advertisement;
export { AdsterraBanner };
