# MeshChat Landing Page

A clean, responsive landing page for **MeshChat**, a hybrid communication app that works both online and offline using Bluetooth and Wi-Fi Direct technologies.

## 🚀 Features
- 📶 Download button linked directly to the APK hosted on Google Drive
- 📱 Responsive design using Tailwind CSS
- 🔐 Highlights encryption and offline-first architecture
- 🧩 Sections for Problem, Target Users, Solution, Tech Stack, and More
- 🎨 Fully themed to match the MeshChat mobile UI

## 📂 Folder Structure
```
/Frontend/
├── index.html          # The main landing page
└── assets/
    ├── logo.png         # Logo (green "MC") – add your actual file here
    └── qr.png           # QR code image for download – optional
```

## 📥 How to Use
1. **Upload your APK to Google Drive**
   - Make sure it's set to: "Anyone with the link can view"
   - Copy the **file ID** from the shareable link

2. **Replace the download button link**
   In `index.html`, find this line:
```html
<a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
```
Replace `YOUR_FILE_ID` with your actual Google Drive file ID.

3. **Deploy**
You can host this on any static hosting service like:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- GitHub Pages

## 🛠 Built With
- HTML5
- Tailwind CSS (CDN)

## 🙏 Acknowledgment
Designed by the **MeshChat Team** for bridging communication gaps in disconnected environments.

> "Communicate anywhere, anytime — even without the internet."
