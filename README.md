# Vernacular Avatar-Guided Flight Booking

A step-by-step, avatar-led flight booking experience with static pre-recorded videos in multiple Indian languages, integrated with the existing Sky chatbot system.

## 🚀 Now Available on Mobile!

This project now includes both **Web** and **Mobile (React Native)** versions, sharing the same Python backend.

## Features

- **Avatar-Guided Flow**: Step-by-step booking with video guidance
- **Multi-language Support**: English, Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Bengali, Marathi, Punjabi
- **Sky Integration**: Seamlessly integrates with existing Sky chatbot
- **Web & Mobile**: React web app + React Native mobile app
- **QR Code Testing**: Test mobile app instantly with Expo Go
- **Accessibility**: Subtitle support for videos

## Architecture

```
vernacular-avatar-booking/
├── backend/                 # FastAPI backend (shared)
│   ├── main.py             # Main API server
│   ├── avatar_engine.py    # Video management
│   ├── flow_controller.py  # Step-based flow logic
│   └── chatbot_integration.py # Sky chatbot integration
├── frontend-app/           # React web app
│   └── src/
│       └── App.js          # Main web component
├── mobile-app/             # React Native mobile app (NEW!)
│   ├── App.js              # Main mobile component
│   ├── app.json            # Expo configuration
│   └── README.md           # Mobile setup guide
├── configs/                # Configuration files
│   ├── flow_config.json    # Flow definitions
│   └── messages.json       # Multi-language messages
└── videos/                 # Video assets
    ├── english/
    └── hindi/
```

## Setup

### Backend (Required for both Web & Mobile)
```bash
cd backend
pip install -r requirements.txt
python main.py
```

### Web App
```bash
cd frontend-app
npm install
npm start
# Opens at http://localhost:3000
```

### Mobile App (NEW!)
```bash
cd mobile-app
npm install

# Option 1: Tunnel Mode (No same WiFi needed) - RECOMMENDED
npm start
# Scan QR code - works from anywhere!

# Option 2: Same WiFi (Faster)
npm run local
# Requires phone and laptop on same WiFi
```

**📱 Download Expo Go:**
- iOS: https://apps.apple.com/app/expo-go/id982107779
- Android: https://play.google.com/store/apps/details?id=host.exp.exponent

**🌐 Tunnel Mode (Different WiFi):** See [mobile-app/TUNNEL_SETUP.md](mobile-app/TUNNEL_SETUP.md)
**📖 Detailed mobile setup:** See [mobile-app/README.md](mobile-app/README.md)

## Environment Variables

```bash
# Backend
AVATAR_CDN_URL=https://cdn.example.com/avatars
SKY_API_URL=http://localhost:8000

# Frontend
REACT_APP_API_BASE=http://localhost:8000
```

## Integration with Sky

The system integrates with your existing Sky chatbot through:

1. **API Integration**: Uses existing Sky endpoints for flight search, city suggestions
2. **Session Management**: Maintains user sessions across avatar and chatbot interactions
3. **Fallback Mechanism**: Falls back to regular chatbot for non-booking queries

## Usage

1. User starts with regular chatbot interaction
2. When flight booking is requested, avatar flow is triggered
3. Avatar guides user through each step with videos
4. System integrates with existing Sky APIs for actual booking
5. Handoff to existing payment flow

## Adding New Languages

1. Add language code to `avatar_engine.py`
2. Add translations to `configs/messages.json`
3. Upload avatar videos to CDN with naming convention: `{step}/{language}.mp4`

## Video Asset Structure

```
CDN/
├── welcome/
│   ├── en.mp4
│   ├── hi.mp4
│   └── ta.mp4
├── origin_selection/
│   ├── en.mp4
│   └── hi.mp4
└── subtitles/
    ├── welcome/
    │   ├── en.vtt
    │   └── hi.vtt
```

## API Endpoints

- `POST /chat` - Main chat endpoint
- `POST /avatar-step` - Process avatar flow step
- `GET /avatar-video/{step}` - Get video URL for step
- `GET /health` - Health check

## Analytics

The system tracks:
- Step-wise drop-off rates
- Language usage metrics
- Booking completion rates
- Performance metrics

## 📱 Web vs Mobile

| Feature | Web App | Mobile App |
|---------|---------|------------|
| Framework | React.js | React Native |
| UI Library | Material-UI | React Native Paper |
| Testing | Browser | QR Code + Expo Go |
| Deployment | Web Server | App Store |
| Backend | ✅ Same Python API | ✅ Same Python API |

**See detailed comparison:** [WEB_VS_MOBILE.md](WEB_VS_MOBILE.md)

## 🎯 Quick Start Guide

1. **Start Backend:**
   ```bash
   cd backend && python main.py
   ```

2. **Choose Platform:**
   
   **For Web:**
   ```bash
   cd frontend-app && npm start
   ```
   
   **For Mobile:**
   ```bash
   cd mobile-app && ./setup.sh && npm start
   # Scan QR code with Expo Go
   ```

## 📚 Documentation

- [Mobile App Setup](mobile-app/README.md)
- [Mobile Testing Guide](mobile-app/TESTING.md)
- [Web vs Mobile Comparison](WEB_VS_MOBILE.md)

## 🛠️ Tech Stack

**Backend:**
- Python FastAPI
- Uvicorn
- Pydantic

**Web Frontend:**
- React.js
- Material-UI
- Axios

**Mobile Frontend:**
- React Native
- Expo
- React Native Paper
- expo-av (video playback)