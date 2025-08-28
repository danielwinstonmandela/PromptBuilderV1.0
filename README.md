# Prompt Builder v1.0 - UNESCO Youth Hackathon 2025

## Overview
Prompt Builder is a mobile-first web application designed to empower youth with Media Information Literacy (MIL) skills through structured AI communication. Aligned with UNESCO's "Youth Leading the Way - Building MIL Solutions for Impact" theme.

## Key Features (PRD Aligned)

### 1. Guided Prompt Builder ⚡
- **Purpose**: Step-by-step framework for creating effective AI prompts
- **Components**: 
  - Persona: Define AI's role and expertise
  - Task: Specify the desired action
  - Context: Provide relevant background information
  - Format: Define output structure and style
- **Educational Focus**: Youth-oriented scenarios covering AI ethics, misinformation, and responsible usage

### 2. Impact Analyzer 📊
- **Purpose**: Side-by-side comparison of generic vs. structured prompts
- **Functionality**: 
  - Takes user's structured prompt
  - Generates a basic version for comparison
  - Shows quality differences with explanations
  - Demonstrates the value of structured prompting
- **Educational Value**: Proves methodology effectiveness with real examples

### 3. Gamified MIL Missions 🎮
- **Purpose**: Interactive challenges building critical thinking skills
- **Mission Types**:
  - **Spot the Fake**: Identify AI-generated content (images, text, audio)
  - **Ethics Challenge**: Navigate complex AI ethics scenarios
  - **Myth Busters**: Correct common AI misconceptions
- **Rewards System**: Points, rankings, and leaderboard progression
- **Scoring**: 5-15 points per question based on difficulty

### 4. Educational Content Hub 📚
- **Purpose**: Curated resources on AI ethics and societal impact
- **Content Categories**:
  - AI Ethics: Data bias, intellectual property, responsible usage
  - AI & Society: Impact on marginalized communities, digital divide
  - Future of AI: Emerging trends, AI in education
- **Format**: Easy-to-digest articles with interactive reader interface

## Technical Implementation

### Architecture
- **Frontend**: Single Page Application (SPA) with vanilla JavaScript
- **Styling**: Custom CSS with mobile-first responsive design
- **Navigation**: Smooth page transitions with state management
- **Data Storage**: Local storage for user progress and scores

### File Structure
```
/
├── index.html              # Main application file with all pages
├── styles/
│   └── shared.css        # Global styles and design system
└── js/
    ├── shared.js         # Navigation and utility functions
    ├── builder.js        # Prompt builder functionality
    ├── analyzer.js       # Impact analysis features
    └── missions.js       # MIL missions and educational content
```

### Mobile-First Design
- Responsive grid layouts that adapt to screen sizes
- Touch-friendly interface elements
- Optimized navigation for mobile devices
- Progressive enhancement for larger screens

## UNESCO MIL Alignment

### Core MIL Competencies Addressed
1. **Access**: Teaching effective AI interaction techniques
2. **Evaluate**: Building critical thinking skills for AI content
3. **Create**: Empowering structured content creation
4. **Participate**: Encouraging responsible AI community engagement

### Youth Empowerment Focus
- Age-appropriate content and scenarios
- Real-world applications relevant to students
- Skill-building through gamification
- Emphasis on ethical decision-making

## Success Metrics (PRD Defined)
- **Engagement**: Prompt builds per user
- **Retention**: Weekly return rate
- **Mission Completion**: MIL mission completion rate
- **Learning Impact**: Improved critical thinking assessment scores

## Future Development (Out of Scope for v1.0)
- User authentication and accounts
- Community sharing features
- Public prompt library
- Advanced AI integration (Gemini API)
- Native mobile applications
- Push notifications
- Social features and collaboration tools

## Getting Started
1. Open `index.html` in a modern web browser
2. Navigate through the application using the top navigation
3. Start with the Guided Prompt Builder to learn the methodology
4. Try the Impact Analyzer to see prompt effectiveness
5. Complete MIL Missions to earn points and build skills
6. Explore the Educational Content Hub for deeper learning

## Browser Compatibility
- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing
This project is part of the UNESCO Youth Hackathon 2025. Contributions should align with the MIL educational objectives and youth empowerment goals.
