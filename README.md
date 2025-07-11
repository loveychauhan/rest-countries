# 🌍 REST Countries Explorer

An elegant and responsive React app that displays country data using the [REST Countries API](https://restcountries.com/). Browse, search, and explore global information with smooth UI transitions and dynamic routing.


[LIVE DEMO](restcountriesite.netlify.app)

## ✨ Features

- 🔎 **Live Search** – Filter countries by name in real time  
- 🏳️ **Flag Display** – Show country flags with alt text for accessibility  
- 📍 **Detail Navigation** – Click on a country to view detailed info  
- 🌙 **Dark Mode Support** – Toggle themes for better UX  
- ⚛️ **React Router Integration** – Seamless page transitions  
- 🧠 **Context API** – Theme management across components

## 🧩 Component Breakdown

- `CountriesList.jsx` – Fetches and displays all countries with search functionality  
- `CountryDetail.jsx` – Shows detailed info for selected country  
- `Header.jsx` – Navigation and theme toggle  
- `ThemeContext.js` – Global theme state management

## 🔧 Tech Stack

- **React 19**  
- **Parcel** for bundling  
- **React Router v7**  
- **REST Countries API v3.1**  
- **Context API** for global state  
- **CSS Modules** for styling

## 🚀 Getting Started

```bash
git clone https://github.com/loveychauhan/rest-countries.git
cd rest-countries
npm install
npm start
