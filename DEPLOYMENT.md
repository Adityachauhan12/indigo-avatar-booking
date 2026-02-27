# 🚀 Deployment Guide - Render.com (Free)

## ✅ What You'll Get
- **Public Backend URL**: `https://indigo-avatar-backend.onrender.com`
- **Anyone can access**: No VPN, no same WiFi needed
- **Free tier**: 750 hours/month (enough for demos)

---

## 📋 Step-by-Step Deployment

### 1️⃣ Push Backend to GitHub

```bash
cd /Users/adityachauhan/Desktop/vernacular-avatar-booking\(APP\)

# Initialize git (if not already)
git init
git add backend/ videos/
git commit -m "Initial backend + videos"

# Create GitHub repo and push
# Go to github.com → New Repository → "indigo-avatar-backend"
git remote add origin https://github.com/YOUR_USERNAME/indigo-avatar-backend.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy on Render

1. Go to **https://render.com** → Sign up (free)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repo: `indigo-avatar-backend`
4. Configure:
   - **Name**: `indigo-avatar-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Plan**: `Free`
5. Click **"Create Web Service"**

⏳ Wait 3-5 minutes for deployment...

### 3️⃣ Get Your Public URL

After deployment, you'll get:
```
https://indigo-avatar-backend.onrender.com
```

Test it:
```bash
curl https://indigo-avatar-backend.onrender.com/health
```

Should return:
```json
{"status":"healthy","message":"Backend is running!"}
```

---

## 📱 Update Mobile App

Update `mobile-app/App.js`:

```javascript
// OLD (local)
const API_BASE = 'https://pomologically-overminute-linette.ngrok-free.dev';

// NEW (public)
const API_BASE = 'https://indigo-avatar-backend.onrender.com';
```

---

## 🌍 Publish App to Expo

### 1️⃣ Install EAS CLI
```bash
npm install -g eas-cli
```

### 2️⃣ Login to Expo
```bash
eas login
# Enter your Expo account credentials
```

### 3️⃣ Configure EAS
```bash
cd mobile-app
eas build:configure
```

### 4️⃣ Publish Update
```bash
eas update --branch production --message "Public release with Render backend"
```

### 5️⃣ Get Shareable Link
After publishing, you'll get:
```
https://expo.dev/@your-username/avatar-booking-mobile
```

---

## 📲 Share with Anyone

**Option 1: QR Code**
- Expo generates a QR code
- Users scan with Expo Go app
- App loads instantly

**Option 2: Direct Link**
```
exp://exp.host/@your-username/avatar-booking-mobile
```

**Option 3: Web Link**
```
https://expo.dev/@your-username/avatar-booking-mobile
```

---

## ⚠️ Important Notes

### Videos on Render
Render's free tier has **ephemeral storage** - files reset on restart. Your videos will work but:
- First load after restart might be slow
- Consider moving videos to Cloudflare R2 (free 10GB) for production

### Free Tier Limits
- **Render**: Sleeps after 15 min inactivity (first request takes 30s to wake)
- **Expo**: Unlimited publishes on free tier
- **Solution**: For demos, wake up backend first by visiting `/health`

---

## 🎯 Quick Commands

```bash
# Deploy backend updates
git add .
git commit -m "Update backend"
git push origin main
# Render auto-deploys

# Publish app updates
cd mobile-app
eas update --branch production --message "New features"

# Check backend status
curl https://indigo-avatar-backend.onrender.com/health
```

---

## 🔥 Next Steps

1. ✅ Deploy backend to Render
2. ✅ Update API_BASE in App.js
3. ✅ Publish to Expo
4. ✅ Share link with testers
5. 🎉 Anyone with Expo Go can use your app!

---

## 🆘 Troubleshooting

**Backend not responding?**
```bash
# Check Render logs
# Dashboard → Your Service → Logs
```

**App not loading?**
```bash
# Clear Expo cache
cd mobile-app
expo start --clear
```

**Videos not playing?**
- Check video URLs in browser
- Ensure videos/ folder is in GitHub repo
- Verify StaticFiles mount in main.py
