## Zomato Backend Project
---

This project is a backend system for managing restaurants, menus, orders, and user data using Node.js, Sequelize, and MySQL.
<br>
It handles the creation of database models, relationships between entities, and provides API endpoints for managing data.

---

## 🚀 Features

- **User Authentication**  
  - Register new users with unique email & phone  
  - Login validation  

- **Restaurant Management**  
  - Register new restaurants with ratings and operational status  

- **Menu Management**  
  - Add menu items linked to specific restaurants  
  - Track price, ratings, veg/non-veg, and availability  

- **Order Processing**  
  - Create and store orders with order details  
  - Automatically link orders to users and restaurants  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MySQL  
- **ORM:** Sequelize  
- **Language:** JavaScript  

---

## File Structure

📦 zomato_backend_project
<br>
├── dbconnect.js # MySQL database connection using Sequelize
<br>
├── model.js # Sequelize models & relationships
<br>
├── index.js # API routes and server

---

## 🛠️ Prerequisites 

1. `Node.Js`
      <br>
2. `Mysql`
     <br>
3. `VSCODE`
     <br>

---

## Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/zomato_backend_project.git
cd zomato_backend_project
```

## 2️⃣ Install dependencies
```bash
npm install
```

## 3️⃣ Configure the database
Edit dbconnect.js with your MySQL credentials:
```bash
const sequelize = new Sequelize("firstdb", "root", "your_password", {
    host: "localhost",
    dialect: "mysql"
});
```

## 4️⃣ Run the server
```bash
node index.js
```
Server runs on http://localhost:8080

---
## 📜 Example Request (Register Restaurant)
```bash
POST /registerRestaurant
{
    "rest_name": "Pizza Palace",
    "rest_address": "123 Food Street",
    "rest_phone": 9876543210,
    "rest_rating": 4,
    "rest_status": true
}
```

## 📡 API Endpoints

## **User APIs**
| Method | Endpoint        | Description          |
|--------|----------------|----------------------|
| POST   | `/registerUser` | Register a new user  |
| POST   | `/login`        | Login user           |

## **Restaurant APIs**
| Method | Endpoint              | Description            |
|--------|----------------------|------------------------|
| POST   | `/registerRestaurant` | Add a new restaurant   |

## **Menu APIs**
| Method | Endpoint  | Description      |
|--------|-----------|------------------|
| POST   | `/addmenu`| Add a menu item  |

## **Order APIs**
| Method | Endpoint      | Description         |
|--------|--------------|---------------------|
| POST   | `/createOrder`| Create a new order |

---
## ✍️ Author
**Rishitha Battu**


