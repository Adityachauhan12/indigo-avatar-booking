# 🚀 Quick Start Cheat Sheet

## One-Command Setup

### Backend
```bash
cd backend && python main.py
```
✅ Server runs on `http://0.0.0.0:8000`

### Web App
```bash
cd frontend-app && npm start
```
✅ Opens browser at `http://localhost:3000`

### Mobile App (Tunnel Mode - No Same WiFi Needed!)
```bash
cd mobile-app && npm start
```
✅ Scan QR code with Expo Go app (works from anywhere!)

---

## 📱 Mobile App - First Time Setup

### 1. Install Expo Go
- **iOS**: App Store → Search "Expo Go"
- **Android**: Play Store → Search "Expo Go"

### 2. Get Your Local IP
```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```
Example: `192.168.1.100`

### 3. Run Setup Script
```bash
cd mobile-app
./setup.sh
```
This automatically updates your IP in the code!

### 4. Start App
```bash
npm start
```

### 5. Scan QR Code
- Open Expo Go on your phone
- Scan the QR code from terminal
- Wait for app to load (~30 seconds first time)

---

## 🐛 Troubleshooting

### Backend not starting?
```bash
cd backend
pip install -r requirements.txt
python main.py
```

### Mobile app can't connect?
```bash
# Check if backend is running
curl http://localhost:8000/health

# Use tunnel mode if same WiFi doesn't work
cd mobile-app
npm start --tunnel
```

### QR code won't scan?
```bash
# Try tunnel mode (slower but works everywhere)
npm start --tunnel
```

### App crashes?
```bash
# Clear cache and restart
npm start --clear
```

### Video not playing?
- Check backend is serving videos
- Verify video files exist in `/videos` folder
- Test URL: `http://YOUR_IP:8000/videos/english/welcome_en.mp4`

---

## 📂 Project Structure

```
vernacular-avatar-booking(APP)/
│
├── backend/              ← Python FastAPI (Port 8000)
│   └── main.py          ← Start here: python main.py
│
├── frontend-app/         ← React Web App (Port 3000)
│   └── src/App.js       ← Start here: npm start
│
├── mobile-app/           ← React Native Mobile App
│   ├── App.js           ← Main mobile component
│   └── setup.sh         ← Run this first!
│
└── videos/              ← Video assets
    ├── english/
    └── hindi/
```

---

## 🎯 Testing Flow

### Web App
1. Open browser → `http://localhost:3000`
2. Select language
3. Click "Start Booking"
4. Follow avatar guidance

### Mobile App
1. Open Expo Go on phone
2. Scan QR code
3. Select language
4. Tap "Start Booking"
5. Follow avatar guidance

---

## 🔑 Key Files to Edit

### Change API URL (Mobile)
**File:** `mobile-app/App.js`
**Line:** 11
```javascript
const API_BASE = 'http://192.168.1.100:8000';
```

### Change Port (Backend)
**File:** `backend/main.py`
**Line:** Last line
```python
uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
```

### Add New Language
**Files:**
- `backend/avatar_engine.py` - Add language code
- `configs/messages.json` - Add translations
- `videos/{language}/` - Add video files

---

## 📊 Useful Commands

### Backend
```bash
# Start server
python main.py

# Check health
curl http://localhost:8000/health

# View API docs
open http://localhost:8000/docs
```

### Web App
```bash
# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Mobile App
```bash
# Start with QR code
npm start

# Start with tunnel
npm start --tunnel

# Clear cache
npm start --clear

# Run on Android emulator
npm run android

# Run on iOS simulator (macOS only)
npm run ios
```

---

## 🌐 URLs to Remember

| Service | URL | Purpose |
|---------|-----|---------|
| Backend API | http://localhost:8000 | API server |
| API Docs | http://localhost:8000/docs | Swagger UI |
| Health Check | http://localhost:8000/health | Server status |
| Web App | http://localhost:3000 | React web app |
| Mobile App | Scan QR Code | React Native app |

---

## 📱 Expo Go App Links

- **iOS**: https://apps.apple.com/app/expo-go/id982107779
- **Android**: https://play.google.com/store/apps/details?id=host.exp.exponent

---

## ✅ Success Checklist

- [ ] Backend running on port 8000
- [ ] Can access http://localhost:8000/health
- [ ] Web app opens in browser
- [ ] Mobile app QR code appears
- [ ] Expo Go installed on phone
- [ ] Phone and computer on same WiFi
- [ ] Mobile app loads successfully
- [ ] Videos play in both apps
- [ ] Language switching works
- [ ] Booking flow completes

---

## 🎉 You're All Set!

**Web App:** Open browser → Start booking
**Mobile App:** Scan QR → Start booking

Both use the same backend - no extra configuration needed!

---

## 📞 Need More Help?

- **Mobile Setup:** See `mobile-app/README.md`
- **Testing Guide:** See `mobile-app/TESTING.md`
- **Comparison:** See `WEB_VS_MOBILE.md`
- **Backend API:** Visit `http://localhost:8000/docs`

---

## 🔥 Pro Tips

1. **Keep backend running** - Both web and mobile need it
2. **Same WiFi** - Phone and computer must be on same network
3. **Use setup.sh** - Automatically configures your IP
4. **Tunnel mode** - Use when same WiFi doesn't work
5. **Clear cache** - Run `npm start --clear` if app acts weird

Happy Coding! 🚀
