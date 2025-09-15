# Restaurant Menu App

A responsive web application built with **React** and **JavaScript** that displays a digital restaurant menu.  
This was my **first paid freelance project (2021)** for a real restaurant, and it remained in use for several years.

---

## 🚀 Features
- **Category navigation**: header with categories that smoothly scrolls to the corresponding menu section.  
- **Product details**: click on an item to view a larger image and description.  
- **Responsive design**: optimized for both desktop and mobile.  
- **Dynamic content**: menu items managed via a **Google Spreadsheet**, parsed into objects using [PapaParse](https://www.papaparse.com/).  

---

## 🛠️ Tech Stack
- **Frontend:** React (JavaScript)  
- **Data Source:** Google Sheets (CSV export + PapaParse)  
- **Deployment:** Firebase Hosting  

---

## 📊 Impact
- Provided the restaurant with a **low-cost, self-managed digital menu**.  
- Staff could update menu items directly in Google Sheets without editing the codebase.  
- Eliminated the need for reprinting physical menus.  
- The solution stayed in production and actively used until 2024. 

---

## 🔧 How it works
1. Menu items are stored in a Google Spreadsheet.  
2. The app fetches and parses the spreadsheet data via PapaParse.  
3. Content is rendered dynamically in React, grouped by category.  
4. Clicking categories scrolls to the section, clicking products expands images and descriptions.  

---

## 📂 Project Status
- **Completed (2021)**  
- Production version is no longer actively maintained, but the code reflects a functional and effective real-world solution.  
