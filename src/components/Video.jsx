import React, { useState } from "react";
import "../style/Video.css";
import Adsterra from "./adsterra";

// Video data with titles, URLs, and thumbnails
const defaultVideos = [
  {
    title: "30 Essential Adjectives You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382209129120",
    thumbnail:
      "https://placehold.co/320x180/e6f7ff/1890ff?text=Chinese+Adjectives",
  },
  {
    title: "30 Basic Phrases You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382209063584",
    thumbnail:
      "https://placehold.co/320x180/f6ffed/52c41a?text=Chinese+Phrases",
  },
  {
    title: "30 Basic Adverbs You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208998048",
    thumbnail:
      "https://placehold.co/320x180/fff7e6/fa8c16?text=Chinese+Adverbs",
  },
  {
    title: "25 Basic Pronouns You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208932512",
    thumbnail:
      "https://placehold.co/320x180/f0f5ff/597ef7?text=Chinese+Pronouns",
  },
  {
    title: "20 Basic Measure Words You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208866976",
    thumbnail: "https://placehold.co/320x180/e6fffb/13c2c2?text=Measure+Words",
  },
  {
    title: "20 Basic Adverbs You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208801440",
    thumbnail: "https://placehold.co/320x180/fcffe6/a0d911?text=More+Adverbs",
  },
  {
    title: "10 Basic Prepositions You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208735904",
    thumbnail: "https://placehold.co/320x180/fff0f6/eb2f96?text=Prepositions",
  },
  {
    title: "10 Basic Particles You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208670368",
    thumbnail: "https://placehold.co/320x180/f9f0ff/722ed1?text=Particles",
  },
  {
    title: "10 Basic Conjunctions You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208604832",
    thumbnail: "https://placehold.co/320x180/e6f7ff/1890ff?text=Conjunctions",
  },

  {
    title: "10 Basic Interjections You Must Know in Chinese",
    url: "https://ok.ru/videoembed/9382208539296",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "HSK2 Vocabulary Flashcards – Adverb, Adjective & Function Words with Sample Sentences",
    url: "https://ok.ru/videoembed/9384922253984",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK2 Vocabulary Flashcards – Nouns with Sample Sentences (Part I)",
    url: "https://ok.ru/videoembed/9384922319520",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK1 Vocabulary Flashcards – Verbs with Sample Sentences",
    url: "https://ok.ru/videoembed/9384922122912",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "HSK1 Vocabulary Flashcards – Adverb, Adjective & Function Words with Sample Sentences",
    url: "https://ok.ru/videoembed/9384922188448",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "HSK1 Vocabulary Flashcards – Numeral & Measure Words with Sample Sentences",
    url: "https://ok.ru/videoembed/9384921991840",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK1 Vocabulary Flashcards - Pronouns with Sample Sentences",
    url: "https://ok.ru/videoembed/9384922057376",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK1 Vocabulary Flashcards – Nouns with Sample Sentences (Part II)",
    url: "https://ok.ru/videoembed/9384921926304",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK1 Vocabulary Flashcards – Nouns with Sample Sentences (Part I)",
    url: "https://ok.ru/videoembed/9384921795232",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "50 Essential Verbs You Must Know in Chinese   Basic Chinese Vocabularies   Level 1",
    url: "https://ok.ru/videoembed/9384921664160",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "50 Essential Noun Characters You Must Know in Chinese   Basic Chinese Vocabularies   Level 1",
    url: "https://ok.ru/videoembed/9384921598624",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "Family members in Chinese",
    url: "https://ok.ru/videoembed/9385503820448",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK2 Vocabulary Flashcards - Pronouns with Sample Sentences",
    url: "https://ok.ru/videoembed/9385503754912",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "Learning Chinese Grammar and Vocabulary with Bobo Conversation Series - Episode 3 Pay Bill",
    url: "https://ok.ru/videoembed/9385503689376",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "Learning Chinese Grammar and Vocabulary with Bobo Conversation Series - Episode 4 Four Seasons",
    url: "https://ok.ru/videoembed/9385503623840",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "Learning Chinese Grammar and Vocabulary with Bobo Conversation Series - Episode 1 New Classmate",
    url: "https://ok.ru/videoembed/9385503558304",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK2 Vocabulary Flashcards – Nouns with Sample Sentences (Part II)",
    url: "https://ok.ru/videoembed/9385503492768",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "Learning Chinese Grammar and Vocabulary with Bobo Conversation Series - Episode 2 Order Dishes",
    url: "https://ok.ru/videoembed/9385503361696",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "HSK2 Vocabulary Flashcards – Verbs with Sample Sentences",
    url: "https://ok.ru/videoembed/9385503296160",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title:
      "HSK2 Vocabulary Flashcards – Numeral & Measure Words with Sample Sentences",
    url: "https://ok.ru/videoembed/9385503230624",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },

  {
    title: "Master Number Reading in Chinese in 10 Minutes",
    url: "https://ok.ru/videoembed/9385503099552",
    thumbnail: "https://placehold.co/320x180/f6ffed/52c41a?text=Interjections",
  },
];

const Video = () => {
  const [videos] = useState(defaultVideos);
  const [videoLoadErrors, setVideoLoadErrors] = useState({});

  // Handle video loading errors
  const handleVideoError = (index) => {
    setVideoLoadErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <div className="video-container">
      <h2>Learning Videos</h2>
      <p>
        Watch helpful videos to enhance your listening, vocabulary, and grammar
        skills.
      </p>

      {/* Top ad */}
      <Adsterra />

      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index} data-source={video.source}>
            {videoLoadErrors[index] ? (
              // Fallback for videos that fail to load
              <div className="video-fallback">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="video-thumbnail"
                />
                <div className="video-error-overlay">
                  <p>Video could not be loaded</p>
                  <a
                    href={video.url.replace("videoembed/", "video/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="watch-external-btn"
                  >
                    Watch on OK.ru
                  </a>
                </div>
              </div>
            ) : (
              // Video player
              <div className="video-wrapper">
                <iframe
                  src={video.url}
                  title={video.title}
                  style={{ border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onError={() => handleVideoError(index)}
                ></iframe>
              </div>
            )}
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>

      {/* Bottom ad */}
      <Adsterra />

      <div className="content-with-sidebar">
        <div className="main-content">
          <h3>Why Learn Chinese?</h3>
          <p>
            Chinese is one of the most widely spoken languages in the world.
            Learning Chinese opens up opportunities for business, travel, and
            cultural exchange. Start your journey today with our carefully
            selected video resources.
          </p>
        </div>
        <div className="sidebar">
          {/* Sidebar ad */}
          <Adsterra placement="sidebar" />
        </div>
      </div>
    </div>
  );
};

export default Video;
