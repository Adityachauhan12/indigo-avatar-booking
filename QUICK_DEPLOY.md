# 🚀 QUICK DEPLOY - 5 Minutes to Global Access

## What You're Getting
✅ **Public Backend** - Anyone can access your API  
✅ **Global App** - Share via link/QR code  
✅ **No Installation** - Users just need Expo Go (free app)  
✅ **100% Free** - Render + Expo free tiers

---

## 🎯 Option 1: Automated (Recommended)

```bash
cd /Users/adityachauhan/Desktop/vernacular-avatar-booking\(APP\)
./deploy.sh
```

Follow the prompts. Done! 🎉

---

## 🎯 Option 2: Manual Steps

### 1️⃣ Push to GitHub (2 min)

```bash
cd /Users/adityachauhan/Desktop/vernacular-avatar-booking\(APP\)

# Initialize git
git init
git add .
git commit -m "IndiGo Avatar Booking System"

# Create repo on GitHub: https://github.com/new
# Name: indigo-avatar-booking

# Push
git remote add origin https://github.com/YOUR_USERNAME/indigo-avatar-booking.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy Backend on Render (3 min)

1. Go to **https://render.com** → Sign up
2. Click **New +** → **Web Service**
3. Connect GitHub → Select `indigo-avatar-booking`
4. Settings:
   ```
   Name: indigo-avatar-backend
   Root Directory: backend
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
   Plan: Free
   ```
5. Click **Create Web Service**
6. Wait 3-5 minutes ⏳

**Your URL**: `https://indigo-avatar-backend.onrender.com`

Test it:
```bash
curl https://indigo-avatar-backend.onrender.com/health
```

### 3️⃣ Update Mobile App (30 sec)

Edit `mobile-app/App.js` line 12:

```javascript
// Change this:
const API_BASE = 'https://pomologically-overminute-linette.ngrok-free.dev';

// To your Render URL:
const API_BASE = 'https://indigo-avatar-backend.onrender.com';
```

### 4️⃣ Publish to Expo (2 min)

```bash
cd mobile-app

# Install EAS CLI (one-time)
npm install -g eas-cli

# Login to Expo
eas login

# Publish
eas update --branch production --message "Public release"
```

**Your App Link**: `https://expo.dev/@your-username/avatar-booking-mobile`

---

## 📲 Share with Anyone

### Option A: QR Code
Expo generates a QR code → Users scan with Expo Go

### Option B: Direct Link
```
exp://exp.host/@your-username/avatar-booking-mobile
```

### Option C: Web Link
```
https://expo.dev/@your-username/avatar-booking-mobile
```

---

## 📱 For Users

1. Install **Expo Go** (free):
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Scan QR code or open link

3. App loads instantly! ✨

---

## ⚡ Update Your App Later

```bash
# Update backend
cd backend
git add .
git commit -m "Backend updates"
git push
# Render auto-deploys in 2-3 min

# Update mobile app
cd mobile-app
eas update --branch production --message "New features"
# Live in 30 seconds
```

---

## 🎯 What This Solves

| Before | After |
|--------|-------|
| ❌ Same WiFi required | ✅ Works from anywhere |
| ❌ ngrok expires | ✅ Permanent URL |
| ❌ Local IP changes | ✅ Fixed domain |
| ❌ APK installation | ✅ Instant load via Expo Go |
| ❌ Manual sharing | ✅ One link/QR for all |

---

## 🆘 Troubleshooting

**Backend sleeping?**
- Render free tier sleeps after 15 min inactivity
- First request takes 30s to wake up
- Solution: Visit `/health` before demo

**Videos not loading?**
- Check videos are in GitHub repo
- Verify `videos/` folder structure
- Test: `https://your-backend.onrender.com/videos/english/welcome_en.mp4`

**App not updating?**
- Clear Expo cache: `expo start --clear`
- Force reload in Expo Go: Shake device → Reload

---

## 💰 Cost Breakdown

| Service | Free Tier | Enough For |
|---------|-----------|------------|
| Render | 750 hrs/month | ✅ Unlimited demos |
| Expo | Unlimited publishes | ✅ Unlimited users |
| GitHub | Unlimited repos | ✅ All your code |
| **Total** | **$0/month** | **🎉 Perfect for MVP** |

---

## 🎉 You're Done!

Your app is now:
- ✅ Deployed globally
- ✅ Accessible via link/QR
- ✅ No installation needed
- ✅ Free forever (on free tiers)

**Share your link and let anyone test it!** 🚀
