import React, { useState, useCallback } from "react";
import "../style/Vocabulary.css";
import Adsterra from "./adsterra";
import core1000WordList from "../data/core1000WordList";

const Vocabulary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWords, setSelectedWords] = useState([]);
  const [showExamples, setShowExamples] = useState({});
  const [speaking, setSpeaking] = useState(false);
  const [currentSpeech, setCurrentSpeech] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.8);
  const [speechVolume, setSpeechVolume] = useState(1.0);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(20);

  // Get categories for Core 1000 Word List
  const core1000Categories = [
    "All",
    ...new Set(core1000WordList.map((word) => word.category)),
  ];

  // Filter vocabulary based on search term and category
  const filteredVocabulary = core1000WordList.filter((word) => {
    const matchesSearch =
      word.character.includes(searchTerm) ||
      word.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.meaning.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || word.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Get current words for pagination
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = filteredVocabulary.slice(
    indexOfFirstWord,
    indexOfLastWord
  );

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredVocabulary.length / wordsPerPage);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Speech synthesis function
  const speakText = useCallback(
    (text, lang = "zh-CN") => {
      // Stop any current speech
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        if (currentSpeech === text) {
          setCurrentSpeech(null);
          setSpeaking(false);
          return;
        }
      }

      // Create a new speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechRate; // Use the user-selected rate
      utterance.volume = speechVolume; // Use the user-selected volume

      // Set event handlers
      utterance.onstart = () => {
        setSpeaking(true);
        setCurrentSpeech(text);
      };

      utterance.onend = () => {
        setSpeaking(false);
        setCurrentSpeech(null);
      };

      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event);
        setSpeaking(false);
        setCurrentSpeech(null);
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);
    },
    [currentSpeech, speechRate, speechVolume]
  );

  // Toggle showing examples for a word
  const toggleExamples = (id) => {
    setShowExamples((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle word selection
  const toggleWordSelection = (id) => {
    if (selectedWords.includes(id)) {
      setSelectedWords(selectedWords.filter((wordId) => wordId !== id));
    } else {
      setSelectedWords([...selectedWords, id]);
    }
  };

  return (
    <div className="vocabulary-container">
      <div className="core-word-list-header">
        <div className="core-word-list-logo">
          <div className="logo-circle">
            <span>1000</span>
          </div>
        </div>
        <div className="core-word-list-title">
          <h2>Chinese Core 1000 Word List</h2>
          <p>{filteredVocabulary.length} WORDS</p>
        </div>
      </div>

      {/* Top ad */}
      <Adsterra />

      <div className="vocabulary-controls">
        <div className="vocabulary-search">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search (English, Chinese or Romanization)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">Search</button>
          </div>
          <div className="category-dropdown">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {core1000Categories.map((category) => (
                <option key={category} value={category}>
                  {category === "All"
                    ? "Category (All)"
                    : category
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="speech-controls">
          <h4>Speech Settings</h4>
          <div className="speech-control-item">
            <label htmlFor="speech-rate">Speed:</label>
            <input
              type="range"
              id="speech-rate"
              min="0.5"
              max="1.5"
              step="0.1"
              value={speechRate}
              onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
            />
            <span className="speech-value">{speechRate.toFixed(1)}x</span>
          </div>
          <div className="speech-control-item">
            <label htmlFor="speech-volume">Volume:</label>
            <input
              type="range"
              id="speech-volume"
              min="0"
              max="1"
              step="0.1"
              value={speechVolume}
              onChange={(e) => setSpeechVolume(parseFloat(e.target.value))}
            />
            <span className="speech-value">
              {Math.round(speechVolume * 100)}%
            </span>
          </div>
          <div className="speech-info">
            <p>Click on 🔊 to hear Chinese characters</p>
            <p>Click on 🔈 to hear pinyin pronunciation</p>
          </div>
        </div>
      </div>

      <div className="vocabulary-list">
        {currentWords.map((word) => (
          <div key={word.id} className="vocabulary-item">
            <div className="word-checkbox">
              <input
                type="checkbox"
                checked={selectedWords.includes(word.id)}
                onChange={() => toggleWordSelection(word.id)}
              />
            </div>
            <div className="word-image">
              {word.image &&
              word.image.length <= 4 &&
              /[\u{1F000}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(
                word.image
              ) ? (
                <div className="emoji-icon">{word.image}</div>
              ) : (
                <img src={word.image} alt={word.character} />
              )}
            </div>
            <div className="word-details">
              <div className="word-main">
                <div className="word-character">
                  <span
                    className={`audio-icon ${
                      currentSpeech === word.character ? "speaking" : ""
                    }`}
                    onClick={() => speakText(word.character)}
                    title="Click to hear pronunciation"
                  >
                    🔊
                  </span>
                  <span className="character">{word.character}</span>
                  <span className="part-of-speech">({word.partOfSpeech})</span>
                </div>
                <div className="word-pronunciation">
                  <div className="pinyin">
                    {word.pinyin}
                    <button
                      className={`pinyin-audio-btn ${
                        currentSpeech === word.pinyin ? "speaking" : ""
                      }`}
                      onClick={() =>
                        speakText(
                          word.pinyin
                            .replace(/[āáǎà]/g, "a")
                            .replace(/[ēéěè]/g, "e")
                            .replace(/[īíǐì]/g, "i")
                            .replace(/[ōóǒò]/g, "o")
                            .replace(/[ūúǔù]/g, "u"),
                          "zh-CN"
                        )
                      }
                      title="Hear pinyin pronunciation"
                    >
                      <span className="pinyin-audio-icon">🔈</span>
                    </button>
                  </div>
                  <div className="meaning">{word.meaning}</div>
                </div>
              </div>

              <div className="word-examples">
                {word.examples.slice(0, 1).map((example, index) => (
                  <div key={index} className="example">
                    <div className="example-character">
                      <span
                        className={`audio-icon ${
                          currentSpeech === example.character ? "speaking" : ""
                        }`}
                        onClick={() => speakText(example.character)}
                        title="Click to hear pronunciation"
                      >
                        🔊
                      </span>
                      <span>{example.character}</span>
                    </div>
                    <div className="example-pronunciation">
                      <div className="pinyin">
                        {example.pinyin}
                        <button
                          className={`pinyin-audio-btn ${
                            currentSpeech === example.pinyin ? "speaking" : ""
                          }`}
                          onClick={() =>
                            speakText(
                              example.pinyin
                                .replace(/[āáǎà]/g, "a")
                                .replace(/[ēéěè]/g, "e")
                                .replace(/[īíǐì]/g, "i")
                                .replace(/[ōóǒò]/g, "o")
                                .replace(/[ūúǔù]/g, "u"),
                              "zh-CN"
                            )
                          }
                          title="Hear pinyin pronunciation"
                        >
                          <span className="pinyin-audio-icon">🔈</span>
                        </button>
                      </div>
                      <div className="meaning">{example.meaning}</div>
                    </div>
                  </div>
                ))}

                {word.examples.length > 1 && (
                  <div className="more-examples">
                    <button
                      className="toggle-examples"
                      onClick={() => toggleExamples(word.id)}
                    >
                      {showExamples[word.id]
                        ? "Hide examples"
                        : `${word.examples.length - 1} MORE EXAMPLE${
                            word.examples.length - 1 > 1 ? "S" : ""
                          }`}
                    </button>
                  </div>
                )}

                {showExamples[word.id] &&
                  word.examples.slice(1).map((example, index) => (
                    <div key={index} className="example">
                      <div className="example-character">
                        <span
                          className={`audio-icon ${
                            currentSpeech === example.character
                              ? "speaking"
                              : ""
                          }`}
                          onClick={() => speakText(example.character)}
                          title="Click to hear pronunciation"
                        >
                          🔊
                        </span>
                        <span>{example.character}</span>
                      </div>
                      <div className="example-pronunciation">
                        <div className="pinyin">
                          {example.pinyin}
                          <button
                            className={`pinyin-audio-btn ${
                              currentSpeech === example.pinyin ? "speaking" : ""
                            }`}
                            onClick={() =>
                              speakText(
                                example.pinyin
                                  .replace(/[āáǎà]/g, "a")
                                  .replace(/[ēéěè]/g, "e")
                                  .replace(/[īíǐì]/g, "i")
                                  .replace(/[ōóǒò]/g, "o")
                                  .replace(/[ūúǔù]/g, "u"),
                                "zh-CN"
                              )
                            }
                            title="Hear pinyin pronunciation"
                          >
                            <span className="pinyin-audio-icon">🔈</span>
                          </button>
                        </div>
                        <div className="meaning">{example.meaning}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {/* Previous page button */}
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className={currentPage === 1 ? "disabled" : ""}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {/* First page */}
          {currentPage > 3 && <button onClick={() => paginate(1)}>1</button>}

          {/* Ellipsis if needed */}
          {currentPage > 4 && <span className="pagination-ellipsis">...</span>}

          {/* Pages around current page */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) => page >= currentPage - 1 && page <= currentPage + 1
            )
            .filter((page) => page > 0 && page <= totalPages)
            .map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={currentPage === page ? "active" : ""}
              >
                {page}
              </button>
            ))}

          {/* Ellipsis if needed */}
          {currentPage < totalPages - 3 && (
            <span className="pagination-ellipsis">...</span>
          )}

          {/* Last page */}
          {currentPage < totalPages - 2 && (
            <button onClick={() => paginate(totalPages)}>{totalPages}</button>
          )}

          {/* Next page button */}
          <button
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            className={currentPage === totalPages ? "disabled" : ""}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}

      {/* Bottom ad */}
      <Adsterra />
    </div>
  );
};

export default Vocabulary;
