<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gamified MIL Missions - UNESCO Media Literacy Platform</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        :root {
            --background: hsl(240, 10%, 3.9%);
            --foreground: hsl(0, 0%, 98%);
            --card: hsl(240, 10%, 3.9%);
            --card-foreground: hsl(0, 0%, 98%);
            --primary: hsl(217, 91%, 60%);
            --primary-foreground: hsl(0, 0%, 98%);
            --secondary: hsl(240, 3.7%, 15.9%);
            --secondary-foreground: hsl(0, 0%, 98%);
            --muted: hsl(240, 3.7%, 15.9%);
            --muted-foreground: hsl(240, 5%, 64.9%);
            --accent: hsl(142, 76%, 36%);
            --accent-foreground: hsl(0, 0%, 98%);
            --destructive: hsl(0, 62.8%, 30.6%);
            --destructive-foreground: hsl(0, 0%, 98%);
            --border: hsl(240, 3.7%, 15.9%);
            --success: hsl(160, 84%, 39%);
            --warning: hsl(43, 96%, 56%);
            --error: hsl(0, 84%, 60%);
            --radius: 0.75rem;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--background);
            color: var(--foreground);
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
        }

        /* Navigation */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-primary);
            z-index: 1000;
            padding: 16px 0;
        }
        .navbar-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .navbar-brand {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text-primary);
        }
        .navbar-logo {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, var(--accent), var(--text-secondary));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            color: var(--bg-primary);
            font-size: 16px;
        }
        .navbar-title {
            font-weight: 600;
            font-size: 1.2rem;
        }
        .navbar-badge {
            font-size: 10px;
            color: var(--text-tertiary);
            padding: 2px 6px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 4px;
            margin-left: 8px;
        }
        .navbar-nav {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .nav-link {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        .nav-link:hover {
            color: var(--text-primary);
            background: rgba(255, 255, 255, 0.05);
        }
        .nav-link.active {
            color: var(--accent);
            background: rgba(255, 255, 255, 0.1);
        }
        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 20px;
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
        }
        body {
            padding-top: 80px;
        }
        @media (max-width: 768px) {
            .navbar-container { padding: 0 16px; }
            .mobile-menu-toggle { display: block; }
            .navbar-nav {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(10, 10, 10, 0.98);
                backdrop-filter: blur(20px);
                border-bottom: 1px solid var(--border-primary);
                flex-direction: column;
                padding: 16px;
                gap: 4px;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            .navbar-nav.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            .nav-link {
                width: 100%;
                justify-content: flex-start;
                padding: 12px 16px;
            }
            .navbar-title { display: none; }
        }

        /* Main Content */
        .main {
            padding-top: 80px;
            padding: 80px 16px 32px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            margin-bottom: 48px;
        }

        .header h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            margin-bottom: 16px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header p {
            font-size: 1.25rem;
            color: var(--muted-foreground);
            max-width: 600px;
            margin: 0 auto;
        }

        /* User Stats */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
            margin-bottom: 48px;
        }

        .stat-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            text-align: center;
        }

        .stat-value {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 8px;
        }

        .stat-label {
            color: var(--muted-foreground);
            font-size: 14px;
        }

        /* Mission Grid */
        .missions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 32px;
            margin-bottom: 48px;
        }

        .mission-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 32px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .mission-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .mission-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .mission-card:hover::before {
            opacity: 1;
        }

        .mission-card.red {
            border-color: rgba(239, 68, 68, 0.3);
        }
        .mission-card.red::before {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));
        }

        .mission-card.amber {
            border-color: rgba(245, 158, 11, 0.3);
        }
        .mission-card.amber::before {
            background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05));
        }

        .mission-card.emerald {
            border-color: rgba(16, 185, 129, 0.3);
        }
        .mission-card.emerald::before {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
        }

        .mission-card.purple {
            border-color: rgba(139, 92, 246, 0.3);
        }
        .mission-card.purple::before {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05));
        }

        .mission-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;
        }

        .mission-icon {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
        }

        .mission-icon.red { background: rgba(239, 68, 68, 0.2); }
        .mission-icon.amber { background: rgba(245, 158, 11, 0.2); }
        .mission-icon.emerald { background: rgba(16, 185, 129, 0.2); }
        .mission-icon.purple { background: rgba(139, 92, 246, 0.2); }

        .mission-info h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .mission-meta {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .difficulty-badge {
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .difficulty-badge.medium { background: var(--error); color: white; }
        .difficulty-badge.hard { background: var(--warning); color: black; }
        .difficulty-badge.easy { background: var(--success); color: white; }
        .difficulty-badge.expert { background: #8b5cf6; color: white; }

        .mission-description {
            color: var(--muted-foreground);
            line-height: 1.6;
            margin-bottom: 24px;
        }

        .mission-progress {
            margin-bottom: 16px;
        }

        .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            font-size: 14px;
        }

        .progress-bar-container {
            background: var(--muted);
            height: 6px;
            border-radius: 3px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            border-radius: 3px;
            transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-bar.red { background: var(--error); }
        .progress-bar.amber { background: var(--warning); }
        .progress-bar.emerald { background: var(--success); }
        .progress-bar.purple { background: #8b5cf6; }

        .start-button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .start-button.red { background: var(--error); color: white; }
        .start-button.amber { background: var(--warning); color: black; }
        .start-button.emerald { background: var(--success); color: white; }
        .start-button.purple { background: #8b5cf6; color: white; }

        .start-button:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }

        /* Mission Interface */
        .mission-interface {
            display: none;
            max-width: 1000px;
            margin: 0 auto;
        }

        .mission-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 32px;
        }

        .back-button {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 20px;
            background: var(--muted);
            color: var(--foreground);
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .back-button:hover {
            background: var(--border);
        }

        .mission-info-header {
            text-align: center;
        }

        .mission-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .mission-meta-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            color: var(--muted-foreground);
        }

        .question-container {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 32px;
        }

        .question-text {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 24px;
        }

        /* Drag and Drop */
        .drag-drop-container {
            display: flex;
            gap: 32px;
            margin: 24px 0;
        }

        .draggable-section, .dropzone-section {
            flex: 1;
        }

        .section-title {
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--foreground);
        }

        .draggable-items {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .draggable {
            padding: 16px;
            background: var(--muted);
            border: 2px solid var(--border);
            border-radius: 12px;
            cursor: grab;
            transition: all 0.3s ease;
            user-select: none;
        }

        .draggable:hover {
            border-color: var(--primary);
            background: var(--secondary);
        }

        .draggable.dragging {
            opacity: 0.7;
            cursor: grabbing;
        }

        .dropzone {
            min-height: 120px;
            padding: 20px;
            border: 2px dashed var(--border);
            border-radius: 12px;
            margin-bottom: 16px;
            transition: all 0.3s ease;
            position: relative;
        }

        .dropzone.real {
            border-color: var(--success);
            background: rgba(16, 185, 129, 0.1);
        }

        .dropzone.fake {
            border-color: var(--error);
            background: rgba(239, 68, 68, 0.1);
        }

        .dropzone-title {
            text-align: center;
            font-weight: 600;
            margin-bottom: 12px;
        }

        .dropzone.real .dropzone-title {
            color: var(--success);
        }

        .dropzone.fake .dropzone-title {
            color: var(--error);
        }

        .dropzone.drag-over {
            border-style: solid;
            transform: scale(1.02);
        }

        /* Answer Options */
        .answer-options {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin: 24px 0;
        }

        .answer-option {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px;
            background: var(--muted);
            border: 2px solid var(--border);
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .answer-option:hover {
            border-color: var(--primary);
            background: var(--secondary);
        }

        .answer-option.selected {
            border-color: var(--primary);
            background: rgba(59, 130, 246, 0.1);
        }

        .answer-option.correct {
            border-color: var(--success);
            background: rgba(16, 185, 129, 0.1);
        }

        .answer-option.incorrect {
            border-color: var(--error);
            background: rgba(239, 68, 68, 0.1);
        }

        .option-radio {
            width: 20px;
            height: 20px;
            border: 2px solid var(--border);
            border-radius: 50%;
            position: relative;
        }

        .answer-option.selected .option-radio {
            border-color: var(--primary);
        }

        .answer-option.selected .option-radio::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: var(--primary);
            border-radius: 50%;
        }

        /* Image Grid */
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            margin: 24px 0;
        }

        .image-option {
            cursor: pointer;
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 3px solid transparent;
        }

        .image-option:hover {
            transform: scale(1.02);
            border-color: var(--primary);
        }

        .image-option img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
        }

        /* Buttons */
        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn-primary {
            background: var(--primary);
            color: var(--primary-foreground);
        }

        .btn-primary:hover {
            background: hsl(217, 91%, 55%);
        }

        .btn-success {
            background: var(--success);
            color: white;
        }

        .btn-success:hover {
            background: hsl(160, 84%, 35%);
        }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .action-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-top: 32px;
        }

        /* Feedback */
        .question-feedback {
            display: none;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            margin: 24px 0;
        }

        .feedback-content {
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }

        .feedback-icon {
            font-size: 24px;
        }

        .feedback-text {
            flex: 1;
        }

        .feedback-status {
            font-weight: 600;
            margin-bottom: 8px;
        }

        .feedback-status.correct {
            color: var(--success);
        }

        .feedback-status.incorrect {
            color: var(--error);
        }

        .feedback-explanation {
            color: var(--muted-foreground);
            line-height: 1.6;
        }

        /* Leaderboard */
        .leaderboard-section {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 32px;
            margin-top: 48px;
        }

        .leaderboard-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
        }

        .leaderboard-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.5rem;
            font-weight: 700;
        }

        .user-score-badge {
            background: var(--accent);
            color: var(--accent-foreground);
            padding: 8px 16px;
            border-radius: 12px;
            font-weight: 600;
        }

        .leaderboard-entries {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .leaderboard-entry {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            background: var(--muted);
            border-radius: 12px;
        }

        .entry-info {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .entry-rank {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
        }

        .entry-rank.gold {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #000;
        }

        .entry-rank.silver {
            background: linear-gradient(135deg, #C0C0C0, #808080);
            color: #000;
        }

        .entry-rank.bronze {
            background: linear-gradient(135deg, #CD7F32, #8B4513);
            color: #fff;
        }

        .entry-rank.regular {
            background: var(--border);
            color: var(--muted-foreground);
        }

        .entry-details h4 {
            font-weight: 600;
            margin-bottom: 2px;
        }

        .entry-details p {
            font-size: 12px;
            color: var(--muted-foreground);
        }

        .entry-score {
            text-align: right;
        }

        .entry-score .score {
            font-weight: 700;
            font-size: 16px;
        }

        .entry-score .label {
            font-size: 12px;
            color: var(--muted-foreground);
        }

        /* Mission Review Popup */
        .review-question-container {
            transition: all 0.3s ease;
        }

        .review-details-animated {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }

        .review-details-animated.open {
            max-height: 300px;
        }

        .review-toggle-btn:hover {
            background: rgba(255, 255, 255, 0.05) !important;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .navbar-container {
                padding: 0 16px;
            }
            
            .navbar-title {
                display: none;
            }
            
            .main {
                padding: 80px 16px 32px;
            }
            
            .missions-grid {
                grid-template-columns: 1fr;
            }
            
            .drag-drop-container {
                flex-direction: column;
                gap: 24px;
            }
            
            .image-grid {
                grid-template-columns: 1fr;
            }
            
            .mission-nav {
                flex-direction: column;
                gap: 16px;
            }
        }

        /* Animations */
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .mission-card, .stat-card {
            animation: slideIn 0.6s ease forwards;
        }

        .mission-card:nth-child(1) { animation-delay: 0.1s; }
        .mission-card:nth-child(2) { animation-delay: 0.2s; }
        .mission-card:nth-child(3) { animation-delay: 0.3s; }
    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="navbar-container">
            <a href="index.html" class="navbar-brand">
                <div class="navbar-logo">P</div>
                <span class="navbar-title">Prompt Builder</span>
                <span class="navbar-badge">UNESCO MIL</span>
            </a>
            <div class="navbar-nav" id="navbarNav">
                <a href="index.html" class="nav-link"><span>🏠</span> Home</a>
                <a href="builder.html" class="nav-link"><span>🛠️</span> Builder</a>
                <a href="analyzer.html" class="nav-link"><span>📊</span> Analyzer</a>
                <a href="missions.html" class="nav-link active"><span>🎯</span> Missions</a>
                <a href="learning.html" class="nav-link"><span>📚</span> Learning</a>
            </div>
            <button class="mobile-menu-toggle" id="mobileMenuToggle">☰</button>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main">
        <!-- Mission Selection View -->
        <div id="missionSelection">
            <!-- Header -->
            <div class="header">
                <h1>Gamified MIL Missions</h1>
                <p>Build critical thinking skills through interactive challenges and earn points on the leaderboard</p>
            </div>

            <!-- User Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value" style="color: var(--primary);" id="userTotalScore">0</div>
                    <div class="stat-label">Total Score</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: var(--accent);" id="missionsCompleted">0</div>
                    <div class="stat-label">Missions Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: var(--warning);" id="achievements">3</div>
                    <div class="stat-label">Achievements</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: #8b5cf6;" id="globalRank">#42</div>
                    <div class="stat-label">Global Rank</div>
                </div>
            </div>

            <!-- Mission Cards -->
            <div class="missions-grid" id="missionsGrid">
                <!-- Mission cards will be populated by JavaScript -->
            </div>

            <!-- Leaderboard -->
            <div class="leaderboard-section">
                <div class="leaderboard-header">
                    <h2 class="leaderboard-title">
                        <span>🏆</span>
                        Global Leaderboard
                    </h2>
                    <div class="user-score-badge">
                        Your Score: <span id="userScoreDisplay">0</span> points
                    </div>
                </div>
                <div class="leaderboard-entries">
                    <div class="leaderboard-entry">
                        <div class="entry-info">
                            <div class="entry-rank gold">1</div>
                            <div class="entry-details">
                                <h4>Alex Chen</h4>
                                <p>MIL Expert</p>
                            </div>
                        </div>
                        <div class="entry-score">
                            <div class="score">2,450</div>
                            <div class="label">points</div>
                        </div>
                    </div>
                    <div class="leaderboard-entry">
                        <div class="entry-info">
                            <div class="entry-rank silver">2</div>
                            <div class="entry-details">
                                <h4>Maria Rodriguez</h4>
                                <p>Critical Thinker</p>
                            </div>
                        </div>
                        <div class="entry-score">
                            <div class="score">1,890</div>
                            <div class="label">points</div>
                        </div>
                    </div>
                    <div class="leaderboard-entry">
                        <div class="entry-info">
                            <div class="entry-rank bronze">3</div>
                            <div class="entry-details">
                                <h4>James Wilson</h4>
                                <p>AI Aware</p>
                            </div>
                        </div>
                        <div class="entry-score">
                            <div class="score">1,340</div>
                            <div class="label">points</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mission Interface -->
        <div id="missionInterface" class="mission-interface">
            <div class="mission-nav">
                <button class="back-button" onclick="returnToMissions()">
                    <span>←</span>
                    Back to Missions
                </button>
                <div class="mission-info-header">
                    <h2 class="mission-title" id="missionTitle"></h2>
                    <div class="mission-meta-info">
                        <span id="missionProgress">Question 1 of 5</span>
                        <span>•</span>
                        <span id="missionScore">Score: 0</span>
                    </div>
                </div>
            </div>

            <div class="question-container" id="questionContainer">
                <div class="question-text" id="questionText"></div>
                <div id="questionContent"></div>
                <div id="questionFeedback" class="question-feedback">
                    <div class="feedback-content" id="feedbackContent"></div>
                </div>
            </div>

            <div class="action-buttons">
                <button id="submitAnswerBtn" class="btn btn-primary" onclick="submitAnswer()" disabled>
                    Submit Answer
                </button>
                <button id="nextQuestionBtn" class="btn btn-success" onclick="nextQuestion()" style="display: none;">
                    Next Question
                </button>
                <button id="completeMissionBtn" class="btn btn-success" onclick="completeMission()" style="display: none;">
                    Complete Mission 🎉
                </button>
            </div>
        </div>
    </main>

    <script>
        // Global variables
        let currentMission = null;
        let currentQuestionIndex = 0;
        let missionScore = 0;
        let userTotalScore = parseInt(localStorage.getItem('milScore') || '0');
        let selectedAnswer = null;

        // Mission data
        const missions = {
            'spot-fake': {
                title: 'Spot the Fake',
                icon: '🔍',
                difficulty: 'MEDIUM',
                pointsPerQuestion: 10,
                description: 'Identify AI-generated content from real content. Test your ability to detect deepfakes, synthetic text, and manipulated media.',
                totalQuestions: 6,
                colorScheme: 'red',
                questions: [
                    {
                        type: 'drag-and-drop',
                        question: 'Drag the statements to the correct categories: Real or Fake.',
                        content: {
                            statements: [
                                'AI can write poetry indistinguishable from humans.',
                                'AI can think and feel emotions like humans.',
                                'AI is used to detect diseases earlier than doctors.',
                                'AI can predict the future with 100% accuracy.',
                            ],
                            answers: {
                                real: ['AI can write poetry indistinguishable from humans.', 'AI is used to detect diseases earlier than doctors.'],
                                fake: ['AI can think and feel emotions like humans.', 'AI can predict the future with 100% accuracy.']
                            }
                        },
                        explanation: 'AI can create convincing content and assist in medical diagnosis, but it cannot truly feel emotions or predict the future with certainty.',
                    },
                    {
                        type: 'image',
                question: 'Which of these images is AI-generated?',
                newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                content: {
                    optionA: { img: 'assets/real 1.jpg', isAI: false },
                    optionB: { img: 'assets/ai 1.jpg', isAI: true },
                    optionC: { img: 'assets/real 2.jpg', isAI: false }
                },
                        correctAnswer: 'optionB',
                        explanation: 'AI-generated portraits often have subtle asymmetries and unnatural details in eyes, teeth, or hair patterns.'
                    },
                    {
                        type: 'text',
                question: 'Which news headline was likely generated by AI?',
                newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                content: {
                    optionA: { text: 'Local Mayor Announces New Park Development Plan', isAI: false },
                    optionB: { text: 'Breaking: Revolutionary Scientists Discover Unprecedented Breakthrough in Quantum Computing Applications', isAI: true },
                    optionC: { text: 'Weather Alert: Heavy Rain Expected This Weekend', isAI: false }
                },
                        correctAnswer: 'optionB',
                        explanation: 'AI-generated headlines often use excessive superlatives and buzzwords like "revolutionary," "unprecedented," and "breakthrough" together.'
                    },
                    {
  type: 'audio',
  question: 'Which audio clip shows signs of being AI-generated speech?',
  newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
  content: {
    optionA: {
      audio: 'assets/audio1.mp3',
      isAI: false,
      text: '[Natural speech with slight background noise and breathing]'
    },
    optionB: {
      audio: 'audio/ai 1.mp3',
      isAI: true,
      text: '[Crystal clear speech with uniform tone and no natural pauses]'
    },
    optionC: {
      audio: 'assets/audio3.mp3',
      isAI: false,
      text: '[Speech with natural variations in pace and emphasis]'
    }
   },
                        correctAnswer: 'optionB',
                        explanation: 'AI-generated speech often lacks natural breathing patterns, background noise, and has unnaturally consistent tone.'
                    },
                    {
                        type: 'social',
                question: 'Which social media post pattern suggests AI generation?',
                newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                content: {
                    optionA: { text: 'Personal story with specific details and emotions', isAI: false },
                    optionB: { text: 'Generic motivational content with perfect grammar and trending hashtags', isAI: true },
                    optionC: { text: 'Casual update with typos and local references', isAI: false }
                },
                        correctAnswer: 'optionB',
                        explanation: 'AI-generated social media content often lacks personal specificity and uses overly perfect grammar with trending elements.'
                    },
                    {
                        type: 'video',
                question: 'What\'s a key indicator of a deepfake video?',
                newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                content: {
                    optionA: { text: 'Natural eye blinking and lip-sync alignment', isAI: false },
                    optionB: { text: 'Inconsistent lighting on the face vs. background', isAI: true },
                    optionC: { text: 'Clear audio that matches the video quality', isAI: false }
                },
                        correctAnswer: 'optionB',
                        explanation: 'Deepfakes often struggle with consistent lighting, shadows, and reflections that match the original video context.'
                    }
                ]
            },
            'ethics': {
                title: 'Ethics Challenge',
                icon: '⚖️',
                difficulty: 'HARD',
                pointsPerQuestion: 15,
                description: 'Navigate complex ethical scenarios involving AI usage. Learn responsible AI practices and understand the impact on different communities.',
                totalQuestions: 4,
                colorScheme: 'amber',
                questions: [
                    {
                        type: 'multiple-choice',
                        question: 'You\'re using AI to write a school essay. What\'s the most ethical approach?',
                newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                content: {
                    optionA: { text: 'Copy AI output directly and submit as your work', isCorrect: false },
                    optionB: { text: 'Use AI for research and brainstorming, then write in your own words with proper attribution', isCorrect: true },
                    optionC: { text: 'Edit AI output slightly to make it look like your writing', isCorrect: false }
                },
                        correctAnswer: 'optionB',
                        explanation: 'Ethical AI use in education involves transparency, learning, and maintaining academic integrity while leveraging AI as a research tool.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'Your AI chatbot gives biased information about a cultural group. What should you do?',
                newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                content: {
                    optionA: { text: 'Share the information since it came from AI', isCorrect: false },
                    optionB: { text: 'Fact-check with diverse sources and report the bias', isCorrect: true },
                    optionC: { text: 'Ignore it and ask a different question', isCorrect: false }
                },
                        correctAnswer: 'optionB',
                        explanation: 'Responsible AI use requires critical evaluation of outputs and reporting bias to help improve AI systems for everyone.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'You discover an AI tool that could spread misinformation. What\'s your responsibility?',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'Report it to appropriate authorities and warn others', correct: true },
                            optionB: { text: 'Use it for fun since you\'re not the creator', correct: false },
                            optionC: { text: 'Keep quiet to avoid causing panic', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Youth have a responsibility to help prevent the spread of misinformation and protect their communities from harmful AI applications.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'When is it ethical to use AI to create content for marginalized communities?',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'When you involve community members in the process and respect their perspectives', correct: true },
                            optionB: { text: 'When you think you understand their experiences well enough', correct: false },
                            optionC: { text: 'When the AI output seems accurate to you', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Ethical AI content creation requires genuine community involvement, respect for lived experiences, and inclusive design processes.'
                    }
                ]
            },
            'myths': {
                title: 'Myth Busters',
                icon: '💡',
                difficulty: 'EASY',
                pointsPerQuestion: 8,
                description: 'Debunk common misconceptions about AI and technology. Separate fact from fiction with evidence-based reasoning.',
                totalQuestions: 6,
                colorScheme: 'emerald',
                questions: [
                    {
                        type: 'true-false',
                        question: 'True or False: AI can perfectly understand human emotions and context.',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'True - AI is very advanced now', correct: false },
                            optionB: { text: 'False - AI recognizes patterns but doesn\'t truly understand emotions', correct: true }
                        },
                        correctAnswer: 'optionB',
                        explanation: 'AI can identify emotional patterns in text and speech, but it doesn\'t have genuine understanding or empathy like humans do.'
                    },
                    {
                        type: 'true-false',
                        question: 'True or False: If an AI says something, it must be factual.',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'True - AI systems are programmed to be accurate', correct: false },
                            optionB: { text: 'False - AI can generate plausible-sounding but incorrect information', correct: true }
                        },
                        correctAnswer: 'optionB',
                        explanation: 'AI systems can produce confident-sounding responses that are completely false. Always verify important information from reliable sources.'
                    },
                    {
                        type: 'true-false',
                        question: 'True or False: AI will replace all human jobs.',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'True - AI is more efficient than humans', correct: false },
                            optionB: { text: 'False - AI will change jobs but humans remain essential', correct: true }
                        },
                        correctAnswer: 'optionB',
                        explanation: 'While AI will automate some tasks, it will also create new jobs and enhance human capabilities rather than replace humans entirely.'
                    },
                    {
                        type: 'true-false',
                        question: 'True or False: AI systems are completely neutral and unbiased.',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'True - Computers can\'t have opinions', correct: false },
                            optionB: { text: 'False - AI systems can perpetuate human biases from training data', correct: true }
                        },
                        correctAnswer: 'optionB',
                        explanation: 'AI systems learn from human-created data, which often contains historical biases and prejudices that get amplified by the AI.'
                    },
                    {
                        type: 'true-false',
                        question: 'True or False: You can always tell when content is AI-generated.',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'True - AI content has obvious tells', correct: false },
                            optionB: { text: 'False - AI-generated content is becoming increasingly sophisticated', correct: true }
                        },
                        correctAnswer: 'optionB',
                        explanation: 'Modern AI can create very convincing text, images, and audio that can be difficult to distinguish from human-created content.'
                    },
                    {
                        type: 'true-false',
                        question: 'True or False: AI systems learn and improve on their own.',
                        newsUrl: 'https://www.digitalbrew.com/the-hidden-downsides-of-ai-generated-videos/',
                        content: {
                            optionA: { text: 'True - That\'s how machine learning works', correct: false },
                            optionB: { text: 'False - AI systems need human guidance and oversight', correct: true }
                        },
                        correctAnswer: 'optionB',
                        explanation: 'While AI can process data and identify patterns, human oversight is crucial for ensuring ethical development and preventing harmful outcomes.'
                    }
                ]
            },
            'bias-detective': {
                title: 'Bias Detective',
                icon: '🔍',
                difficulty: 'EXPERT',
                pointsPerQuestion: 20,
                description: 'Identify algorithmic bias and discrimination patterns in AI systems. Learn to recognize and address fairness issues.',
                totalQuestions: 7,
                colorScheme: 'red',
                questions: [
                    {
                        type: 'multiple-choice',
                        question: 'A hiring AI consistently rates resumes with "typical male names" higher than identical resumes with "typical female names". What type of bias is this?',
                        content: {
                            optionA: { text: 'Historical bias from training data', correct: true },
                            optionB: { text: 'Random error in the algorithm', correct: false },
                            optionC: { text: 'Intentional discrimination by programmers', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'This is historical bias - the AI learned from past hiring data that reflected human biases, and now perpetuates these patterns.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'Which scenario shows representation bias in AI training data?',
                        content: {
                            optionA: { text: 'A dataset with 90% images of light-skinned people for facial recognition', correct: true },
                            optionB: { text: 'A dataset collected from multiple countries', correct: false },
                            optionC: { text: 'A dataset with equal numbers of all categories', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Representation bias occurs when certain groups are underrepresented in training data, leading to poor performance for those groups.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'What\'s the best way to test an AI system for bias?',
                        content: {
                            optionA: { text: 'Test with diverse groups and measure performance differences', correct: true },
                            optionB: { text: 'Ask the developers if they considered bias', correct: false },
                            optionC: { text: 'Check if the algorithm uses advanced mathematics', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Systematic testing with diverse populations and measuring performance differences is the most effective way to detect bias.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'An AI loan approval system approves fewer loans for people from certain zip codes. This could indicate:',
                        content: {
                            optionA: { text: 'Geographic bias that may affect racial minorities', correct: true },
                            optionB: { text: 'The AI is working perfectly', correct: false },
                            optionC: { text: 'People in those areas don\'t need loans', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Geographic patterns in AI decisions can be a proxy for racial or socioeconomic discrimination, even when race isn\'t directly used.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'Which approach helps reduce bias in AI development?',
                        content: {
                            optionA: { text: 'Having diverse teams review and test the AI system', correct: true },
                            optionB: { text: 'Using more complex algorithms', correct: false },
                            optionC: { text: 'Training AI on larger datasets without checking diversity', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Diverse teams bring different perspectives and can identify biases that homogeneous teams might miss.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'Why might an AI system show bias even when protected characteristics like race aren\'t used as inputs?',
                        content: {
                            optionA: { text: 'Other variables can serve as proxies for protected characteristics', correct: true },
                            optionB: { text: 'It\'s impossible for AI to be biased without using race directly', correct: false },
                            optionC: { text: 'The AI is malfunctioning', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Proxy variables like zip code, school attended, or hobbies can correlate with protected characteristics and lead to indirect discrimination.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'What should organizations do when they discover bias in their AI systems?',
                        content: {
                            optionA: { text: 'Immediately address the bias and implement ongoing monitoring', correct: true },
                            optionB: { text: 'Ignore it if the overall accuracy is good', correct: false },
                            optionC: { text: 'Hide the bias from users and stakeholders', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Responsible AI deployment requires immediate action to address discovered biases and continuous monitoring to prevent future issues.'
                    }
                ]
            },
            'privacy-guardian': {
                title: 'Privacy Guardian',
                icon: '🔒',
                difficulty: 'MEDIUM',
                pointsPerQuestion: 12,
                description: 'Master data privacy principles and protection strategies. Learn to identify privacy risks and implement safeguards.',
                totalQuestions: 5,
                colorScheme: 'amber',
                questions: [
                    {
                        type: 'multiple-choice',
                        question: 'Which AI application poses the highest privacy risk for personal data?',
                        content: {
                            optionA: { text: 'A weather prediction app', correct: false },
                            optionB: { text: 'A facial recognition system that stores biometric data', correct: true },
                            optionC: { text: 'A calculator app', correct: false }
                        },
                        correctAnswer: 'optionB',
                        explanation: 'Facial recognition systems collect and store highly sensitive biometric data that can be used to track and identify individuals across different contexts.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'What is "differential privacy" in AI systems?',
                        content: {
                            optionA: { text: 'A technique that adds noise to data to protect individual privacy while preserving overall patterns', correct: true },
                            optionB: { text: 'Giving different users different privacy settings', correct: false },
                            optionC: { text: 'Only collecting data from consenting users', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Differential privacy is a mathematical framework that adds carefully calibrated noise to datasets, protecting individual privacy while maintaining data utility.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'Why is data minimization important for AI privacy?',
                        content: {
                            optionA: { text: 'Collecting only necessary data reduces privacy risks and potential for misuse', correct: true },
                            optionB: { text: 'It makes AI algorithms run faster', correct: false },
                            optionC: { text: 'It\'s required by law in all countries', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Data minimization reduces privacy risks by limiting the amount of personal information that could be compromised, misused, or inappropriately accessed.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'What right does GDPR give individuals regarding AI decisions about them?',
                        content: {
                            optionA: { text: 'The right to explanation - understanding how AI decisions are made', correct: true },
                            optionB: { text: 'The right to always get favorable AI decisions', correct: false },
                            optionC: { text: 'The right to use any AI system for free', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'GDPR includes provisions for algorithmic transparency, giving individuals the right to understand and contest automated decision-making.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'Which practice best protects privacy when training AI models?',
                        content: {
                            optionA: { text: 'Using federated learning to train models without centralizing data', correct: true },
                            optionB: { text: 'Collecting as much data as possible for better accuracy', correct: false },
                            optionC: { text: 'Sharing all training data publicly for transparency', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Federated learning allows AI models to be trained on distributed data without requiring data to be centralized, significantly reducing privacy risks.'
                    }
                ]
            },
            'truth-seeker': {
                title: 'Truth Seeker',
                icon: '📰',
                difficulty: 'HARD',
                pointsPerQuestion: 18,
                description: 'Navigate the complex landscape of information authenticity. Master advanced techniques for verifying sources and detecting sophisticated misinformation.',
                totalQuestions: 6,
                colorScheme: 'emerald',
                questions: [
                    {
                        type: 'multiple-choice',
                        question: 'What is the most reliable method for verifying a suspicious news article?',
                        content: {
                            optionA: { text: 'Cross-referencing with multiple credible sources and fact-checking organizations', correct: true },
                            optionB: { text: 'Checking if it has many likes and shares on social media', correct: false },
                            optionC: { text: 'Seeing if the headline matches your existing beliefs', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Professional verification requires checking multiple independent sources and consulting established fact-checking organizations with proven track records.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'How can you identify a deepfake video using technical analysis?',
                        content: {
                            optionA: { text: 'Look for inconsistent lighting, unnatural eye movements, and temporal artifacts', correct: true },
                            optionB: { text: 'Check if the video quality is high definition', correct: false },
                            optionC: { text: 'See if the person is speaking a foreign language', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Technical deepfake detection focuses on subtle inconsistencies in lighting, shadows, facial movements, and temporal coherence that current AI struggles to perfect.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'What is "source amnesia" and how does it affect information sharing?',
                        content: {
                            optionA: { text: 'Remembering information but forgetting where it came from, leading to sharing unverified claims', correct: true },
                            optionB: { text: 'Completely forgetting information after reading it', correct: false },
                            optionC: { text: 'Being unable to access original news sources', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Source amnesia causes people to remember compelling information while forgetting whether it came from credible or unreliable sources, leading to inadvertent misinformation spread.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'Which technique do sophisticated disinformation campaigns often use?',
                        content: {
                            optionA: { text: 'Mixing true information with false claims to increase credibility', correct: true },
                            optionB: { text: 'Using obviously fake information that\'s easy to debunk', correct: false },
                            optionC: { text: 'Only targeting people who are already skeptical', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Advanced disinformation often embeds false claims within mostly accurate information, making the lies harder to detect and more likely to be believed.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'What is the best approach when you encounter information that confirms your existing beliefs?',
                        content: {
                            optionA: { text: 'Apply extra scrutiny and actively seek contradicting evidence', correct: true },
                            optionB: { text: 'Share it immediately since it feels right', correct: false },
                            optionC: { text: 'Assume it\'s true because it matches your views', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'Confirmation bias makes us less critical of information that supports our beliefs, so we must consciously apply extra verification to potentially confirming information.'
                    },
                    {
                        type: 'multiple-choice',
                        question: 'How can AI tools help in truth verification while also posing risks?',
                        content: {
                            optionA: { text: 'AI can help detect patterns in fake content but can also be used to create more sophisticated fakes', correct: true },
                            optionB: { text: 'AI is always 100% accurate at detecting lies', correct: false },
                            optionC: { text: 'AI cannot help with truth verification in any way', correct: false }
                        },
                        correctAnswer: 'optionA',
                        explanation: 'AI presents a double-edged sword in truth verification: it can help detect fake content patterns but also enables creation of increasingly sophisticated synthetic media.'
                    }
                ]
            }
        };

        // Initialize the page
        function initializePage() {
            updateUserStats();
            renderMissionCards();
        }

        // Update user stats display
        function updateUserStats() {
            document.getElementById('userTotalScore').textContent = userTotalScore;
            document.getElementById('userScoreDisplay').textContent = userTotalScore;
            
            // Calculate missions completed
            let completedCount = 0;
            Object.keys(missions).forEach(missionId => {
                const completed = localStorage.getItem(`mission_${missionId}_completed`);
                if (completed === 'true') completedCount++;
            });
            document.getElementById('missionsCompleted').textContent = completedCount;
        }

        // Render mission cards
        function renderMissionCards() {
            const container = document.getElementById('missionsGrid');
            container.innerHTML = '';

            Object.keys(missions).forEach(missionId => {
                const mission = missions[missionId];
                const completed = localStorage.getItem(`mission_${missionId}_completed`) === 'true';
                const progress = parseInt(localStorage.getItem(`mission_${missionId}_progress`) || '0');
                const progressPercentage = (progress / mission.totalQuestions) * 100;

                const card = document.createElement('div');
                card.className = `mission-card ${mission.colorScheme}`;
                card.onclick = () => startMission(missionId);

                card.innerHTML = `
                    <div class="mission-header">
                        <div class="mission-icon ${mission.colorScheme}">
                            ${mission.icon}
                        </div>
                        <div class="mission-info">
                            <h3>${mission.title}</h3>
                            <div class="mission-meta">
                                <span class="difficulty-badge ${mission.difficulty.toLowerCase()}">${mission.difficulty}</span>
                                <span style="color: var(--muted-foreground); font-size: 14px;">${mission.pointsPerQuestion} points each</span>
                            </div>
                        </div>
                    </div>
                    <p class="mission-description">${mission.description}</p>
                    <div class="mission-progress">
                        <div class="progress-header">
                            <span style="color: var(--muted-foreground);">Progress</span>
                            <span>${progress}/${mission.totalQuestions} completed</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar ${mission.colorScheme}" style="width: ${progressPercentage}%"></div>
                        </div>
                    </div>
                    ${completed ? 
                        '<div style="color: var(--success); margin-top: 16px; text-align: center; font-weight: 600;">✅ Mission Completed!</div>' :
                        `<button class="start-button ${mission.colorScheme}">${progress > 0 ? 'Continue Mission' : 'Start Mission'}</button>`
                    }
                `;

                container.appendChild(card);
            });
        }

        // Start a mission
        function startMission(missionId) {
            currentMission = missions[missionId];
            currentMission.id = missionId;
            currentQuestionIndex = 0;
            missionScore = 0;
            selectedAnswer = null;

            // Hide mission selection, show mission interface
            document.getElementById('missionSelection').style.display = 'none';
            document.getElementById('missionInterface').style.display = 'block';

            // Update mission title
            document.getElementById('missionTitle').textContent = `${currentMission.icon} ${currentMission.title}`;

            // Load first question
            loadCurrentQuestion();
        }

        // Load current question
        function loadCurrentQuestion() {
            const question = currentMission.questions[currentQuestionIndex];
            const totalQuestions = currentMission.questions.length;

            // Reset UI state
            selectedAnswer = null;
            document.getElementById('submitAnswerBtn').disabled = true;
            document.getElementById('nextQuestionBtn').style.display = 'none';
            document.getElementById('completeMissionBtn').style.display = 'none';
            document.getElementById('questionFeedback').style.display = 'none';

            // Update progress
            document.getElementById('missionProgress').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
            document.getElementById('missionScore').textContent = `Score: ${missionScore}`;

            // Update question text
            document.getElementById('questionText').textContent = question.question;

            // Render question content based on type
            const contentContainer = document.getElementById('questionContent');
            
            if (question.type === 'drag-and-drop') {
                renderDragDropQuestion(question, contentContainer);
            } else if (question.type === 'image') {
                renderImageQuestion(question, contentContainer);
            } else {
                renderMultipleChoiceQuestion(question, contentContainer);
            }
        }

        // Render drag and drop question
        function renderDragDropQuestion(question, container) {
            container.innerHTML = `
                <div class="drag-drop-container">
                    <div class="draggable-section">
                        <h4 class="section-title">Drag These Statements:</h4>
                        <div class="draggable-items" id="draggableItems">
                            ${question.content.statements.map((statement, index) => `
                                <div class="draggable" draggable="true" data-statement="${statement}" data-index="${index}">
                                    ${statement}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="dropzone-section">
                        <h4 class="section-title">Drop Here:</h4>
                        <div class="dropzone real" id="realDropzone" data-category="real">
                            <div class="dropzone-title">✅ Real</div>
                        </div>
                        <div class="dropzone fake" id="fakeDropzone" data-category="fake">
                            <div class="dropzone-title">❌ Fake</div>
                        </div>
                    </div>
                </div>
            `;

            initializeDragAndDrop();
        }

        // Initialize drag and drop functionality
        function initializeDragAndDrop() {
            const draggables = document.querySelectorAll('.draggable');
            const dropzones = document.querySelectorAll('.dropzone');
            let allItemsDropped = false;

            draggables.forEach(draggable => {
                draggable.addEventListener('dragstart', (e) => {
                    draggable.classList.add('dragging');
                    e.dataTransfer.setData('text/plain', draggable.dataset.statement);
                });

                draggable.addEventListener('dragend', () => {
                    draggable.classList.remove('dragging');
                });
            });

            dropzones.forEach(dropzone => {
                dropzone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    dropzone.classList.add('drag-over');
                });

                dropzone.addEventListener('dragleave', () => {
                    dropzone.classList.remove('drag-over');
                });

                dropzone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    dropzone.classList.remove('drag-over');
                    
                    const statement = e.dataTransfer.getData('text/plain');
                    const draggingElement = document.querySelector('.dragging');
                    
                    if (draggingElement) {
                        // Move the element to the dropzone
                        dropzone.appendChild(draggingElement);
                        
                        // Check if all items are dropped
                        checkAllItemsDropped();
                    }
                });
            });

            function checkAllItemsDropped() {
                const originalContainer = document.getElementById('draggableItems');
                if (originalContainer.children.length === 0) {
                    // All items have been moved, enable submit
                    document.getElementById('submitAnswerBtn').disabled = false;
                    selectedAnswer = 'dropped'; // Set a flag that items have been dropped
                }
            }
        }

        // Render image question
        function renderImageQuestion(question, container) {
            container.innerHTML = `
                <div class="image-grid">
                    ${Object.keys(question.content).map(optionKey => {
                        const option = question.content[optionKey];
                        return `
                            <div class="image-option" onclick="selectAnswer('${optionKey}')" data-option="${optionKey}">
                                <img src="${option.img}" alt="${option.text || `Option ${optionKey.slice(-1)}`}" 
                                     onerror="this.src='https://via.placeholder.com/400x300?text=Image+${optionKey.slice(-1)}'">
                                <div style="padding: 12px; background: var(--muted); text-align: center; font-size: 14px;">
                                    ${option.text || `Option ${optionKey.slice(-1).toUpperCase()}`}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        // Render multiple choice question
        function renderMultipleChoiceQuestion(question, container) {
            container.innerHTML = `
                <div class="answer-options">
                    ${Object.keys(question.content).map(optionKey => {
                        const option = question.content[optionKey];
                        return `
                            <div class="answer-option" onclick="selectAnswer('${optionKey}')" data-option="${optionKey}">
                                <div class="option-radio"></div>
                                <span>${option.text}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        // Select an answer
        function selectAnswer(option) {
            // Remove previous selections
            document.querySelectorAll('.answer-option, .image-option').forEach(el => {
                el.classList.remove('selected');
            });

            // Select current option
            const selectedElement = document.querySelector(`[data-option="${option}"]`);
            if (selectedElement) {
                selectedElement.classList.add('selected');
            }

            selectedAnswer = option;
            document.getElementById('submitAnswerBtn').disabled = false;
        }

        // Submit answer
        function submitAnswer() {
            const question = currentMission.questions[currentQuestionIndex];
            let isCorrect = false;

            if (question.type === 'drag-and-drop') {
                isCorrect = checkDragDropAnswer(question);
            } else {
                isCorrect = (selectedAnswer === question.correctAnswer);
            }

            // Update score
            if (isCorrect) {
                missionScore += currentMission.pointsPerQuestion;
                userTotalScore += currentMission.pointsPerQuestion;
                localStorage.setItem('milScore', userTotalScore.toString());
            }

            // Show feedback
            showFeedback(isCorrect, question.explanation);

            // Disable submit button and show next/complete button
            document.getElementById('submitAnswerBtn').disabled = true;
            
            if (currentQuestionIndex < currentMission.questions.length - 1) {
                document.getElementById('nextQuestionBtn').style.display = 'block';
            } else {
                document.getElementById('completeMissionBtn').style.display = 'block';
            }

            // Update progress
            const currentProgress = currentQuestionIndex + 1;
            localStorage.setItem(`mission_${currentMission.id}_progress`, currentProgress.toString());
            
            // Update UI
            document.getElementById('missionScore').textContent = `Score: ${missionScore}`;
            updateUserStats();
        }

        // Check drag and drop answer
        function checkDragDropAnswer(question) {
            const realDropzone = document.getElementById('realDropzone');
            const fakeDropzone = document.getElementById('fakeDropzone');
            
            const realItems = Array.from(realDropzone.querySelectorAll('.draggable')).map(el => el.dataset.statement);
            const fakeItems = Array.from(fakeDropzone.querySelectorAll('.draggable')).map(el => el.dataset.statement);
            
            const correctReal = question.content.answers.real;
            const correctFake = question.content.answers.fake;
            
            // Check if items are in correct categories
            const realCorrect = realItems.every(item => correctReal.includes(item)) && 
                               correctReal.every(item => realItems.includes(item));
            const fakeCorrect = fakeItems.every(item => correctFake.includes(item)) && 
                               correctFake.every(item => fakeItems.includes(item));
            
            return realCorrect && fakeCorrect;
        }

        // Show feedback
        function showFeedback(isCorrect, explanation) {
            const feedbackElement = document.getElementById('questionFeedback');
            const contentElement = document.getElementById('feedbackContent');

            const icon = isCorrect ? '✅' : '❌';
            const statusClass = isCorrect ? 'correct' : 'incorrect';
            const status = isCorrect ? 'Correct!' : 'Not quite right';

            contentElement.innerHTML = `
                <div class="feedback-icon">${icon}</div>
                <div class="feedback-text">
                    <div class="feedback-status ${statusClass}">${status}</div>
                    <div class="feedback-explanation">${explanation}</div>
                </div>
            `;

            feedbackElement.style.display = 'block';

            // Add visual feedback to selected options
            if (currentMission.questions[currentQuestionIndex].type !== 'drag-and-drop') {
                const options = document.querySelectorAll('.answer-option, .image-option');
                options.forEach(option => {
                    const optionKey = option.dataset.option;
                    const question = currentMission.questions[currentQuestionIndex];
                    
                    if (optionKey === question.correctAnswer) {
                        option.classList.add('correct');
                    } else if (optionKey === selectedAnswer && !isCorrect) {
                        option.classList.add('incorrect');
                    }
                    
                    // Disable clicking
                    option.onclick = null;
                    option.style.cursor = 'default';
                });
            }
        }

        // Next question
        function nextQuestion() {
            currentQuestionIndex++;
            loadCurrentQuestion();
        }

        // Complete mission
        function completeMission() {
            // Mark mission as completed
            localStorage.setItem(`mission_${currentMission.id}_completed`, 'true');
            
            // Show enhanced completion screen
            const completionHTML = `
                <div style="text-align: center; padding: 40px;">
                    <div style="font-size: 4rem; margin-bottom: 16px;">🎉</div>
                    <h3 style="font-size: 2rem; font-weight: 700; margin-bottom: 16px; color: var(--foreground);">Mission Complete!</h3>
                    <div style="font-size: 1.25rem; margin-bottom: 8px; color: var(--success);">+${missionScore} points earned</div>
                    <div style="color: var(--muted-foreground); margin-bottom: 32px;">Total Score: ${userTotalScore} points</div>
                    <button class="btn btn-success" onclick="showMissionReviewPopup()" style="margin-bottom: 16px;">
                        📋 Review Answers
                    </button>
                    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-success" onclick="returnToMissions()">
                            <span>🏠</span>
                            Back to Missions
                        </button>
                        <button class="btn btn-primary" onclick="alert('Prompt Builder coming soon!')">
                            <span>⚡</span>
                            Try Prompt Builder
                        </button>
                    </div>
                </div>
                <div id="missionReviewPopup" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.8); z-index:9999; align-items:center; justify-content:center;">
                    <div style="background:var(--card); border-radius:16px; max-width:600px; width:90%; margin:auto; padding:32px; box-shadow:0 8px 32px rgba(0,0,0,0.25); position:relative; border: 1px solid var(--border); max-height:80vh; overflow-y:auto;">
                        <button onclick="closeMissionReviewPopup()" style="position:absolute; top:16px; right:16px; background:none; border:none; font-size:1.5rem; cursor:pointer; color: var(--muted-foreground);">✖</button>
                        <h2 style="margin-bottom:24px; color:var(--foreground);">📋 Mission Review</h2>
                        <div id="missionReviewContent"></div>
                    </div>
                </div>
            `;
            
            document.getElementById('questionContainer').innerHTML = completionHTML;
            document.getElementById('submitAnswerBtn').style.display = 'none';
            document.getElementById('nextQuestionBtn').style.display = 'none';
            document.getElementById('completeMissionBtn').style.display = 'none';
        }

        // Show mission review popup
        function showMissionReviewPopup() {
            const reviewPopup = document.getElementById('missionReviewPopup');
            const reviewContent = document.getElementById('missionReviewContent');
            let html = '';

            currentMission.questions.forEach((q, idx) => {
                const newsUrl = q.newsUrl || '';
                let answerLabel = '';
                let answerMedia = '';

                // Find correct answer
                if (q.correctAnswer) {
                    const correctOption = q.content[q.correctAnswer];
                    answerLabel = correctOption.text || correctOption.img || 'Correct answer';
                    if (correctOption.img) {
                        answerMedia = `<img src="${correctOption.img}" alt="Answer Image" style="height:80px; width:80px; object-fit:cover; border-radius:8px; margin-bottom:8px;">`;
                    }
                } else if (q.type === 'drag-and-drop') {
                    answerLabel = 'Check your sorted items against the correct categories';
                }

                html += `
                    <div class="review-question-container" style="background:var(--muted); border-radius:12px; margin-bottom:16px; border:1px solid var(--border);">
                        <button class="review-toggle-btn" onclick="toggleReviewDetails(${idx})"
                            style="width:100%; text-align:left; background:none; border:none; padding:20px; font-size:1rem; font-weight:600; color:var(--accent); cursor:pointer;">
                            Q${idx + 1}: ${q.question}
                            <span id="review-arrow-${idx}" style="float:right; font-size:1.2rem;">▼</span>
                        </button>
                        <div id="review-details-${idx}" class="review-details-animated" style="padding:0 20px 20px 20px;">
                            ${answerMedia}
                            <div style="margin-bottom:8px; color:var(--success); font-weight:500;">Answer: ${answerLabel}</div>
                            <div style="color:var(--muted-foreground); font-size:14px; margin-bottom:8px;">${q.explanation}</div>
                            ${newsUrl ? `<div><a href="${newsUrl}" target="_blank" style="color:var(--accent); text-decoration:underline; font-size:13px;">📖 Related Reading</a></div>` : ''}
                        </div>
                    </div>
                `;
            });

            reviewContent.innerHTML = `
                ${html}
                <div style="text-align:center; margin-top:32px;">
                    <button class="btn btn-success" onclick="closeMissionReviewPopup(); returnToMissions();">
                        ← Back to Missions
                    </button>
                </div>
            `;
            reviewPopup.style.display = 'flex';

            // Collapse all dropdowns when opening the popup
            currentMission.questions.forEach((_, idx) => {
                const details = document.getElementById(`review-details-${idx}`);
                const arrow = document.getElementById(`review-arrow-${idx}`);
                if (details) details.classList.remove('open');
                if (arrow) arrow.textContent = '▼';
            });
        }

        function toggleReviewDetails(idx) {
            // Collapse all other dropdowns
            currentMission.questions.forEach((_, i) => {
                if (i === idx) return;
                const details = document.getElementById(`review-details-${i}`);
                const arrow = document.getElementById(`review-arrow-${i}`);
                if (details && arrow) {
                    details.classList.remove('open');
                    arrow.textContent = '▼';
                }
            });

            // Toggle the selected dropdown
            const details = document.getElementById(`review-details-${idx}`);
            const arrow = document.getElementById(`review-arrow-${idx}`);
            if (!details.classList.contains('open')) {
                details.classList.add('open');
                arrow.textContent = '▲';
            } else {
                details.classList.remove('open');
                arrow.textContent = '▼';
            }
        }

        // Close mission review popup
        function closeMissionReviewPopup() {
            document.getElementById('missionReviewPopup').style.display = 'none';
        }

        // Return to missions view
        function returnToMissions() {
            document.getElementById('missionInterface').style.display = 'none';
            document.getElementById('missionSelection').style.display = 'block';
            
            // Reset mission state
            currentMission = null;
            currentQuestionIndex = 0;
            missionScore = 0;
            selectedAnswer = null;
            
            // Update displays
            updateUserStats();
            renderMissionCards();
        }

        // Initialize page when loaded
        document.addEventListener('DOMContentLoaded', initializePage);
    </script>
</body>
</html>
