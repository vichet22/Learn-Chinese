import React, { useEffect } from "react";
import "../style/adsterra.css";

const Adsterra = ({ placement = "banner", showSpinner = false }) => {
  useEffect(() => {
    // Create config script (inline)
    const adConfig = document.createElement("script");
    adConfig.type = "text/javascript";
    adConfig.innerHTML = `
      atOptions = {
        'key': '20f0d91981b55e2489b2faf3bba88917',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `;

    // Create the external script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//www.highperformanceformat.com/20f0d91981b55e2489b2faf3bba88917/invoke.js";
    script.async = true;

    // Append both to the div instead of head for better scoping
    const adContainer = document.getElementById("adsterra-banner");
    if (adContainer) {
      adContainer.appendChild(adConfig);
      adContainer.appendChild(script);
    }

    return () => {
      // Cleanup
      if (adContainer?.contains(adConfig)) {
        adContainer.removeChild(adConfig);
      }
      if (adContainer?.contains(script)) {
        adContainer.removeChild(script);
      }
    };
  }, []);

  const getContainerClass = () => {
    switch (placement) {
      case "top":
        return "adsterra-banner-container adsterra-top";
      case "bottom":
        return "adsterra-banner-container adsterra-bottom";
      case "sidebar":
        return "adsterra-banner-container adsterra-sidebar";
      default:
        return "adsterra-banner-container";
    }
  };

  return (
    <div className={getContainerClass()}>
      {showSpinner && (
        <div className="adsterra-loading">
          <div className="adsterra-spinner"></div>
          <span></span>
        </div>
      )}
      <div className="adsterra-banner-728x90" id="adsterra-banner">
        {/* Adsterra banner injected here */}
      </div>
    </div>
  );
};

export default Adsterra;
