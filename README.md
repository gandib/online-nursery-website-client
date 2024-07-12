# Online Nursery Website

## Introduction

An Online Nursery Website offering a wide range of plants and gardening supplies. Shop easily and securely from the comfort of your home.

## Project Description

The Online Nursery Website is designed to provide a seamless online shopping experience for plant enthusiasts. Our platform offers an extensive selection of plants, gardening tools, and accessories. Customers can browse through various categories, view detailed product descriptions, and make purchases securely. The website aims to promote the joy of gardening and make high-quality plants accessible to everyone.

## Features

- **Product Catalog:** Browse and search a wide range of plants and gardening products.
- **Product Details:** Detailed descriptions, images, and care instructions for each product.
- **Shopping Cart:** Add, remove, and manage products in the shopping cart.
- **Order Management:** Place and track orders.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technology Stack

**Frontend:**

- Vite
- Redux RTK Query
- React Toastify
- TypeScript
- React Router DOM
- DaisyUI
- Tailwind CSS

**Backend:**

- Node.js
- Express
- TypeScript
- Mongoose

## Installation Guideline

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gandib/online-nursery-website-client
   cd online-nursery-website-client
   git clone https://github.com/gandib/online-nursery-website-server
   cd online-nursery-website-server
   ```

2. **Install dependencies:**

   **Frontend:**

   ```bash
   cd client
   npm install
   ```

   **Backend:**

   ```bash
   cd server
   npm install
   ```

3. **Configuration:**

   Create a `.env` file in the root directory of both the frontend and backend projects and add the necessary configuration variables.

   **Frontend .env:**

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

   **Backend .env:**

   ```env
   PORT=5000
   DB_URL=your_mongodb_connection_uri
   ```

4. **Run the project:**

   **Frontend:**

   ```bash
   cd client
   npm start
   ```

   **Backend:**

   ```bash
   cd server
   npm start
   ```

## Usage

1. **Access the website:**
   Open your web browser and navigate to `http://localhost:3000`.

2. **Browse Products:**
   Explore the product catalog and view detailed information.

3. **Add to Cart:**
   Add desired products to your shopping cart.

4. **Checkout:**
   Proceed to checkout, enter shipping information, and place your order.

5. **Manage Products And Categories:**
   View and update your Products information.
