# 🚀 Getting Started - Visual Guide

## 📋 Prerequisites Checklist

Before you begin, make sure you have:

- [ ] ✅ Node.js installed (v16 or higher)
- [ ] ✅ Python 3.x installed
- [ ] ✅ Smartphone (iOS or Android)
- [ ] ✅ Computer and phone on same WiFi
- [ ] ✅ Expo Go app installed on phone

---

## 📱 Step 1: Install Expo Go

### iOS
1. Open App Store
2. Search "Expo Go"
3. Tap "Get" to install
4. Open the app

### Android
1. Open Play Store
2. Search "Expo Go"
3. Tap "Install"
4. Open the app

**Direct Links:**
- 🍎 iOS: https://apps.apple.com/app/expo-go/id982107779
- 🤖 Android: https://play.google.com/store/apps/details?id=host.exp.exponent

---

## 🖥️ Step 2: Start Backend Server

Open Terminal/Command Prompt:

```bash
cd backend
python main.py
```

**Expected Output:**
```
🚀 Starting Vernacular Avatar Booking Backend...
📍 Server: http://localhost:8000
📖 API docs: http://localhost:8000/docs
INFO:     Uvicorn running on http://0.0.0.0:8000
```

✅ **Success!** Backend is running

❌ **Error?** Run: `pip install -r requirements.txt`

---

## 📱 Step 3: Setup Mobile App

Open a NEW Terminal window:

```bash
cd mobile-app
./setup.sh
```

**What this does:**
- 🔍 Finds your local IP address
- 📝 Updates configuration files
- ✅ Prepares app for testing

**Expected Output:**
```
🚀 6Eskai Mobile App Setup
==========================

📍 Finding your local IP address...
✅ Your local IP: 192.168.1.100

📝 Updating .env file...
✅ .env updated

📝 Updating App.js with your IP...
✅ App.js updated

🎯 Next Steps:
1. Start backend: cd ../backend && python main.py
2. Start mobile app: npm start
3. Scan QR code with Expo Go app
```

---

## 🎯 Step 4: Start Mobile App

In the same terminal:

```bash
npm start
```

**Expected Output:**
```
› Metro waiting on exp://192.168.1.100:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   █▀▀▀▀▀█ ▀▀█▄▀ ▄▀▄▀█ █▀▀▀▀▀█                               │
│   █ ███ █ ▀▄█▀▄ ▀█▀▄█ █ ███ █                               │
│   █ ▀▀▀ █ ▄▀▀█▄ ▀█▄▀█ █ ▀▀▀ █                               │
│   ▀▀▀▀▀▀▀ █ ▀ █ ▀ █ ▀ ▀▀▀▀▀▀▀                               │
│   ▀█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                               │
│                                                              │
└──────────────────────────────────────────────────────────────┘

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
```

✅ **Success!** QR code is displayed

---

## 📲 Step 5: Scan QR Code

### iOS
1. Open **Camera** app (not Expo Go)
2. Point at QR code on computer screen
3. Tap notification that appears
4. Expo Go opens automatically

### Android
1. Open **Expo Go** app
2. Tap "Scan QR Code"
3. Point at QR code on computer screen
4. App loads automatically

**⏱️ First Load:** Takes ~30 seconds
**🔄 Subsequent Loads:** ~5 seconds

---

## 🎉 Step 6: Test the App!

Once app loads on your phone:

### 1. Welcome Screen
```
┌─────────────────────────┐
│  Welcome to 6Eskai      │
│                         │
│  [English]  [हिंदी]     │
│                         │
│  [Start Booking]        │
└─────────────────────────┘
```

### 2. Select Language
- Tap **English** or **हिंदी**

### 3. Start Booking
- Tap **Start Booking** button

### 4. Watch Avatar Video
```
┌─────────────────────────┐
│  [Video Playing]        │
│  👤 Avatar Guide        │
│                         │
│  "Welcome! Let's book   │
│   your flight..."       │
└─────────────────────────┘
```

### 5. Enter Origin City
```
┌─────────────────────────┐
│  Select Departure City  │
│                         │
│  [Delhi_________]       │
│                         │
│  [Next]                 │
└─────────────────────────┘
```

### 6. Continue Through Steps
- Destination
- Date
- Passengers
- Flight Selection
- Review
- Payment

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ QR code appears in terminal
2. ✅ App loads on phone (no errors)
3. ✅ Welcome screen shows
4. ✅ Language buttons work
5. ✅ Video plays automatically
6. ✅ Input fields accept text
7. ✅ "Next" buttons work
8. ✅ Steps progress smoothly

---

## 🐛 Troubleshooting

### Problem: QR Code Won't Scan

**Solution 1: Use Tunnel Mode**
```bash
npm start --tunnel
```

**Solution 2: Manual Connection**
1. In Expo Go, tap "Enter URL manually"
2. Type: `exp://YOUR_IP:8081`
3. Replace YOUR_IP with your local IP

---

### Problem: "Network Request Failed"

**Checklist:**
- [ ] Backend is running (`python main.py`)
- [ ] Phone and computer on same WiFi
- [ ] Firewall not blocking port 8000
- [ ] Correct IP in App.js

**Test Backend:**
```bash
curl http://localhost:8000/health
```

Should return: `{"status":"healthy"}`

---

### Problem: Video Not Playing

**Check Video URL:**
1. Open browser
2. Go to: `http://YOUR_IP:8000/videos/english/welcome_en.mp4`
3. Video should play

**If video doesn't play:**
- Check videos folder exists
- Verify video files are present
- Restart backend server

---

### Problem: App Crashes

**Solution:**
```bash
# Clear cache and restart
npm start --clear
```

---

## 🎯 Quick Commands Reference

### Backend
```bash
# Start
cd backend && python main.py

# Check health
curl http://localhost:8000/health

# View API docs
open http://localhost:8000/docs
```

### Mobile App
```bash
# Setup
cd mobile-app && ./setup.sh

# Start
npm start

# Tunnel mode
npm start --tunnel

# Clear cache
npm start --clear
```

---

## 📊 Testing Checklist

Once app is running, test these features:

- [ ] Language switching (EN ↔ HI)
- [ ] Video playback
- [ ] Origin city input
- [ ] Destination city input
- [ ] Date selection
- [ ] Passenger count
- [ ] Passenger details
- [ ] Contact information
- [ ] Flight selection
- [ ] Booking review
- [ ] All steps complete

---

## 🎓 What's Happening Behind the Scenes?

```
Your Phone                Your Computer
    │                          │
    │  1. Scan QR Code         │
    ├─────────────────────────>│
    │                          │
    │  2. Download App Bundle  │
    │<─────────────────────────┤
    │                          │
    │  3. App Loads            │
    │                          │
    │  4. API Call             │
    │  POST /chat              │
    ├─────────────────────────>│ Backend
    │                          │ Port 8000
    │  5. Response             │
    │  { video_url, ... }      │
    │<─────────────────────────┤
    │                          │
    │  6. Video Request        │
    │  GET /videos/...mp4      │
    ├─────────────────────────>│
    │                          │
    │  7. Video Stream         │
    │<═════════════════════════┤
    │                          │
```

---

## 🎉 You're All Set!

If you see the welcome screen and videos play, **congratulations!** 🎊

Your mobile app is working perfectly!

---

## 📚 Next Steps

1. **Test all features** - Go through complete booking flow
2. **Try different languages** - Switch between EN and HI
3. **Test on multiple devices** - iOS and Android
4. **Share with team** - Send QR code to colleagues
5. **Gather feedback** - Note any issues or improvements

---

## 🆘 Still Need Help?

### Documentation
- 📖 [Mobile Setup Guide](mobile-app/README.md)
- 🧪 [Testing Guide](mobile-app/TESTING.md)
- 🏗️ [Architecture](ARCHITECTURE.md)
- ⚡ [Quick Start](QUICK_START.md)

### Common Issues
- Backend not starting → Install dependencies
- QR won't scan → Use tunnel mode
- Video not playing → Check video files
- App crashes → Clear cache

### Debug Mode
1. Shake your phone
2. Tap "Debug Remote JS"
3. Check Chrome DevTools console

---

## 🎊 Success!

You now have a working mobile app for avatar-guided flight booking!

**Enjoy testing!** ✈️📱

---

**Quick Start Summary:**
```bash
# Terminal 1: Backend
cd backend && python main.py

# Terminal 2: Mobile App
cd mobile-app && ./setup.sh && npm start

# Phone: Scan QR code with Expo Go
```

That's it! 🚀
