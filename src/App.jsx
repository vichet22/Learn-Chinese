import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Quizzes from "./components/Quizzes";
import Video from "./components/Video";
import Vocabulary from "./components/Vocabulary";
import Adsterra from "./components/adsterra";

// Featured videos for the home page
const featuredVideos = [
  {
    title:
      "30 Essential Adjectives You Must Know in Chinese   Basic Chinese Vocabularies",
    url: "https://ok.ru/videoembed/9382209129120",
    thumbnail:
      "https://placehold.co/320x180/e6f7ff/1890ff?text=Chinese+Conversation",
  },
  {
    title: "30 Basic Phrases You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382209063584",
    thumbnail:
      "https://placehold.co/320x180/f6ffed/52c41a?text=Chinese+Vocabulary",
  },
];

const Home = () => {
  const [videoLoadErrors, setVideoLoadErrors] = React.useState({});

  // Handle video loading errors
  const handleVideoError = (index) => {
    setVideoLoadErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <div className="home-container">
      <p className="home-intro">
        Welcome to our Chinese learning platform. Explore our featured videos to
        start your language journey.
      </p>

      {/* Top Adsterra banner ad */}
      
      <Adsterra placement="bottom" />
      


      <div className="featured-videos">
        <h2>Featured Videos</h2>
        <div className="video-grid">
          {featuredVideos.map((video, index) => (
            <div
              className="video-card"
              key={index}
              data-source={video.source || "other"}
            >
              {videoLoadErrors[index] ? (
                <div className="video-fallback">
                  <img
                    src={
                      video.thumbnail ||
                      "https://placehold.co/320x180/e0e0e0/666666?text=Video+Unavailable"
                    }
                    alt={video.title}
                    className="video-thumbnail"
                  />
                  <div className="video-error-overlay">
                    <p>Video could not be loaded</p>
                    <a
                      href={
                        video.source === "ok.ru"
                          ? video.url.replace("videoembed/", "video/")
                          : video.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="watch-external-btn"
                    >
                      Watch on{" "}
                      {video.source === "youtube"
                        ? "YouTube"
                        : video.source === "ok.ru"
                        ? "OK.ru"
                        : "External Site"}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="video-wrapper">
                  <iframe
                    src={video.url}
                    title={video.title}
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onError={() => handleVideoError(index)}
                  ></iframe>
                  <div className="video-fallback" style={{ display: "none" }}>
                    <img
                      src={
                        video.thumbnail ||
                        "https://placehold.co/320x180/e0e0e0/666666?text=Video+Preview"
                      }
                      alt={video.title}
                      className="video-thumbnail"
                    />
                  </div>
                </div>
              )}
              <h4>{video.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Adsterra banner ad */}
      <Adsterra placement="bottom" showSpinner={true} />

      <div className="home-cta">
        <h3>Ready to learn more?</h3>
        <p>
          Check out our full video library and quizzes to improve your Chinese
          skills.
        </p>
        <div className="cta-buttons">
          <a href="/vocabulary" className="cta-button">
            Learn Vocabulary
          </a>
          <a href="/video" className="cta-button">
            Browse All Videos
          </a>
          <a href="/quizzes" className="cta-button secondary">
            Try Our Quizzes
          </a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/video" element={<Video />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
