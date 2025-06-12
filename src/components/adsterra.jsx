import React, { useEffect } from "react";
import "../style/adsterra.css";

const Adsterra = ({ placement = "banner", showSpinner = false }) => {
  useEffect(() => {
    if (placement === "native") {
      // Native Banner implementation
      const nativeScript = document.createElement("script");
      nativeScript.async = true;
      nativeScript.setAttribute("data-cfasync", "false");
      nativeScript.src =
        "//pl26896166.profitableratecpm.com/48aca291f9eaaaded0f034c3f7d81d5e/invoke.js";

      // Append to head for native banner
      document.head.appendChild(nativeScript);

      return () => {
        // Cleanup native script
        if (document.head.contains(nativeScript)) {
          document.head.removeChild(nativeScript);
        }
      };
    } else {
      // Regular banner implementation
      const adConfig = document.createElement("script");
      adConfig.type = "text/javascript";
      adConfig.innerHTML = `
        atOptions = {
          'key': 'f34e6130d1c93083f39a43e77c9fa5e8',
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        };
      `;

      // Create the external script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//www.highperformanceformat.com/f34e6130d1c93083f39a43e77c9fa5e8/invoke.js";
      script.async = true;

      // Append both to the div instead of head for better scoping
      const adContainer = document.getElementById("adsterra-banner");
      if (adContainer) {
        adContainer.appendChild(adConfig);
        adContainer.appendChild(script);
      }

      return () => {
        // Cleanup regular banner
        if (adContainer?.contains(adConfig)) {
          adContainer.removeChild(adConfig);
        }
        if (adContainer?.contains(script)) {
          adContainer.removeChild(script);
        }
      };
    }
  }, [placement]);

  const getContainerClass = () => {
    switch (placement) {
      case "top":
        return "adsterra-banner-container adsterra-top";
      case "bottom":
        return "adsterra-banner-container adsterra-bottom";
      case "sidebar":
        return "adsterra-banner-container adsterra-sidebar";
      case "native":
        return "adsterra-native-container";
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
      {placement === "native" ? (
        <div id="container-48aca291f9eaaaded0f034c3f7d81d5e">
          {/* Native banner injected here */}
        </div>
      ) : (
        <div className="adsterra-banner-728x90" id="adsterra-banner">
          {/* Regular banner injected here */}
        </div>
      )}
    </div>
  );
};

export default Adsterra;
