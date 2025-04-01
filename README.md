# 🌦️ Weather React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![OpenWeather](https://img.shields.io/badge/OpenWeather-FF6C37?style=for-the-badge&logo=OpenWeather&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> 📌 **A modern, fast, and intuitive weather forecast application built with React, Vite, and the OpenWeather API.**

## 📸 Demo

👉 [Live Demo - ReactWeather](https://weathereact.vercel.app)

![Weather React App Screenshot](https://private-user-images.githubusercontent.com/70818222/429057187-8861df43-3b4a-45c8-87d4-581792150d78.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1MTU3NTUsIm5iZiI6MTc0MzUxNTQ1NSwicGF0aCI6Ii83MDgxODIyMi80MjkwNTcxODctODg2MWRmNDMtM2I0YS00NWM4LTg3ZDQtNTgxNzkyMTUwZDc4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDAxVDEzNTA1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzOTM1ZTJiN2IzMDYyODZhNzZhNTIwZGUwYzUyNjE1MDYwMTVjYjIzZTU5YzM2YmI5Y2NiZjdhOTE2NTRjN2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Zlhb4_kPIZtEtOjZ7GEkl8VAzEyEgWp0EToBEaAEJg0)

## 🚀 Features

- ✅ Real-time weather data for any city worldwide
- ✅ Detailed current conditions including temperature, weather description, humidity & wind speed
- ✅ Clean, minimalist UI designed for optimal user experience
- ✅ Comprehensive error handling for invalid searches
- ✅ Fully responsive design optimized for all devices
- ✅ Fast loading times with Vite's optimized build

## 🛠️ Tech Stack

- **Frontend:** 
  - React 18 for building the UI components
  - JavaScript (ES6+) for application logic
  - Vite for lightning-fast development and optimized builds
  - Custom CSS for styling

- **API Integration:** 
  - [OpenWeatherMap API](https://openweathermap.org/api) for accurate weather data
  - Fetch API for handling HTTP requests

- **Deployment:** 
  - Vercel for continuous deployment and hosting

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Abishan13/react-weather-app.git

# Navigate to the project directory
cd react-weather-app

# Install dependencies
npm install

# Create a .env file in the root directory and add your OpenWeather API key
echo "VITE_API_KEY=your_api_key_here" > .env

# Start the development server
npm run dev
```

## 🔨 Building for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 🧪 Project Structure

```
react-weather-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── ErrorMessage.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── main.css
├── .env
├── index.html
├── package.json
└── vite.config.js
```

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Abishan Arulneethan - [Portfolio](https://www.arulabishan.com) - [LinkedIn](https://www.linkedin.com/in/abishanarul/)

---

⭐ Star this repo if you find it useful! ⭐
