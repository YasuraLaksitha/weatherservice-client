# 🌤️ SkyCast—Weather Forecast App

SkyCast is a sleek and responsive weather forecast web application built with **React**, **TypeScript**, and **Tailwind CSS**. It fetches real-time weather data via a secure API with **Auth0 authentication** and displays it with a clean modular layout.

---

## 🚀 Features

- Fetch all weather data
- Dynamic background with random color picker
- Auth0-based login with MFA & token-secured API calls
- Detailed weather states: temperature, pressure, humidity, wind details, sunrise/sunset
- Responsive and animated UI with React and Tailwind

---

## 📦 Tech Stack

- React + TypeScript
- Redux Toolkit
- Tailwind CSS
- Auth0
- Vite

---

## ⚙️ Setup & Installation

```bash
# Clone the repo
git clone https://github.com/YasuraLaksitha/weatherservice-client.git
cd weatherservice-client

# Install dependencies
npm install

# Set up environment variables
cp .env
# Fill in the necessary values:
# VITE_SERVER_URL='http://localhost:8081/api'

# Start the app
npm run dev

### 📡 Backend Service
The API used by this frontend is available here:  
👉 [WeatherService API Repo](https://github.com/YasuraLaksitha/weatherservice.git)

