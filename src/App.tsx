import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { quizData } from './data/quizData';
import {
  AppScreen,
  LanguageCategory,
  QuizDifficulty,
  QuizSettings,
  ActiveQuizState,
  ReviewFilter,
  Question,
} from './types';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const App: React.FC = () => {
  // Navigation & Screens
  const [screen, setScreen] = useState<AppScreen>('home-screen');
  const [currentLangKey, setCurrentLangKey] = useState<string>('c');
  const [currentTopicKey, setCurrentTopicKey] = useState<string>('arrays');

  // Search & Filters
  const [langSearch, setLangSearch] = useState<string>('');
  const [langCategory, setLangCategory] = useState<LanguageCategory>('all');
  const [topicSearch, setTopicSearch] = useState<string>('');

  // Settings Modal
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [modalTopicKey, setModalTopicKey] = useState<string>('arrays');
  const [quizSettings, setQuizSettings] = useState<QuizSettings>({
    count: 5,
    difficulty: 'mixed',
  });

  // Active Quiz State
  const [activeQuiz, setActiveQuiz] = useState<ActiveQuizState>({
    questions: [],
    currentIndex: 0,
    userAnswers: [],
    startTime: null,
    endTime: null,
    isFinished: false,
  });
  const [selectionHintVisible, setSelectionHintVisible] = useState<boolean>(false);

  // Review Screen
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  }, []);

  const currentLang = quizData[currentLangKey] || quizData['c'];
  const currentTopic = currentLang?.topics[currentTopicKey] || Object.values(currentLang.topics)[0];

  // Scroll to top on screen change
  const navigateTo = useCallback((newScreen: AppScreen) => {
    setScreen(newScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtered Languages
  const filteredLanguages = useMemo(() => {
    const query = langSearch.trim().toLowerCase();
    return Object.keys(quizData).filter((key) => {
      const lang = quizData[key];
      if (langCategory !== 'all' && lang.category !== langCategory) return false;
      if (query) {
        const matchesName = lang.name.toLowerCase().includes(query);
        const matchesDesc = lang.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }
      return true;
    });
  }, [langSearch, langCategory]);

  // Filtered Topics
  const filteredTopics = useMemo(() => {
    if (!currentLang) return [];
    const query = topicSearch.trim().toLowerCase();
    const topicKeys = Object.keys(currentLang.topics);
    return topicKeys.filter((tKey) => {
      const topic = currentLang.topics[tKey];
      if (query) {
        const matchesName = topic.name.toLowerCase().includes(query);
        const matchesDesc = topic.desc.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }
      return true;
    });
  }, [currentLang, topicSearch]);

  // Handlers
  const selectLanguage = (langKey: string) => {
    setCurrentLangKey(langKey);
    setTopicSearch('');
    navigateTo('topics-screen');
  };

  const openSettings = (topicKey: string) => {
    setModalTopicKey(topicKey);
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const startQuizWithConfig = () => {
    const lang = quizData[currentLangKey];
    const topic = lang?.topics[modalTopicKey];
    if (!topic || !topic.questions.length) {
      alert('No questions available for this topic!');
      return;
    }

    setCurrentTopicKey(modalTopicKey);
    setIsSettingsOpen(false);

    // 1. Deduplicate questions by question text to guarantee each question is unique
    const seenTexts = new Set<string>();
    const deduplicated: Question[] = [];
    for (const q of topic.questions) {
      const norm = q.q.trim().toLowerCase();
      if (!seenTexts.has(norm)) {
        seenTexts.add(norm);
        deduplicated.push(q);
      }
    }

    // 2. Filter by difficulty if user requested specific difficulty
    let eligiblePool = deduplicated;
    if (quizSettings.difficulty !== 'mixed') {
      const filtered = deduplicated.filter((q) => q.difficulty === quizSettings.difficulty);
      if (filtered.length > 0) {
        eligiblePool = filtered;
      }
    }

    // 3. Dynamic question selection without hardcoded limits
    const requestedCount = quizSettings.count;
    const availableCount = eligiblePool.length;
    const countToTake = Math.min(requestedCount, availableCount);

    if (countToTake < requestedCount) {
      showToast(
        `Loaded all ${countToTake} available questions for ${quizSettings.difficulty} difficulty (requested ${requestedCount}).`
      );
    }

    const shuffled = shuffleArray(eligiblePool);
    const chosenQuestions = shuffled.slice(0, countToTake);

    setActiveQuiz({
      questions: chosenQuestions,
      currentIndex: 0,
      userAnswers: new Array(chosenQuestions.length).fill(null),
      startTime: Date.now(),
      endTime: null,
      isFinished: false,
      requestedCount,
    });
    setSelectionHintVisible(false);
    navigateTo('quiz-screen');
  };

  const selectOption = (optIndex: number) => {
    setSelectionHintVisible(false);
    setActiveQuiz((prev) => {
      const updatedAnswers = [...prev.userAnswers];
      updatedAnswers[prev.currentIndex] = optIndex;
      return {
        ...prev,
        userAnswers: updatedAnswers,
      };
    });
  };

  const prevQuestion = () => {
    if (activeQuiz.currentIndex > 0) {
      setSelectionHintVisible(false);
      setActiveQuiz((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex - 1,
      }));
    }
  };

  const finishQuiz = useCallback(() => {
    setActiveQuiz((prev) => ({
      ...prev,
      endTime: Date.now(),
      isFinished: true,
    }));
    navigateTo('result-screen');
  }, [navigateTo]);

  const nextQuestion = useCallback(() => {
    const currentSelection = activeQuiz.userAnswers[activeQuiz.currentIndex];
    if (currentSelection === null || currentSelection === undefined) {
      setSelectionHintVisible(true);
      return;
    }

    if (activeQuiz.currentIndex < activeQuiz.questions.length - 1) {
      setSelectionHintVisible(false);
      setActiveQuiz((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
      }));
    } else {
      finishQuiz();
    }
  }, [activeQuiz.userAnswers, activeQuiz.currentIndex, activeQuiz.questions.length, finishQuiz]);

  const exitQuiz = () => {
    const confirmed = window.confirm(
      'Are you sure you want to exit the quiz? Your current progress will be lost.'
    );
    if (confirmed) {
      navigateTo('topics-screen');
    }
  };

  const retryQuiz = () => {
    setModalTopicKey(currentTopicKey);
    startQuizWithConfig();
  };

  const goToTopics = () => {
    setTopicSearch('');
    navigateTo('topics-screen');
  };

  const goHome = () => {
    setLangSearch('');
    setLangCategory('all');
    navigateTo('home-screen');
  };

  const openReview = (filter: ReviewFilter = 'all') => {
    setReviewFilter(filter);
    navigateTo('review-screen');
  };

  // Keyboard navigation for Quiz Screen
  useEffect(() => {
    if (screen !== 'quiz-screen') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === 'A') selectOption(0);
      else if (key === 'B') selectOption(1);
      else if (key === 'C') selectOption(2);
      else if (key === 'D') selectOption(3);
      else if (e.key === 'Enter') nextQuestion();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen, activeQuiz.currentIndex, activeQuiz.userAnswers, nextQuestion]);

  // Quiz live score calculation
  const liveScore = useMemo(() => {
    let score = 0;
    activeQuiz.userAnswers.forEach((ans, idx) => {
      if (ans !== null && activeQuiz.questions[idx] && ans === activeQuiz.questions[idx].a) {
        score++;
      }
    });
    return score;
  }, [activeQuiz.userAnswers, activeQuiz.questions]);

  // Final Results Statistics
  const resultStats = useMemo(() => {
    const total = activeQuiz.questions.length;
    let correct = 0;
    activeQuiz.questions.forEach((q, idx) => {
      if (activeQuiz.userAnswers[idx] === q.a) {
        correct++;
      }
    });
    const wrong = total - correct;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    let stars = '⭐⭐⭐⭐⭐';
    if (percentage >= 90) stars = '⭐⭐⭐⭐⭐';
    else if (percentage >= 75) stars = '⭐⭐⭐⭐';
    else if (percentage >= 50) stars = '⭐⭐⭐';
    else if (percentage >= 30) stars = '⭐⭐';
    else stars = '⭐';

    let message = '';
    if (percentage === 100) {
      message = 'Outstanding! Perfect score! You have completely mastered this topic.';
    } else if (percentage >= 80) {
      message = 'Excellent work! You demonstrate strong technical proficiency in this topic.';
    } else if (percentage >= 60) {
      message = 'Good job! You have a solid grasp, but there are a few areas you can brush up on.';
    } else if (percentage >= 40) {
      message = 'Fair effort! Review the detailed answers below to learn from your mistakes.';
    } else {
      message = 'Keep practicing! Review the explanations below and try the quiz again.';
    }

    return { total, correct, wrong, percentage, stars, message };
  }, [activeQuiz.questions, activeQuiz.userAnswers]);

  // Current Question
  const currentQuestion: Question | undefined = activeQuiz.questions[activeQuiz.currentIndex];

  // Helper for rendering inline code safely
  const renderFormattedPrompt = (text: string) => {
    // If text contains backticks e.g. `main()`, format into code tag
    if (!text.includes('`')) {
      return text;
    }
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i}>{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return (
    <div className="app">
      {/* ====================================================================
          NAVIGATION BAR
          ==================================================================== */}
      <header className="nav">
        <div className="nav-left">
          <button className="logo-btn" onClick={goHome} title="Go to Home" type="button">
            <div className="logo-icon">🧠</div>
            <span className="logo-title">Quiz Master</span>
          </button>

          <div className="nav-breadcrumbs" id="breadcrumbTrail">
            {screen === 'home-screen' && <span className="crumb-active">Languages</span>}

            {screen === 'topics-screen' && (
              <>
                <span onClick={goHome} style={{ cursor: 'pointer' }}>
                  Languages
                </span>
                <span className="separator">/</span>
                <span className="crumb-active">{currentLang ? currentLang.name : 'Topics'}</span>
              </>
            )}

            {screen === 'quiz-screen' && (
              <>
                <span onClick={goHome} style={{ cursor: 'pointer' }}>
                  Home
                </span>
                <span className="separator">/</span>
                <span onClick={goToTopics} style={{ cursor: 'pointer' }}>
                  {currentLang ? currentLang.name : ''}
                </span>
                <span className="separator">/</span>
                <span className="crumb-active">{currentTopic ? currentTopic.name : 'Quiz'}</span>
              </>
            )}

            {(screen === 'result-screen' || screen === 'review-screen') && (
              <>
                <span onClick={goHome} style={{ cursor: 'pointer' }}>
                  Home
                </span>
                <span className="separator">/</span>
                <span className="crumb-active">
                  {screen === 'review-screen' ? 'Review' : 'Results'}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="nav-right">
          <div className="badge" id="navBadge">
            {screen === 'home-screen' && `${Object.keys(quizData).length} Languages`}
            {screen === 'topics-screen' &&
              `${currentLang ? Object.keys(currentLang.topics).length : 0} Topics`}
            {screen === 'quiz-screen' && `${activeQuiz.questions.length} Questions`}
            {screen === 'result-screen' && `${resultStats.percentage}% Score`}
            {screen === 'review-screen' && `${activeQuiz.questions.length} Questions`}
          </div>
          <button className="nav-btn" onClick={goHome} title="Home Screen" type="button">
            🏠 Home
          </button>
        </div>
      </header>

      {/* ====================================================================
          SCREEN 1: PROGRAMMING LANGUAGE SELECTION (HOME)
          ==================================================================== */}
      {screen === 'home-screen' && (
        <section id="home-screen" className="screen active">
          <div className="card hero">
            <div className="icon">🎯</div>
            <h1>Test & Level Up Your Knowledge</h1>
            <p>
              Select a programming language below to explore topic-focused quizzes with real-time
              feedback and detailed answer explanations.
            </p>

            {/* Search and Category Filters */}
            <div className="search-filter-bar">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  id="langSearchInput"
                  value={langSearch}
                  onChange={(e) => setLangSearch(e.target.value)}
                  placeholder="Search language (e.g. C, Python, Java)..."
                  autoComplete="off"
                />
              </div>

              <div className="filter-pills">
                {(
                  [
                    { id: 'all', label: 'All' },
                    { id: 'systems', label: 'Systems (C, C++)' },
                    { id: 'web', label: 'Web (JS, HTML, CSS)' },
                    { id: 'enterprise', label: 'Enterprise (Java)' },
                    { id: 'scripting', label: 'Scripting & Mobile' },
                    { id: 'database', label: 'Database (SQL)' },
                  ] as { id: LanguageCategory; label: string }[]
                ).map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`filter-pill ${langCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setLangCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Languages Cards Grid */}
            <div className="languages-grid" id="languagesGrid">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((key) => {
                  const lang = quizData[key];
                  const topicCount = Object.keys(lang.topics).length;
                  let questionCount = 0;
                  Object.values(lang.topics).forEach((t) => (questionCount += t.questions.length));

                  return (
                    <div
                      key={key}
                      className="lang-card"
                      onClick={() => selectLanguage(key)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') selectLanguage(key);
                      }}
                    >
                      <div className="lang-icon-wrap">{lang.icon}</div>
                      <h3 className="lang-name">{lang.name}</h3>
                      <p className="lang-desc">{lang.description}</p>
                      <div className="lang-footer">
                        <span className="topic-count">
                          {topicCount} Topics • {questionCount}+ Qs
                        </span>
                        <span className="lang-arrow">Select →</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  style={{
                    gridColumn: '1 / -1',
                    textAlign: 'center',
                    padding: '40px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <p style={{ fontSize: '32px', marginBottom: '8px' }}>🔍</p>
                  <p>
                    No programming languages found matching &quot;<strong>{langSearch}</strong>
                    &quot;.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          SCREEN 2: TOPIC SELECTION BASED ON LANGUAGE
          ==================================================================== */}
      {screen === 'topics-screen' && currentLang && (
        <section id="topics-screen" className="screen active">
          <div className="card">
            <div className="topic-header-bar">
              <button className="back-link" onClick={goHome} type="button">
                ← Back to Languages
              </button>
              <div className="search-box" style={{ maxWidth: '300px' }}>
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  id="topicSearchInput"
                  value={topicSearch}
                  onChange={(e) => setTopicSearch(e.target.value)}
                  placeholder="Filter topics..."
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Language Banner */}
            <div className="topic-banner">
              <div className="topic-banner-icon" id="topicBannerIcon">
                {currentLang.icon}
              </div>
              <div className="topic-banner-info">
                <h2 id="topicBannerTitle">{currentLang.name} Topics</h2>
                <p id="topicBannerDesc">
                  Choose a topic below to test your {currentLang.name} knowledge with targeted
                  questions.
                </p>
              </div>
            </div>

            {/* Topics Grid */}
            <div className="topics-grid" id="topicsGrid">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((tKey) => {
                  const topic = currentLang.topics[tKey];
                  return (
                    <div
                      key={tKey}
                      className="topic-card"
                      onClick={() => openSettings(tKey)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') openSettings(tKey);
                      }}
                    >
                      <div>
                        <div className="topic-card-top">
                          <div className="topic-icon-badge">{topic.icon || '📘'}</div>
                          <h4 className="topic-title">{topic.name}</h4>
                        </div>
                        <p className="topic-desc">{topic.desc}</p>
                      </div>
                      <div className="topic-card-footer">
                        <span className="q-count-tag">{topic.questions.length} Questions</span>
                        <button
                          className="primary btn-sm"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openSettings(tKey);
                          }}
                        >
                          Start Quiz →
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  style={{
                    gridColumn: '1 / -1',
                    textAlign: 'center',
                    padding: '40px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <p style={{ fontSize: '32px', marginBottom: '8px' }}>📂</p>
                  <p>
                    No topics found matching &quot;<strong>{topicSearch}</strong>&quot;.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          SCREEN 3: TOPIC-BASED ACTIVE QUIZ
          ==================================================================== */}
      {screen === 'quiz-screen' && currentQuestion && (
        <section id="quiz-screen" className="screen active">
          <div className="card">
            {/* Meta Details */}
            <div className="quiz-header-meta">
              <div className="quiz-tags">
                <span className="topic-pill" id="quizTopicPill">
                  {currentLang.name} → {currentTopic.name}
                </span>
                <span
                  className={`diff-pill diff-${currentQuestion.difficulty}`}
                  id="quizDiffPill"
                >
                  {currentQuestion.difficulty}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span id="counter" style={{ fontSize: '14px', fontWeight: 700 }}>
                  Question {activeQuiz.currentIndex + 1} of {activeQuiz.questions.length}
                </span>
                <span className="quiz-score-badge" id="liveScore">
                  Score: {liveScore}
                </span>
              </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="progress">
              <div
                id="bar"
                className="bar"
                style={{
                  width: `${Math.round(
                    ((activeQuiz.currentIndex + 1) / activeQuiz.questions.length) * 100
                  )}%`,
                }}
              />
            </div>

            {/* Shortage Notice if fewer eligible questions exist than requested count */}
            {Boolean(activeQuiz.requestedCount && activeQuiz.questions.length < activeQuiz.requestedCount) && (
              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  fontSize: '13px',
                  color: '#f59e0b',
                  margin: '10px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 500,
                }}
              >
                <span>ℹ️</span>
                <span>
                  Showing all <strong>{activeQuiz.questions.length}</strong> available questions matching your filter (you requested {activeQuiz.requestedCount}).
                </span>
              </div>
            )}

            {/* Question Prompt Area */}
            <div className="question-box">
              <div className="question-number-tag" id="questionNumTag">
                Question {activeQuiz.currentIndex + 1} of {activeQuiz.questions.length}
              </div>
              <div id="questionText" className="question">
                {renderFormattedPrompt(currentQuestion.q)}
              </div>
            </div>

            {/* 4 Multiple-Choice Options */}
            <div id="optionsBox" className="options">
              {currentQuestion.o.map((optText, optIdx) => {
                const prefixes = ['A', 'B', 'C', 'D'];
                const isSelected = activeQuiz.userAnswers[activeQuiz.currentIndex] === optIdx;

                return (
                  <button
                    key={optIdx}
                    type="button"
                    className={`option ${isSelected ? 'selected' : ''}`}
                    onClick={() => selectOption(optIdx)}
                  >
                    <span className="option-prefix">{prefixes[optIdx] || optIdx + 1}</span>
                    <span className="option-text">{renderFormattedPrompt(optText)}</span>
                    <span className="option-status-icon">✓</span>
                  </button>
                );
              })}
            </div>

            {/* Unselected Warning Hint */}
            {selectionHintVisible && (
              <div className="selection-hint" id="selectionHint">
                ⚠️ Please select an answer before continuing!
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="actions">
              <button type="button" className="secondary" onClick={exitQuiz}>
                ✕ Exit Quiz
              </button>
              <div className="actions-right">
                <button
                  type="button"
                  id="prevBtn"
                  className={`outline-btn ${activeQuiz.currentIndex === 0 ? 'disabled' : ''}`}
                  disabled={activeQuiz.currentIndex === 0}
                  onClick={prevQuestion}
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  id="nextBtn"
                  className="primary"
                  onClick={nextQuestion}
                >
                  {activeQuiz.currentIndex === activeQuiz.questions.length - 1
                    ? 'Submit Quiz 🎉'
                    : 'Next →'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          SCREEN 4: FINAL RESULTS PAGE
          ==================================================================== */}
      {screen === 'result-screen' && (
        <section id="result-screen" className="screen active">
          <div className="card result">
            <div className="icon">🎉</div>
            <h1>Quiz Completed!</h1>

            <div className="result-badge-row">
              <span className="topic-pill" id="resultLangTag">
                {currentLang.name}
              </span>
              <span className="topic-pill" id="resultTopicTag">
                {currentTopic.name}
              </span>
              <span
                className={`diff-pill diff-${quizSettings.difficulty}`}
                id="resultDiffTag"
              >
                {quizSettings.difficulty.toUpperCase()}
              </span>
            </div>

            <div id="finalScore" className="score">
              {resultStats.correct} / {resultStats.total}
            </div>
            <div>
              <span className="percentageBadge percentage-badge" id="percentageBadge">
                {resultStats.percentage}% Score
              </span>
            </div>
            <div className="stars" id="resultStars">
              {resultStats.stars}
            </div>

            <p className="result-message" id="resultMessage">
              {resultStats.message}
            </p>

            {/* Detailed Result Metrics */}
            <div className="statrow">
              <div className="stat">
                <b id="statTotal">{resultStats.total}</b>
                <span className="small">Total Questions</span>
              </div>
              <div className="stat stat-correct">
                <b id="statCorrect">{resultStats.correct}</b>
                <span className="small">Correct Answers</span>
              </div>
              <div className="stat stat-wrong">
                <b id="statWrong">{resultStats.wrong}</b>
                <span className="small">Wrong Answers</span>
              </div>
              <div className="stat stat-accuracy">
                <b id="statAccuracy">{resultStats.percentage}%</b>
                <span className="small">Accuracy Rate</span>
              </div>
            </div>

            {/* Result Action Buttons */}
            <div className="result-actions">
              <button
                className="primary review-btn-prominent"
                type="button"
                onClick={() => openReview('all')}
              >
                📋 Review Answers
              </button>
              <div className="secondary-actions-row">
                <button className="secondary" type="button" onClick={retryQuiz}>
                  🔄 Retry Quiz
                </button>
                <button className="secondary" type="button" onClick={goToTopics}>
                  📂 Try Another Topic
                </button>
                <button className="secondary" type="button" onClick={goHome}>
                  🌐 Choose Another Language
                </button>
                <button className="outline-btn" type="button" onClick={goHome}>
                  🏠 Home
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          SCREEN 5: ANSWER REVIEW PAGE
          ==================================================================== */}
      {screen === 'review-screen' && (
        <section id="review-screen" className="screen active">
          <div className="card">
            <div className="review-header-card">
              <div className="review-summary-info">
                <h2 id="reviewTitle">
                  📋 Answer Review: {currentLang.name} → {currentTopic.name}
                </h2>
                <p id="reviewSubtitle">
                  Total: {resultStats.total} • Correct: {resultStats.correct} • Wrong:{' '}
                  {resultStats.wrong} • Accuracy: {resultStats.percentage}%
                </p>
              </div>
              <button
                className="outline-btn btn-sm"
                type="button"
                onClick={() => navigateTo('result-screen')}
              >
                ← Back to Scorecard
              </button>
            </div>

            {/* Filter tabs for quick review */}
            <div className="review-filter-tabs">
              <button
                type="button"
                className={`review-filter-btn ${reviewFilter === 'all' ? 'active' : ''}`}
                onClick={() => setReviewFilter('all')}
              >
                All Questions ({resultStats.total})
              </button>
              <button
                type="button"
                className={`review-filter-btn ${reviewFilter === 'correct' ? 'active' : ''}`}
                onClick={() => setReviewFilter('correct')}
              >
                ✅ Correct ({resultStats.correct})
              </button>
              <button
                type="button"
                className={`review-filter-btn ${reviewFilter === 'wrong' ? 'active' : ''}`}
                onClick={() => setReviewFilter('wrong')}
              >
                ❌ Wrong ({resultStats.wrong})
              </button>
            </div>

            {/* Review Question Cards List */}
            <div className="review-list" id="reviewList">
              {activeQuiz.questions.map((q, idx) => {
                const userAns = activeQuiz.userAnswers[idx];
                const isCorrect = userAns === q.a;

                if (reviewFilter === 'correct' && !isCorrect) return null;
                if (reviewFilter === 'wrong' && isCorrect) return null;

                const prefixes = ['A', 'B', 'C', 'D'];
                const userAnsText =
                  userAns !== null && userAns !== undefined ? q.o[userAns] : 'Not answered';
                const correctAnsText = q.o[q.a];

                return (
                  <div
                    key={idx}
                    className={`review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`}
                  >
                    <div className="review-item-header">
                      <span className="review-q-num">
                        Question {idx + 1} of {activeQuiz.questions.length}
                      </span>
                      <span
                        className={`review-status-tag ${
                          isCorrect ? 'status-tag-correct' : 'status-tag-wrong'
                        }`}
                      >
                        {isCorrect ? '✅ Correct' : '❌ Wrong'}
                      </span>
                    </div>

                    <h4 className="review-question-text">{renderFormattedPrompt(q.q)}</h4>

                    <div className="review-options-grid">
                      {q.o.map((optText, optIdx) => {
                        let rowClass = 'review-option-row';
                        let badge = null;

                        if (optIdx === q.a) {
                          rowClass += ' is-correct-answer';
                          badge = (
                            <span className="review-badge-pill badge-correct-ans">
                              Correct Answer ✅
                            </span>
                          );
                        } else if (optIdx === userAns && !isCorrect) {
                          rowClass += ' user-wrong';
                          badge = (
                            <span className="review-badge-pill badge-your-ans">
                              Your Answer ❌
                            </span>
                          );
                        }

                        return (
                          <div key={optIdx} className={rowClass}>
                            <span>
                              <strong>{prefixes[optIdx]}.</strong>{' '}
                              {renderFormattedPrompt(optText)}
                            </span>
                            {badge}
                          </div>
                        );
                      })}
                    </div>

                    <div className="review-answers-comparison">
                      <div className="answer-line">
                        <span className="answer-line-label">Your Answer:</span>
                        <span>
                          <strong>{renderFormattedPrompt(userAnsText)}</strong>{' '}
                          {isCorrect ? '✅' : '❌'}
                        </span>
                      </div>
                      <div className="answer-line">
                        <span className="answer-line-label">Correct Answer:</span>
                        <span style={{ color: 'var(--success)', fontWeight: 700 }}>
                          {renderFormattedPrompt(correctAnsText)} ✅
                        </span>
                      </div>
                    </div>

                    {q.explanation && (
                      <div className="review-explanation">
                        💡 <b>Explanation:</b> {renderFormattedPrompt(q.explanation)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Review Footer Navigation */}
            <div className="review-footer-actions">
              <button className="primary" type="button" onClick={retryQuiz}>
                🔄 Retry Quiz
              </button>
              <button className="secondary" type="button" onClick={goToTopics}>
                📂 Try Another Topic
              </button>
              <button className="secondary" type="button" onClick={goHome}>
                🌐 Choose Another Language
              </button>
              <button className="outline-btn" type="button" onClick={goHome}>
                🏠 Home
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          QUIZ SETTINGS MODAL DIALOG
          ==================================================================== */}
      {isSettingsOpen && (
        <div
          className="modal-overlay"
          id="settingsModal"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSettings();
          }}
        >
          <div className="modal-card">
            <div className="modal-header">
              <div>
                <h3>Quiz Settings</h3>
                <span className="modal-topic-badge" id="modalTopicBadge">
                  {currentLang.name} →{' '}
                  {currentLang.topics[modalTopicKey]?.name || modalTopicKey}
                </span>
              </div>
              <button
                className="close-btn"
                onClick={closeSettings}
                title="Close Settings"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Question Count Setting */}
            <div className="setting-group">
              <label className="setting-label">Number of Questions</label>
              <div className="setting-options-grid">
                {[5, 10, 15].map((num) => (
                  <div
                    key={num}
                    className={`setting-chip ${quizSettings.count === num ? 'selected' : ''}`}
                    onClick={() => setQuizSettings((s) => ({ ...s, count: num }))}
                    role="button"
                    tabIndex={0}
                  >
                    {num} Questions
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty Setting */}
            <div className="setting-group">
              <label className="setting-label">Difficulty Level</label>
              <div className="setting-options-grid">
                {(
                  [
                    { id: 'mixed', label: 'Mixed' },
                    { id: 'easy', label: 'Easy' },
                    { id: 'medium', label: 'Medium' },
                    { id: 'hard', label: 'Hard' },
                  ] as { id: QuizDifficulty; label: string }[]
                ).map((diff) => (
                  <div
                    key={diff.id}
                    className={`setting-chip ${
                      quizSettings.difficulty === diff.id ? 'selected' : ''
                    }`}
                    onClick={() => setQuizSettings((s) => ({ ...s, difficulty: diff.id }))}
                    role="button"
                    tabIndex={0}
                  >
                    {diff.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Helper Notice */}
            {(() => {
              const currentTopic = currentLang?.topics[modalTopicKey];
              const allQs = currentTopic?.questions || [];
              const matchingQs =
                quizSettings.difficulty === 'mixed'
                  ? allQs
                  : allQs.filter((q) => q.difficulty === quizSettings.difficulty);
              const totalMatching = matchingQs.length;
              return (
                <div className="modal-info-note" id="modalInfoNote">
                  <div>
                    This topic contains <strong>{allQs.length}</strong> verified questions{' '}
                    {quizSettings.difficulty !== 'mixed' && (
                      <span>({totalMatching} matching <em>{quizSettings.difficulty}</em> level)</span>
                    )}.
                  </div>
                  {quizSettings.count > totalMatching && totalMatching > 0 ? (
                    <div style={{ marginTop: '5px', color: '#f59e0b', fontWeight: 600 }}>
                      ℹ️ You selected {quizSettings.count} questions. Since {totalMatching} match this difficulty filter, all {totalMatching} will be loaded.
                    </div>
                  ) : (
                    <div style={{ marginTop: '5px', color: 'var(--success)', fontWeight: 500 }}>
                      ✓ Exactly {quizSettings.count} questions will be loaded.
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Modal Footer */}
            <div className="modal-actions">
              <button type="button" className="outline-btn" onClick={closeSettings}>
                Cancel
              </button>
              <button type="button" className="primary" onClick={startQuizWithConfig}>
                Start Quiz 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <div className="toast show" id="toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default App;
